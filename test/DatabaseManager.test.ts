import { DatabaseManager } from '../src/DatabaseManager';
import { assert, expect } from 'chai';
import { Maze } from '@mazemasterjs/shared-library/Maze';
import { User } from '@mazemasterjs/shared-library/User';

// test cases
describe('DatabaseManager Tests', () => {
  let mongo: DatabaseManager;

  // for maze testing
  let mazeRaw: Maze;
  let mazeStored: Maze;

  // for botcode testing
  const botCodeId = 'jd-test-bot';
  const botCodeVer1 = "function sayHi() { console.log('hello'); }";
  const botCodeVer1a = "function sayHi() { console.log('hi'); }";
  const botCodeVer2 = "function sayHowdy() { console.log('howdy'); }";

  // for user testing
  let userFromJson: User;
  const expectedPwHash = 'a4b9e35e64240d3c079c997741f0ba95';
  const user: User = new User();
  user.UserName = 'Test-User-1';
  user.FirstName = 'Test';
  user.LastName = 'User';
  user.TeamId = 'Team-1';
  user.BotId = 'Bot-1';
  user.setPassword('passwordish');

  // db specific consts
  const prjMazeStub = { _id: 0, cells: 0, textRender: 0 };
  const MONGO_COL_MAZES = process.env.MONGO_COL_MAZES + '';
  const MONGO_COL_TEAMS = process.env.MONGO_COL_TEAMS + '';
  const MONGO_COL_USERS = process.env.MONGO_COL_USERS + '';
  const MONGO_COL_BOTCODE = process.env.MONGO_COL_BOTCODE + '';
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
    // wait 1 second for the last db operation to complete
    // before ripping away the connection
    return setTimeout(() => {
      expect(mongo.disconnect()).to.equal(true);
    }, 1000);
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

  it(`Teams collection count should be > 0.`, () => {
    return mongo.getDocumentCount(MONGO_COL_TEAMS).then(result => {
      expect(result).to.be.greaterThan(0);
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
    return mongo.getDocuments(MONGO_COL_MAZES, {}, {}, prjMazeStub, overLimit, 1).then(mazeDocs => {
      expect(mazeDocs.length).to.equal(MONGO_CURSOR_LIMIT);
    });
  });

  it(`getDocuments(MONGO_COL_MAZES, {}, 2, 1) should return 2 documents`, () => {
    return mongo.getDocuments(MONGO_COL_MAZES, {}, {}, prjMazeStub, 2, 1).then(mazeDocs => {
      expect(mazeDocs.length).to.equal(2);
    });
  });

  it(`getDocuments(...) - different pages should have different documents`, () => {
    return mongo.getDocuments(MONGO_COL_MAZES, {}, {}, prjMazeStub, 2, 1).then(pageOne => {
      return mongo.getDocuments(MONGO_COL_MAZES, {}, {}, prjMazeStub, 2, 2).then(pageTwo => {
        expect(pageOne[0].id).to.not.equal(pageTwo[0].id);
      });
    });
  });

  it(`getDocuments({ width: 3, height: 3}) should more only 3x3 mazes`, () => {
    return mongo
      .getDocuments(MONGO_COL_MAZES, { height: 3, width: 3 }, {}, prjMazeStub, MONGO_CURSOR_LIMIT, 1)
      .then(mazeDocs => {
        let passed = true;
        for (const maze of mazeDocs) {
          if (maze.height !== 3 || maze.width !== 3) {
            passed = false;
          }
        }

        expect(passed).to.be.equal(true);
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
    return mongo.updateDocument(MONGO_COL_MAZES, { id: mazeStored.Id }, mazeStored).then(result => {
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

  it(`A test maze with name MultiDeleteTest-name-1 should be inserted`, () => {
    const m1 = new Maze().generate(3, 3, 3, 'MultiDeleteTest-name-1', 'MultiDeleteTest-seed-1');

    return mongo
      .insertDocument(MONGO_COL_MAZES, m1)
      .then(result => {
        expect(result.insertedCount).to.equal(1);
      })
      .catch(err => {
        expect(err.message).to.contain('E11000');
      });
  });

  it(`A test maze with name MultiDeleteTest-name-2 should be inserted`, () => {
    const m2 = new Maze().generate(3, 3, 3, 'MultiDeleteTest-name-2', 'MultiDeleteTest-seed-2');
    return mongo
      .insertDocument(MONGO_COL_MAZES, m2)
      .then(result => {
        expect(result.insertedCount).to.equal(1);
      })
      .catch(err => {
        expect(err.message).to.contain('E11000');
      });
  });

  it(`Two test mazes fitting the regex /^MultiDeleteTest-name/ should be deleted`, () => {
    return mongo
      .deleteDocuments(MONGO_COL_MAZES, { name: /^MultiDeleteTest-name/ })
      .then(r3 => {
        expect(r3.deletedCount).to.equal(2);
      })
      .catch((err: Error) => {
        assert.fail(err);
      });
  });

  it(`A test maze with name MultiDeleteTest-width-1 and width 13 should be inserted`, () => {
    const m1 = new Maze().generate(3, 13, 3, 'MultiDeleteTest-width-1', 'MultiDeleteTest-seed-1');

    return mongo
      .insertDocument(MONGO_COL_MAZES, m1)
      .then(result => {
        expect(result.insertedCount).to.equal(1);
      })
      .catch(err => {
        expect(err.message).to.contain('E11000');
      });
  });

  it(`A test maze with name MultiDeleteTest-width-2 and width 13 should be inserted`, () => {
    const m2 = new Maze().generate(3, 13, 3, 'MultiDeleteTest-width-2', 'MultiDeleteTest-seed-2');
    return mongo
      .insertDocument(MONGO_COL_MAZES, m2)
      .then(result => {
        expect(result.insertedCount).to.equal(1);
      })
      .catch(err => {
        expect(err.message).to.contain('E11000');
      });
  });

  it(`Two test mazes with width 13 should be deleted`, () => {
    const query = { width: 13 };

    return mongo
      .deleteDocuments(MONGO_COL_MAZES, query)
      .then(r3 => {
        expect(r3.deletedCount).to.equal(2);
      })
      .catch((err: Error) => {
        assert.fail(err);
      });
  });

  it(`getDocuments(...) - sorting decending by shortestPathLength should return mazeId 45:45:10:WitWan_v0.0.1`, () => {
    return mongo.getDocuments(MONGO_COL_MAZES, {}, { shortestPathLength: -1 }, prjMazeStub, 2, 1).then(pageOne => {
      expect(pageOne[0].id).to.equal('60:60:10:SisStr_v1.0.0');
    });
  });

  it(`getDocuments(...) - sorting ascending by shortestPathLength should return mazeId 3:3:1:TinTre_v0.0.1`, () => {
    return mongo.getDocuments(MONGO_COL_MAZES, {}, { shortestPathLength: 1 }, prjMazeStub, 2, 1).then(pageOne => {
      expect(pageOne[0].id).to.equal('3:3:1:TinTre_v1.0.0');
    });
  });

  /* BOTCODE TESTS */

  it(`insertDocument(...) - bot "${botCodeId}" should have a new code version inserted`, () => {
    const newBotCode = { botId: botCodeId, version: '0.0.1', code: botCodeVer1, lastUpdated: Date.now() };
    return mongo.insertDocument(MONGO_COL_BOTCODE, newBotCode).then(result => {
      expect(result.insertedCount).to.equal(1);
    });
  });

  it(`getDocuments(...) - bot "${botCodeId}" should have a bot code versions`, () => {
    return mongo.getDocuments(MONGO_COL_BOTCODE, { botId: botCodeId }, { version: 1 }, {}, 10, 1).then(pageOne => {
      expect(pageOne[0].version).to.equal('0.0.1');
    });
  });

  it(`getDocuments(...) - bot "${botCodeId}" code version 0.0.1 should match expected value in botCodeVer1`, () => {
    return mongo.getDocuments(MONGO_COL_BOTCODE, { botId: botCodeId }, { version: 1 }, {}, 10, 1).then(pageOne => {
      const codeDoc = pageOne[0];
      expect(codeDoc.code).to.equal(botCodeVer1);
    });
  });

  it(`updateDocument(...) - bot "${botCodeId}" code version should not change on update`, async () => {
    let codeDoc = await mongo
      .getDocuments(MONGO_COL_BOTCODE, { botId: botCodeId, version: '0.0.1' }, { version: 1 }, {}, 10, 1)
      .then(pageOne => {
        return pageOne[0];
      });

    codeDoc.code = botCodeVer1a;
    codeDoc = await mongo.updateDocument(MONGO_COL_BOTCODE, { botId: botCodeId, version: '0.0.1' }, codeDoc);

    return mongo.getDocuments(MONGO_COL_BOTCODE, { botId: botCodeId }, { version: 1 }, {}, 10, 1).then(pageOne => {
      const newDoc = pageOne[0];
      return expect(newDoc.version).to.equal('0.0.1');
    });
  });

  it(`getDocuments(...) - bot "${botCodeId}" code version 0.0.1 should match expected value in botCodeVer1a`, () => {
    return mongo.getDocuments(MONGO_COL_BOTCODE, { botId: botCodeId }, { version: 1 }, {}, 10, 1).then(pageOne => {
      const codeDoc = pageOne[0];
      expect(codeDoc.code).to.equal(botCodeVer1a);
    });
  });

  it(`insertDocument(...) - bot "${botCodeId}" should have a new code version inserted`, () => {
    const newBotCode = { botId: botCodeId, version: '0.0.2', code: botCodeVer2, lastUpdated: Date.now() };
    return mongo.insertDocument(MONGO_COL_BOTCODE, newBotCode).then(result => {
      expect(result.insertedCount).to.equal(1);
    });
  });
  it(`getDocuments(...) - bot "${botCodeId}" code version 1 should match expected value in botCodeVer1a`, () => {
    return mongo.getDocuments(MONGO_COL_BOTCODE, { botId: botCodeId }, { version: -1 }, {}, 10, 1).then(pageOne => {
      const codeDoc = pageOne[0];
      expect(codeDoc.version).to.equal('0.0.2');
    });
  });

  it(`getDocuments(...) - bot "${botCodeId}" first version should be 0.0.1 should match `, () => {
    return mongo.getDocuments(MONGO_COL_BOTCODE, { botId: botCodeId }, { version: -1 }, {}, 10, 1).then(pageOne => {
      const codeDoc = pageOne[0];
      expect(codeDoc.code).to.equal(botCodeVer2);
    });
  });

  it(`getDocumentCount(MONGO_COL_BOTCODE, botCodeId=${botCodeId}) should be 2`, () => {
    return mongo.getDocumentCount(MONGO_COL_BOTCODE, { botId: botCodeId }).then(count => {
      expect(count).to.equal(2);
    });
  });

  it(`deleteDocument(...) bot code doc v1 should be deleted`, () => {
    return mongo.deleteDocument(MONGO_COL_BOTCODE, { botId: botCodeId, version: '0.0.1' }).then(result => {
      expect(result.deletedCount).to.equal(1);
    });
  });

  it(`deleteDocument(...) bot code doc v2 should be deleted`, () => {
    return mongo.deleteDocument(MONGO_COL_BOTCODE, { botId: botCodeId, version: '0.0.2' }).then(result => {
      expect(result.deletedCount).to.equal(1);
    });
  });

  it(`getDocumentCount(MONGO_COL_BOTCODE, botCodeId=${botCodeId}) should be 0`, () => {
    return mongo.getDocumentCount(MONGO_COL_BOTCODE, { botId: botCodeId }).then(count => {
      expect(count).to.equal(0);
    });
  });

  // ** USER TESTS **//
  it(`User document ${user.UserName} should be inserted`, () => {
    return mongo.insertDocument(MONGO_COL_USERS, user).then(result => {
      expect(result.insertedCount).to.equal(1);
    });
  });

  it(`userName must be unique`, () => {
    return mongo.insertDocument(MONGO_COL_USERS, user).catch(err => {
      expect(err.code).to.equal(11000);
    });
  });

  it(`User ${user.Id} (${user.UserName}) should be retrieved the database `, () => {
    return mongo.getDocument(MONGO_COL_USERS, { id: user.Id }, {}).then(doc => {
      userFromJson = User.fromJson(doc);
      expect(doc.userName).to.equal(user.UserName);
    });
  });

  it(`userFromJson.validatePwHash('${expectedPwHash}') should be true `, () => {
    return expect(userFromJson.validatePwHash(expectedPwHash)).to.be.true;
  });

  it(`userFromJson.validatePwHash('wrong-hash') should be false `, () => {
    return expect(userFromJson.validatePwHash('wrong-hash')).to.be.false;
  });

  it(`User document ${user.UserName}, ${user.Id}  should be deleted`, () => {
    return mongo.deleteDocument(MONGO_COL_USERS, { id: user.Id }).then(result => {
      expect(result.deletedCount).to.equal(1);
    });
  });
});
