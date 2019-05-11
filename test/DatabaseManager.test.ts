import { DatabaseManager } from '../src/DatabaseManager';
import { assert, expect } from 'chai';
import { Maze } from '@mazemasterjs/shared-library/Maze';

// test cases
describe('DatabaseManager Tests', () => {
  let mongo: DatabaseManager;
  let mazeRaw: Maze;
  let mazeStored: Maze;
  const prjMazeStub = { _id: 0, cells: 0, textRender: 0 };
  const MONGO_COL_MAZES = process.env.MONGO_COL_MAZES + '';
  const MONGO_COL_TEAMS = process.env.MONGO_COL_TEAMS + '';
  const MONGO_COL_SCORES = process.env.MONGO_COL_SCORES + '';
  const MONGO_CURSOR_LIMIT: number = parseInt(process.env.MONGO_CURSOR_LIMIT + '', 10);
  const overLimit = MONGO_CURSOR_LIMIT + 5;

  before('Mongo Client should connect', () =>
    DatabaseManager.getInstance()
      .then(instance => {
        mongo = instance;
        return expect(mongo.isConnected()).to.be.true;
      })
      .then(() => {
        mazeRaw = new Maze().generate(3, 3, 5, 'DBM_TName', 'DBM_TSeed');
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

  // default maze set contains 21 mazes as of 5/11/2019
  it(`getDocumentCount(MONGO_COL_MAZES) should be > 20`, () => {
    return mongo.getDocumentCount(MONGO_COL_MAZES).then(count => {
      expect(count).to.be.greaterThan(0);
    });
  });

  it(`getDocumentCount(MONGO_COL_MAZES, {id: "FAKE_ID"}) should equal 0`, () => {
    return mongo.getDocumentCount(MONGO_COL_MAZES, { id: 'FAKE_ID' }).then(result => {
      expect(result).to.equal(0);
    });
  });

  it(`getDocumentCount(MONGO_COL_SCORES) should be > 0`, () => {
    return mongo.getDocumentCount(MONGO_COL_SCORES).then(result => {
      expect(result).to.be.greaterThan(0);
    });
  });

  it(`Teams collection count should be 0.`, () => {
    return mongo.getDocumentCount(MONGO_COL_TEAMS).then(result => {
      expect(result).to.equal(0);
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
    return mongo.getDocument(MONGO_COL_MAZES, { id: '0:0:0:FakeName:FakeSeed' }, prjMazeStub).then(doc => {
      expect(doc).to.be.equal(null);
    });
  });

  it(`getDocuments(MONGO_COL_MAZES, {}, ${overLimit}, 1) should only return ${MONGO_CURSOR_LIMIT} documents`, () => {
    return mongo.getDocuments(MONGO_COL_MAZES, {}, prjMazeStub, overLimit, 1).then(mazeDocs => {
      expect(mazeDocs.length).to.equal(MONGO_CURSOR_LIMIT);
    });
  });

  it(`getDocuments(MONGO_COL_MAZES, {}, 2, 1) should return 2 documents`, () => {
    return mongo.getDocuments(MONGO_COL_MAZES, {}, prjMazeStub, 2, 1).then(mazeDocs => {
      expect(mazeDocs.length).to.equal(2);
    });
  });

  it(`getDocuments(...) - different pages should have different documents`, () => {
    return mongo.getDocuments(MONGO_COL_MAZES, {}, prjMazeStub, 2, 1).then(pageOne => {
      return mongo.getDocuments(MONGO_COL_MAZES, {}, prjMazeStub, 2, 2).then(pageTwo => {
        expect(pageOne[0].id).to.not.equal(pageTwo[0].id);
      });
    });
  });

  it(`getDocuments({ width: 3, height: 3}) should more only 3x3 mazes`, () => {
    return mongo
      .getDocuments(MONGO_COL_MAZES, { height: 3, width: 3 }, prjMazeStub, MONGO_CURSOR_LIMIT, 1)
      .then(mazeDocs => {
        let passed = true;
        for (const maze of mazeDocs) {
          if (maze.height !== 3 || maze.width !== 3) {
            passed = false;
          }
        }

        return expect(passed).to.be.true;
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

  it(`getDocument database should match maze in memory`, () => {
    return mongo.getDocument(MONGO_COL_MAZES, { id: mazeRaw.Id }, {}).then(doc => {
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

  it(`Maze from database should contain updates`, () => {
    return mongo.getDocument(MONGO_COL_MAZES, { id: mazeRaw.Id }).then(doc => {
      const mazeFromDb: Maze = new Maze(doc);
      expect(mazeFromDb.Note).to.equal(mazeStored.Note);
    });
  });

  it(`Updated Maze from database without projection {note: 0} should not contain a note`, () => {
    return mongo.getDocument(MONGO_COL_MAZES, { id: mazeRaw.Id }, { note: 0 }).then(doc => {
      return expect(doc.note).to.be.undefined;
    });
  });

  it(`Maze document should be deleted`, () => {
    return mongo.deleteDocument(MONGO_COL_MAZES, { id: mazeRaw.Id }).then(result => {
      expect(result.deletedCount).to.equal(1);
    });
  });
});
