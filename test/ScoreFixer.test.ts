import { DatabaseManager } from '../src/DatabaseManager';
import { assert, expect } from 'chai';
// import { Score } from '@mazemasterjs/shared-library/Score';

// test cases
describe('DatabaseManager Tests', () => {
  let mongo: DatabaseManager;

  // db specific consts
  //  const prjMazeStub = { _id: 0, cells: 0, textRender: 0 };
  const MONGO_COL_SCORES = process.env.MONGO_COL_SCORES + '';

  before('Mongo Client should connect', () =>
    DatabaseManager.getInstance()
      .then(instance => {
        mongo = instance;
        return expect(mongo.isConnected()).to.be.true;
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
  it(`getDocumentCount(MONGO_COL_SCORES) should be > 2000`, () => {
    return mongo.getDocumentCount(MONGO_COL_SCORES).then(count => {
      expect(count).to.be.greaterThan(2000);
    });
  });

  // get all scores
  it(`getDOcument(MONGO_COL_SCORES) should be > 2000`, async () => {
    // let pageNum = 1;
    return await mongo.getDocuments(MONGO_COL_SCORES, {}, { lastUpdated: -1 }, {}, 5000, 0).then(scores => {
      scores.forEach(score => {
        if (score.teamId === 'JD_A_TEAM_01') {
          console.log('Score: ', score);
          // mongo.updateDocument(MONGO_COL_SCORES, { id: score.id }, score);
          mongo.deleteDocument(MONGO_COL_SCORES, { id: score.id });
        }
      });

      // scores.sort((s1, s2) => {
      //   return s2.totalScore - s1.totalScore;
      // });

      // scores.forEach(score => {
      //   console.log(score.id, 'Total: ' + score.totalScore);
      // });

      return expect(true).to.be.true;
    });
  });
});
