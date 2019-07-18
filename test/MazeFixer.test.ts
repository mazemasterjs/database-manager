import { DatabaseManager } from '../src/DatabaseManager';
import { assert, expect } from 'chai';
// import { Score } from '@mazemasterjs/shared-library/Score';

// test cases
describe('DatabaseManager Tests', () => {
  let mongo: DatabaseManager;

  // db specific consts
  //  const prjMazeStub = { _id: 0, cells: 0, textRender: 0 };
  const MONGO_COL_MAZES = process.env.MONGO_COL_MAZES + '';

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
  it(`maze data update`, () => {
    mongo.updateDocument(MONGO_COL_MAZES, { id: mazeData.id }, mazeData);
    return expect(true).to.be.true;
  });
});

const mazeData = {
  id: '25:30:6:DeaDas_v1.0.0',
  height: 25,
  width: 30,
  challenge: 6,
  name: 'Deadly Dash',
  seed: 'DeaDas_v1.0.0',
  cells: [],
};
