import { DatabaseManager } from '../src/DatabaseManager';
import { assert, expect } from 'chai';
import { Maze } from '@mazemasterjs/shared-library/Maze';
import { Cursor } from 'mongodb';

// test cases
describe('DatabaseManager Tests', () => {
  let mongo: DatabaseManager;
  let mazeRaw: Maze;
  let mazeStored: Maze;
  const MONGO_COL_MAZES = process.env.MONGO_COL_MAZES + '';
  const MONGO_COL_TEAMS = process.env.MONGO_COL_TEAMS + '';
  const MONGO_COL_SCORES = process.env.MONGO_COL_SCORES + '';

  before('Mongo Client should connect', () =>
    DatabaseManager.getInstance()
      .then(instance => {
        mongo = instance;
        return expect(mongo.isConnected()).to.be.true;
      })
      .then(() => {
        mazeRaw = new Maze().generate(3, 3, 5, 'DatabaseManager_TestName', 'DatabaseManager_TestSeed');
      })
      .catch(error => {
        return assert.fail(error);
      }),
  );

  after('Mongo Client should disconnect', () => {
    mongo.disconnect();
    expect(mongo.isConnected()).to.equal(false);
  });

  it(`MongoDB should be connected`, () => {
    expect(mongo.isConnected()).to.be.equal(true);
  });

  it(`Mazes collection count should be greater than 0`, () => {
    return mongo.countDocuments(MONGO_COL_MAZES).then(result => {
      expect(result).to.be.greaterThan(0);
    });
  });

  it(`Scores collection count should be 0.`, () => {
    return mongo.countDocuments(MONGO_COL_SCORES).then(result => {
      expect(result).to.equal(0);
    });
  });

  it(`Teams collection count should be 0.`, () => {
    return mongo.countDocuments(MONGO_COL_TEAMS).then(result => {
      expect(result).to.equal(0);
    });
  });

  it(`getAllDocuments cursor.count should be greater than 0`, () => {
    const cur: Cursor = mongo.getAllDocuments(MONGO_COL_MAZES);
    return cur.count(true).then(count => {
      expect(count).to.be.greaterThan(0);
    });
  });

  it(`Maze document should be inserted`, () => {
    // need to create a copy of the maze to insert
    // since mongo tags the object with the generated object _id
    mazeStored = new Maze(mazeRaw);
    return mongo.insertDocument(MONGO_COL_MAZES, mazeStored).then(result => {
      expect(result.insertedCount).to.equal(1);
    });
  });

  it(`getDocument should return null if document is not found`, () => {
    return mongo.getDocument(MONGO_COL_MAZES, '0:0:0:FakeName:FakeSeed').then(doc => {
      expect(doc).to.be.equal(null);
    });
  });

  it(`Same maze cannot be inserted twice`, () => {
    // need to create a copy of the maze to insert
    // since mongo tags the object with the generated object _id
    const tmpMaze = new Maze(mazeRaw);
    return mongo
      .insertDocument(MONGO_COL_MAZES, tmpMaze)
      .then(result => {
        expect(result).to.equal(undefined);
      })
      .catch(err => {
        expect(err.message).to.contain('E11000 duplicate key error collection');
      });
  });

  it(`Maze from database should match maze in memory`, () => {
    return mongo.getDocument(MONGO_COL_MAZES, mazeRaw.Id).then(doc => {
      const mazeFromDb: Maze = new Maze(doc);
      expect(JSON.stringify(mazeFromDb)).to.equal(JSON.stringify(mazeRaw));
    });
  });

  it(`updateDocument should return successfully`, () => {
    mazeStored.Note = 'MongDBHandler.test Unit Test Note';
    return mongo.updateDocument(MONGO_COL_MAZES, mazeStored.Id, mazeStored).then(result => {
      expect(result.modifiedCount).to.equal(1);
    });
  });

  it(`Maze from database contain updates`, () => {
    return mongo.getDocument(MONGO_COL_MAZES, mazeRaw.Id).then(doc => {
      const mazeFromDb: Maze = new Maze(doc);
      expect(mazeFromDb.Note).to.equal(mazeStored.Note);
    });
  });

  it(`Maze document should be deleted`, () => {
    return mongo.deleteDocument(MONGO_COL_MAZES, mazeRaw.Id).then(result => {
      expect(result.deletedCount).to.equal(1);
    });
  });
});
