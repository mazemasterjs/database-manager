import {
  Collection,
  Db,
  DeleteWriteOpResultObject,
  InsertOneWriteOpResult,
  MongoClient,
  UpdateWriteOpResult,
} from 'mongodb';

import { LOG_LEVELS, Logger } from '@mazemasterjs/logger';

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
      const MONGO_COL_TROPHIES = process.env.MONGO_COL_TROPHIES + '';

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

      /* istanbul ignore if */
      if (MONGO_COL_TROPHIES === '') {
        errs += 'MONGO_COL_TROPHIES ';
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

      instance.logDebug('initConnection()', `Awaiting MongoClient.connect(...)`);
      instance.mongoClient = await MongoClient.connect(MONGO_CONNSTR, { useNewUrlParser: true });

      // set the static instance
      DatabaseManager.instance = instance;
      instance.logDebug('initConnection()', 'Instance set, caching collections...');

      // Cache the collection objects as static member variables - vastly improves performance
      const db: Db = instance.mongoClient.db(MONGO_DB);
      DatabaseManager.mazes = db.collection(MONGO_COL_MAZES);
      DatabaseManager.scores = db.collection(MONGO_COL_SCORES);
      DatabaseManager.teams = db.collection(MONGO_COL_TEAMS);
      DatabaseManager.trophies = db.collection(MONGO_COL_TROPHIES);

      // w00t! Log some success :)
      instance.logDebug('initConnection()', `Collections cached. DatabaseManager instance is connected and ready.`);
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
    process.env.MONGO_CURSOR_LIMIT === '' ? 10 : parseInt(process.env.MONGO_CURSOR_LIMIT + '', 10);

  private static mazes: Collection;
  private static scores: Collection;
  private static teams: Collection;
  private static trophies: Collection;

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
  public async getDocumentCount(collectionName: string, query?: any): Promise<number> {
    // apparently, mongodb doesn't like optional parameters as queries
    // so I have to remap it like this to get the right overload out of .countDocuments(query?: any)
    let countQuery = {};
    if (query !== undefined) {
      countQuery = query;
    }

    // need to expand and log parameters
    /* istanbul ignore if */
    if (this.log.LogLevel > LOG_LEVELS.INFO) {
      this.log.trace(
        __filename,
        `getDocumentCount(${collectionName}, ${JSON.stringify(query)})`,
        'Attempting to get document count.',
      );
    }

    // run the query
    return await this.getCollection(collectionName).countDocuments(countQuery);
  }

  /**
   * Return documents from the specified page set that match the given parameters.
   * For an unrestricted query, provide empty objParams (e.g. {})
   *
   * @param collectionName string - the name of the collection to query
   * @param query any - JSON object with field/value pairs to match against documents
   * @param sort any - JSON object listing fields and sort types: {lastUpdated: -1, name: 1} (sort by lastUpdated (desc) and name (asc) )
   * @param projection any - JSON object listing fields to return
   * @param pageSize number - The max number of documents to return. Cannot exceed env.MONGO_CURSOR_LIMIT
   * @param pageNumber number - The page number (from 1) to return
   *
   */
  public async getDocuments(
    collectionName: string,
    query: any,
    sort: any,
    projection: any,
    pageSize: number,
    pageNumber: number,
  ): Promise<Array<any>> {
    let method = `getDocuments(${collectionName}, ${query}, ${pageSize}, ${pageNumber})`;

    /* istanbul ignore if */
    if (this.log.LogLevel > LOG_LEVELS.DEBUG) {
      method = `getDocuments(${collectionName}, ${JSON.stringify(query)}, ${pageSize}, ${pageNumber})`;
      this.logTrace(method, 'Executing query.');
    }

    // pageSize cannot exceed cursor limit - warn and set, if needed
    if (pageSize > DatabaseManager.MONGO_CURSOR_LIMIT) {
      const msg = `pageSize (${pageSize}) exceeds MONGO_CURSOR_LIMIT (${
        DatabaseManager.MONGO_CURSOR_LIMIT
      }) - results truncated!`;
      pageSize = DatabaseManager.MONGO_CURSOR_LIMIT;
      this.log.warn(__filename, method, msg);
    }

    // pageNumber is zero-based, so adjust it here if needed
    if (pageNumber > 0) {
      pageNumber--;
    }

    // now calculate the number of docs to skip (if any)
    const skip = pageSize * pageNumber;

    // grab the cursor (with skip & limit)
    const cur = this.getCollection(collectionName)
      .find(query)
      .sort(sort)
      .skip(skip)
      .limit(pageSize)
      .project(projection);

    // convert to array because looping cursors is annoying
    // and I don't want to have to load mongodb as a dependency
    const docs = await cur.toArray();

    return new Promise((resolve, reject) => {
      /* istanbul ignore if */
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
   * @param query any - JSON object with field/value pairs to match against documents
   * @param projection any - JSON object listing fields to return
   */
  public async getDocument(collectionName: string, query: any, projection?: any): Promise<any> {
    if (projection === undefined) {
      projection = {};
    }

    // avoid expensive parameter stringify unless debugging
    let method = `getDocument(${collectionName}, ${query}, ${projection})`;
    /* istanbul ignore if */
    if (this.log.LogLevel > LOG_LEVELS.DEBUG) {
      method = `getDocument(${collectionName}, ${JSON.stringify(query)}, ${JSON.stringify(projection)})`;
      this.logTrace(method, 'Executing query.');
    }

    // query for the document
    const doc = await this.getCollection(collectionName).findOne(query, { projection });

    // warn if no doc returned
    if (!doc) {
      this.log.warn(__filename, method, 'Document not found.');
    }

    return doc;
  }

  /**
   * Update the document with the given docId with the given document data
   *
   * @param collectionName string
   * @param query string
   * @param doc <any>
   */
  public async updateDocument(collectionName: string, query: any, doc: any): Promise<UpdateWriteOpResult> {
    // avoid expensive parameter stringify unless debugging
    /* istanbul ignore if */
    this.logTrace(
      `updateDocument(${collectionName}, ${JSON.stringify(query)}, ${doc})`,
      'Attempting to update document.',
    );

    return await this.getCollection(collectionName)
      .updateOne(query, { $set: doc }, { upsert: false })
      .catch(err => {
        this.log.error(
          __filename,
          `updateDocument(${collectionName}, ${JSON.stringify(query)}, ${doc})`,
          'Error while updating document -> ',
          err,
        );
        return err;
      });
  }

  /**
   * Insert the given document into the specified collection
   *
   * @param collectionName string
   * @param doc any
   */
  public async insertDocument(collectionName: string, doc: any): Promise<InsertOneWriteOpResult> {
    // avoid expensive parameter stringify unless debugging
    /* istanbul ignore if */
    if (this.log.LogLevel > LOG_LEVELS.DEBUG) {
      this.log.trace(
        __filename,
        `insertDocument(${collectionName}, ${JSON.stringify(doc)})`,
        'Attempting to insert document.',
      );
    }
    return await this.getCollection(collectionName).insertOne(doc);
  }

  /**
   * Delete the document with the given ID from the specified collection
   *
   * @param collectionName string
   * @param query string
   */
  public async deleteDocument(collectionName: string, query: any): Promise<DeleteWriteOpResultObject> {
    // avoid expensive parameter stringify unless debugging
    /* istanbul ignore if */
    this.logTrace(`deleteDocument(${collectionName}, ${JSON.stringify(query)})`, 'Attempting to delete document.');

    return await this.getCollection(collectionName)
      .deleteOne(query)
      .catch(err => {
        this.log.error(
          __filename,
          `deleteDocument(${collectionName}, ${JSON.stringify(query)})`,
          'Error while deleting document',
          err,
        );
        return err;
      });
  }

  /**
   * Delete all documents that match the given query parameters from the specified collection
   *
   * @param collectionName string
   * @param query string
   */
  public async deleteDocuments(collectionName: string, query: object): Promise<DeleteWriteOpResultObject> {
    // avoid expensive parameter stringify unless debugging
    /* istanbul ignore if */
    this.logTrace(`deleteDocuments(${collectionName}, ${JSON.stringify(query)})`, 'Attempting to delete documents.');

    return await this.getCollection(collectionName)
      .deleteMany(query)
      .then(result => {
        this.logTrace(
          `deleteDocuments(${collectionName}, ${JSON.stringify(query)})`,
          `${result.deletedCount} documents deleted.`,
        );
        return result;
      })
      .catch(err => {
        this.log.error(
          __filename,
          `deleteDocuments(${collectionName}, ${JSON.stringify(query)})`,
          'Error while deleting document',
          err,
        );
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
  public disconnect(): boolean {
    /* istanbul ignore else */
    if (this.mongoClient && this.mongoClient.isConnected()) {
      this.logDebug('disconnect()', 'Closing MongoClient Connection');
      this.mongoClient.close();
    } else {
      this.log.warn(__filename, 'disconnect()', 'MongoClient is not ' + (this.mongoClient ? 'defined' : 'connected'));
    }
    return true;
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
    this.logTrace(`getCollection(${collectionName})`, 'Getting collection.');

    switch (collectionName) {
      case 'mazes':
        return DatabaseManager.mazes;
      case 'scores':
        return DatabaseManager.scores;
      case 'teams':
        return DatabaseManager.teams;
      case 'trophies':
        return DatabaseManager.trophies;
      default:
        throw new Error(`Invalid collection name: ${collectionName}`);
    }
  }

  /**
   * Simple log wrapper to improve performance when not debug logging
   *
   * @param method string - method & parameters to log
   * @param message string - message to log
   */
  private logDebug(method: string, message: string) {
    /* istanbul ignore if */
    if (this.log.LogLevel > LOG_LEVELS.INFO) {
      this.log.debug(__filename, method, message);
    }
  }

  /**
   * Simple log wrapper to improve performance when not trace logging
   *
   * @param method string - method & parameters to log
   * @param message string - message to log
   */
  private logTrace(method: string, message: string) {
    /* istanbul ignore if */
    if (this.log.LogLevel > LOG_LEVELS.DEBUG) {
      this.log.trace(__filename, method, message);
    }
  }
}

export default DatabaseManager;
