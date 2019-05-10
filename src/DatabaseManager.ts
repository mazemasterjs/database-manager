import {
  Collection,
  Db,
  DeleteWriteOpResultObject,
  InsertOneWriteOpResult,
  MongoClient,
  UpdateWriteOpResult,
} from 'mongodb';

import { Logger } from '@mazemasterjs/logger';

export class DatabaseManager {
  /**
   * Hacky singleton pattern that returns a promise instead of an instance - there must be a better way!
   *
   * Consumers need to .then((instance)=>){} this promise and assign the returned instance to a DatabaseManager
   * variable in order to use it.
   *
   * @resolve Promise<any>
   * @reject Error
   */

  public static async getInstance(): Promise<any> {
    /* istanbul ignore else */
    if (!DatabaseManager.instance) {
      Logger.getInstance().debug(__filename, 'getInstance()', 'Instantiating new instance of class.');

      // get the mongo-related properties from environment variables
      const MONGO_CONNSTR = process.env.MONGO_CONNSTR + '';
      const MONGO_DB = process.env.MONGO_DB + '';
      const MONGO_COL_MAZES = process.env.MONGO_COL_MAZES + '';
      const MONGO_COL_TEAMS = process.env.MONGO_COL_TEAMS + '';
      const MONGO_COL_SCORES = process.env.MONGO_COL_SCORES + '';

      // Then make sure that they were all found...
      let errs = '';

      /* istanbul ignore if */
      if (MONGO_CONNSTR === '') {
        errs += 'MONGO_CONNSTR ';
      }

      /* istanbul ignore if */
      if (MONGO_DB === '') {
        errs += 'MONGO_DB ';
      }

      /* istanbul ignore if */
      if (MONGO_COL_MAZES === '') {
        errs += 'MONGO_COL_MAZES ';
      }

      /* istanbul ignore if */
      if (MONGO_COL_TEAMS === '') {
        errs += 'MONGO_COL_TEAMS ';
      }

      /* istanbul ignore if */
      if (MONGO_COL_SCORES === '') {
        errs += 'MONGO_COL_SCORES ';
      }

      // If any errors were found, we need to bail out here.
      /* istanbul ignore if */
      if (errs !== '') {
        const err = new Error('!! CANNOT CONTINUE !! The following variables were not set: ' + errs);
        Logger.getInstance().error(__filename, 'initConnection()', 'Missing Environment Variable', err);
        throw err;
      }

      // special warning for CURSOR_LIMIT
      if (process.env.MONGO_CURSOR_LIMIT === '') {
        Logger.getInstance().warn(
          __filename,
          'initConnection()',
          'MONGO_CURSOR_LIMIT was not set, using default value: 10',
        );
      }

      // looks like we have everything we need
      const instance = new DatabaseManager();

      instance.log.debug(__filename, 'initConnection()', `Awaiting MongoClient.connect(...)`);
      instance.mongoClient = await MongoClient.connect(MONGO_CONNSTR, { useNewUrlParser: true });

      // set the static instance
      DatabaseManager.instance = instance;
      instance.log.debug(__filename, 'initConnection()', 'Instance set, caching collections...');

      // Cache the collection objects as static member variables - vastly improves performance
      const db: Db = instance.mongoClient.db(MONGO_DB);
      DatabaseManager.mazes = db.collection(MONGO_COL_MAZES);
      DatabaseManager.scores = db.collection(MONGO_COL_SCORES);
      DatabaseManager.teams = db.collection(MONGO_COL_TEAMS);

      // w00t! Log some success :)
      instance.log.debug(
        __filename,
        'initConnection()',
        `Collections cached. DatabaseManager instance is connected and ready.`,
      );
    }

    // return the promise containing our instance (or an error)
    return new Promise((resolve, reject) => {
      /* istanbul ignore if */
      if (!DatabaseManager.instance) {
        reject(new Error('DatabaseManager.instance is not defined.'));
      } else {
        resolve(DatabaseManager.instance);
      }
    });
  }

  // get/declare static variables
  private static instance: DatabaseManager;

  // most of the env vars are only needed during getInstance -> initConnection, but
  // this value needs to be a member so it can be used by class functions
  private static MONGO_CURSOR_LIMIT =
    process.env.MONGO_CURSOR_LIMIT === '' ? 10 : parseInt(process.env.MONGO_DB + '', 10);

  private static mazes: Collection;
  private static scores: Collection;
  // private static games: Collection;
  private static teams: Collection;

  // get logger instance
  private log: Logger = Logger.getInstance();

  // declare mongo classes
  private mongoClient: MongoClient | undefined;

  // must use getInstance()
  private constructor() {}

  /**
   * Return the document count of the given collection
   *
   * @param collectionName string
   */
  public countDocuments(collectionName: string): Promise<number> {
    this.log.debug(__filename, `countDocuments(${collectionName})`, 'Attempting to get document count.');
    return this.getCollection(collectionName).countDocuments({});
  }

  /**
   * Return all documents in the given collection that match the given parameters
   *
   * @param collectionName string
   * @param pageNumber number - the page
   */
  public async getDocuments(
    collectionName: string,
    pageNumber: number,
    pageSize: number,
    objParams: any,
  ): Promise<Array<any>> {
    this.log.debug(
      __filename,
      `getDocuments(${collectionName}, ${pageSize}, ${pageNumber}, ${JSON.stringify(objParams)})`,
      'Getting documents...',
    );

    // shift page number back one if >0 - it's more intuitive to start with "page 1"
    if (pageNumber > 0) {
      pageNumber--;
    }

    if (pageSize > DatabaseManager.MONGO_CURSOR_LIMIT) {
      this.log.warn(
        __filename,
        `getDocuments(${collectionName}, ${pageSize}, ${pageNumber}, ${JSON.stringify(objParams)})`,
        `!! WARNING !! pageSize(${pageSize}) exceed configured MONGO_CURSOR_LIMIT (${
          DatabaseManager.MONGO_CURSOR_LIMIT
        }).  ONLY THE FIRST ${DatabaseManager.MONGO_CURSOR_LIMIT} RECORDS WILL BE RETURNED!`,
      );
    }

    // grab the cursor (with skip & limit)
    const cur = this.getCollection(collectionName)
      .find(objParams)
      .skip(pageNumber * pageSize)
      .limit(pageSize);

    // convert to array because looping cursors is annoying
    // and I don't want to have to load mongodb as a dependency
    const docs = await cur.toArray();

    return new Promise((resolve, reject) => {
      /* istanbul ignore else */
      if (!docs || !cur) {
        reject(new Error(`Unable to retrieve [ ${collectionName} ] collection.`));
      } else {
        resolve(docs);
      }
    });
  }

  /**
   * Return all documents in the given collection (danger - not paged!)
   *
   * @param collectionName string
   */
  public async getDocument(collectionName: string, docId: string): Promise<any> {
    const method = `getDocument(${collectionName}, ${docId})`;
    this.log.debug(__filename, method, 'Fetching document...');
    const doc = await this.getCollection(collectionName).findOne({ id: docId });

    if (!doc) {
      this.log.warn(__filename, method, 'Document not found.');
    }

    return doc;
  }

  /**
   * Update the document with the given docId with the given document data
   *
   * @param collectionName string
   * @param docId string
   * @param doc <any>
   */
  public updateDocument(collectionName: string, docId: string, doc: any): Promise<UpdateWriteOpResult> {
    const method = `updateDocument(${collectionName}, ${docId}, ${doc})`;
    this.log.debug(__filename, method, 'Attempting to update document.');
    return this.getCollection(collectionName)
      .updateOne({ id: docId }, { $set: doc }, { upsert: false })
      .catch(err => {
        this.log.error(__filename, method, 'Error while updating document -> ', err);
        return err;
      });
  }

  /**
   * Insert the given document into the specified collection
   *
   * @param collectionName string
   * @param doc any
   */
  public insertDocument(collectionName: string, doc: any): Promise<InsertOneWriteOpResult> {
    const method = `insertDocument(${collectionName}, ${doc})`;
    this.log.debug(__filename, method, 'Attempting to insert document.');

    return this.getCollection(collectionName).insertOne(doc);
    // .catch((err) => {
    //     this.log.error(__filename, method, 'Error while inserting document -> ', err);
    //     return err;
    // });
  }

  /**
   * Delete the document with the given ID from the specified collection
   *
   * @param collectionName string
   * @param id string
   */
  public deleteDocument(collectionName: string, id: string): Promise<DeleteWriteOpResultObject> {
    this.log.debug(__filename, `deleteDocument(${id})`, 'Attempting to delete document.');

    return this.getCollection(collectionName)
      .deleteOne({ id })
      .catch(err => {
        this.log.error(__filename, 'deleteDocument()', 'Error while deleting document', err);
        return err;
      });
  }

  /**
   * Returns true of the db object is defined.
   */
  public isConnected(): boolean {
    /* istanbul ignore else */
    if (this.mongoClient) {
      return this.mongoClient.isConnected();
    } else {
      return false;
    }
  }

  /**
   * Close the database connection.
   */
  public disconnect() {
    /* istanbul ignore else */
    if (this.mongoClient && this.mongoClient.isConnected()) {
      this.log.debug(__filename, 'disconnect()', 'Closing MongoClient Connection');
      this.mongoClient.close();
    } else {
      this.log.warn(__filename, 'disconnect()', 'MongoClient is not ' + (this.mongoClient ? 'defined' : 'connected'));
    }
  }

  /**
   * Gets and returns the database collection with the matching collectionName
   *
   * @param collectionName
   * @return MongDB Collection
   * @throws Invalid Collection Name error
   * @throws Undefined / Not Connected error
   */
  private getCollection(collectionName: string): Collection {
    this.log.trace(__filename, `getCollection(${collectionName})`, 'Getting collection.');

    /* istanbul ignore else */
    if (this.mongoClient && this.mongoClient.isConnected()) {
      switch (collectionName) {
        case 'mazes':
          return DatabaseManager.mazes;
        case 'scores':
          return DatabaseManager.scores;
        case 'teams':
          return DatabaseManager.teams;
        default:
          throw new Error(`Invalid collection name: ${collectionName}`);
      }
    } else {
      throw new Error('mongoClient is ' + (this.mongoClient ? 'undefined' : 'not connected'));
    }
  }
}

export default DatabaseManager;
