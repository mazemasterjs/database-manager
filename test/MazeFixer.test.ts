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
    mongo.updateDocument(MONGO_COL_MAZES, {id: mazeData.id}, mazeData);
    return expect(true).to.be.true;
  });

});

const mazeData =    {
  "id": "25:30:6:DeaDas_v1.0.0",
  "height": 25,
  "width": 30,
  "challenge": 6,
  "name": "Deadly Dash",
  "seed": "DeaDas_v1.0.0",
  "cells": [
      [
          {
              "pos": {
                  "row": 0,
                  "col": 0
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 1
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 2
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 3
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 4
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 5
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 6
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 7
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 8
              },
              "exits": 14,
              "tags": 8,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 9
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 10
              },
              "exits": 4,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 11
              },
              "exits": 12,
              "tags": 8,
              "traps": 1,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 12
              },
              "exits": 14,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 13
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 14
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 15
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 16
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 17
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 18
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 19
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 20
              },
              "exits": 14,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 21
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 22
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 23
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 24
              },
              "exits": 3,
              "tags": 13,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 25
              },
              "exits": 4,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 26
              },
              "exits": 14,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 27
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 28
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 0,
                  "col": 29
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 1,
                  "col": 0
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 1
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 2
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 3
              },
              "exits": 3,
              "tags": 8,
              "traps": 8,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 4
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 5
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 6
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 7
              },
              "exits": 11,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 8
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 9
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 10
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 11
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 12
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 13
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 14
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 15
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 16
              },
              "exits": 3,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 17
              },
              "exits": 3,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 18
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 19
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 20
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 21
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 22
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 23
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 24
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 25
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 26
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 27
              },
              "exits": 3,
              "tags": 12,
              "traps": 8,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 28
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 1,
                  "col": 29
              },
              "exits": 3,
              "tags": 8,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 2,
                  "col": 0
              },
              "exits": 7,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 1
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 2
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 3
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 4
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 5
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 6
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 7
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 8
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 9
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 10
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 11
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 12
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 13
              },
              "exits": 7,
              "tags": 8,
              "traps": 2,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 14
              },
              "exits": 14,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 15
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 16
              },
              "exits": 7,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 17
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 18
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 19
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 20
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 21
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 22
              },
              "exits": 7,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 23
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 24
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 25
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 26
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 27
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 28
              },
              "exits": 12,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 2,
                  "col": 29
              },
              "exits": 11,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 3,
                  "col": 0
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 1
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 2
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 3
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 4
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 5
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 6
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 7
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 8
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 9
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 10
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 11
              },
              "exits": 3,
              "tags": 8,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 12
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 13
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 14
              },
              "exits": 3,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 15
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 16
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 17
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 18
              },
              "exits": 12,
              "tags": 12,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 19
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 20
              },
              "exits": 3,
              "tags": 12,
              "traps": 8,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 21
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 22
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 23
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 24
              },
              "exits": 14,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 25
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 26
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 27
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 28
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 3,
                  "col": 29
              },
              "exits": 3,
              "tags": 12,
              "traps": 1,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 4,
                  "col": 0
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 1
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 2
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 3
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 4
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 5
              },
              "exits": 13,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 6
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 7
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 8
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 9
              },
              "exits": 4,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 10
              },
              "exits": 11,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 11
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 12
              },
              "exits": 3,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 13
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 14
              },
              "exits": 3,
              "tags": 8,
              "traps": 1,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 15
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 16
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 17
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 18
              },
              "exits": 12,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 19
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 20
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 21
              },
              "exits": 12,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 22
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 23
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 24
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 25
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 26
              },
              "exits": 12,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 27
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 28
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 4,
                  "col": 29
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 5,
                  "col": 0
              },
              "exits": 7,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 1
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 2
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 3
              },
              "exits": 4,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 4
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 5
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 6
              },
              "exits": 11,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 7
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 8
              },
              "exits": 14,
              "tags": 8,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 9
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 10
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 11
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 12
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 13
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 14
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 15
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 16
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 17
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 18
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 19
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 20
              },
              "exits": 12,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 21
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 22
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 23
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 24
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 25
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 26
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 27
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 28
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 5,
                  "col": 29
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 6,
                  "col": 0
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 1
              },
              "exits": 8,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 2
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 3
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 4
              },
              "exits": 14,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 5
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 6
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 7
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 8
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 9
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 10
              },
              "exits": 11,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 11
              },
              "exits": 3,
              "tags": 8,
              "traps": 2,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 12
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 13
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 14
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 15
              },
              "exits": 13,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 16
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 17
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 18
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 19
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 20
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 21
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 22
              },
              "exits": 4,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 23
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 24
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 25
              },
              "exits": 12,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 26
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 27
              },
              "exits": 3,
              "tags": 8,
              "traps": 2,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 28
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 6,
                  "col": 29
              },
              "exits": 3,
              "tags": 8,
              "traps": 8,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 7,
                  "col": 0
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 1
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 2
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 3
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 4
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 5
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 6
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 7
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 8
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 9
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 10
              },
              "exits": 3,
              "tags": 8,
              "traps": 1,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 11
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 12
              },
              "exits": 3,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 13
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 14
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 15
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 16
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 17
              },
              "exits": 3,
              "tags": 8,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 18
              },
              "exits": 4,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 19
              },
              "exits": 11,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 20
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 21
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 22
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 23
              },
              "exits": 7,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 24
              },
              "exits": 12,
              "tags": 8,
              "traps": 1,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 25
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 26
              },
              "exits": 12,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 27
              },
              "exits": 11,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 28
              },
              "exits": 3,
              "tags": 8,
              "traps": 2,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 7,
                  "col": 29
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 8,
                  "col": 0
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 1
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 2
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 3
              },
              "exits": 7,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 4
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 5
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 6
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 7
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 8
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 9
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 10
              },
              "exits": 11,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 11
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 12
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 13
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 14
              },
              "exits": 3,
              "tags": 8,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 15
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 16
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 17
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 18
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 19
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 20
              },
              "exits": 14,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 21
              },
              "exits": 8,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 22
              },
              "exits": 3,
              "tags": 12,
              "traps": 2,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 23
              },
              "exits": 3,
              "tags": 8,
              "traps": 2,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 24
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 25
              },
              "exits": 12,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 26
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 27
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 28
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 8,
                  "col": 29
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 9,
                  "col": 0
              },
              "exits": 7,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 1
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 2
              },
              "exits": 4,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 3
              },
              "exits": 11,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 4
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 5
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 6
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 7
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 8
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 9
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 10
              },
              "exits": 3,
              "tags": 8,
              "traps": 2,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 11
              },
              "exits": 3,
              "tags": 8,
              "traps": 1,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 12
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 13
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 14
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 15
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 16
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 17
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 18
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 19
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 20
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 21
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 22
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 23
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 24
              },
              "exits": 3,
              "tags": 12,
              "traps": 8,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 25
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 26
              },
              "exits": 3,
              "tags": 12,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 27
              },
              "exits": 7,
              "tags": 8,
              "traps": 8,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 28
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 9,
                  "col": 29
              },
              "exits": 3,
              "tags": 8,
              "traps": 8,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 10,
                  "col": 0
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 1
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 2
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 3
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 4
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 5
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 6
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 7
              },
              "exits": 7,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 8
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 9
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 10
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 11
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 12
              },
              "exits": 3,
              "tags": 8,
              "traps": 2,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 13
              },
              "exits": 7,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 14
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 15
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 16
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 17
              },
              "exits": 13,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 18
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 19
              },
              "exits": 3,
              "tags": 8,
              "traps": 2,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 20
              },
              "exits": 3,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 21
              },
              "exits": 3,
              "tags": 12,
              "traps": 8,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 22
              },
              "exits": 4,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 23
              },
              "exits": 14,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 24
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 25
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 26
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 27
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 28
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 10,
                  "col": 29
              },
              "exits": 11,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 11,
                  "col": 0
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 1
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 2
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 3
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 4
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 5
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 6
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 7
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 8
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 9
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 10
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 11
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 12
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 13
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 14
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 15
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 16
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 17
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 18
              },
              "exits": 3,
              "tags": 8,
              "traps": 2,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 19
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 20
              },
              "exits": 11,
              "tags": 8,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 21
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 22
              },
              "exits": 12,
              "tags": 12,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 23
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 24
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 25
              },
              "exits": 7,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 26
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 27
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 28
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 11,
                  "col": 29
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 12,
                  "col": 0
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 1
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 2
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 3
              },
              "exits": 3,
              "tags": 8,
              "traps": 8,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 4
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 5
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 6
              },
              "exits": 3,
              "tags": 8,
              "traps": 2,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 7
              },
              "exits": 4,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 8
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 9
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 10
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 11
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 12
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 13
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 14
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 15
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 16
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 17
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 18
              },
              "exits": 7,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 19
              },
              "exits": 8,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 20
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 21
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 22
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 23
              },
              "exits": 12,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 24
              },
              "exits": 11,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 25
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 26
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 27
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 28
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 12,
                  "col": 29
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 13,
                  "col": 0
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 1
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 2
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 3
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 4
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 5
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 6
              },
              "exits": 7,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 7
              },
              "exits": 12,
              "tags": 8,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 8
              },
              "exits": 14,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 9
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 10
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 11
              },
              "exits": 15,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 12
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 13
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 14
              },
              "exits": 14,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 15
              },
              "exits": 8,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 16
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 17
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 18
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 19
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 20
              },
              "exits": 13,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 21
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 22
              },
              "exits": 4,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 23
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 24
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 25
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 26
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 27
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 28
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 13,
                  "col": 29
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 14,
                  "col": 0
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 1
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 2
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 3
              },
              "exits": 7,
              "tags": 8,
              "traps": 1,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 4
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 5
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 6
              },
              "exits": 13,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 7
              },
              "exits": 8,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 8
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 9
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 10
              },
              "exits": 3,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 11
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 12
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 13
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 14
              },
              "exits": 3,
              "tags": 8,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 15
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 16
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 17
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 18
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 19
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 20
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 21
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 22
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 23
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 24
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 25
              },
              "exits": 11,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 26
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 27
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 28
              },
              "exits": 4,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 14,
                  "col": 29
              },
              "exits": 11,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 15,
                  "col": 0
              },
              "exits": 7,
              "tags": 8,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 1
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 2
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 3
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 4
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 5
              },
              "exits": 3,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 6
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 7
              },
              "exits": 14,
              "tags": 8,
              "traps": 1,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 8
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 9
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 10
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 11
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 12
              },
              "exits": 4,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 13
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 14
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 15
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 16
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 17
              },
              "exits": 3,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 18
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 19
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 20
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 21
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 22
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 23
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 24
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 25
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 26
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 27
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 28
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 15,
                  "col": 29
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 16,
                  "col": 0
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 1
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 2
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 3
              },
              "exits": 3,
              "tags": 8,
              "traps": 8,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 4
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 5
              },
              "exits": 11,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 6
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 7
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 8
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 9
              },
              "exits": 13,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 10
              },
              "exits": 8,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 11
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 12
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 13
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 14
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 15
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 16
              },
              "exits": 11,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 17
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 18
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 19
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 20
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 21
              },
              "exits": 3,
              "tags": 12,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 22
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 23
              },
              "exits": 3,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 24
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 25
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 26
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 27
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 28
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 16,
                  "col": 29
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 17,
                  "col": 0
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 1
              },
              "exits": 3,
              "tags": 8,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 2
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 3
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 4
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 5
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 6
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 7
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 8
              },
              "exits": 11,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 9
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 10
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 11
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 12
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 13
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 14
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 15
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 16
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 17
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 18
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 19
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 20
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 21
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 22
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 23
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 24
              },
              "exits": 3,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 25
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 26
              },
              "exits": 12,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 27
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 28
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 17,
                  "col": 29
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 18,
                  "col": 0
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 1
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 2
              },
              "exits": 7,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 3
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 4
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 5
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 6
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 7
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 8
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 9
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 10
              },
              "exits": 3,
              "tags": 8,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 11
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 12
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 13
              },
              "exits": 7,
              "tags": 8,
              "traps": 8,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 14
              },
              "exits": 8,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 15
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 16
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 17
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 18
              },
              "exits": 3,
              "tags": 8,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 19
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 20
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 21
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 22
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 23
              },
              "exits": 11,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 24
              },
              "exits": 7,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 25
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 26
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 27
              },
              "exits": 14,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 28
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 18,
                  "col": 29
              },
              "exits": 3,
              "tags": 12,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 19,
                  "col": 0
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 1
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 2
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 3
              },
              "exits": 7,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 4
              },
              "exits": 8,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 5
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 6
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 7
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 8
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 9
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 10
              },
              "exits": 11,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 11
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 12
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 13
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 14
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 15
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 16
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 17
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 18
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 19
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 20
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 21
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 22
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 23
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 24
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 25
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 26
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 27
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 28
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 19,
                  "col": 29
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 20,
                  "col": 0
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 1
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 2
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 3
              },
              "exits": 7,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 4
              },
              "exits": 12,
              "tags": 8,
              "traps": 2,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 5
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 6
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 7
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 8
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 9
              },
              "exits": 3,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 10
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 11
              },
              "exits": 8,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 12
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 13
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 14
              },
              "exits": 7,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 15
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 16
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 17
              },
              "exits": 3,
              "tags": 8,
              "traps": 2,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 18
              },
              "exits": 3,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 19
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 20
              },
              "exits": 14,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 21
              },
              "exits": 8,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 22
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 23
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 24
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 25
              },
              "exits": 4,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 26
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 27
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 28
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 20,
                  "col": 29
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 21,
                  "col": 0
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 1
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 2
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 3
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 4
              },
              "exits": 8,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 5
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 6
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 7
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 8
              },
              "exits": 3,
              "tags": 8,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 9
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 10
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 11
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 12
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 13
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 14
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 15
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 16
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 17
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 18
              },
              "exits": 13,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 19
              },
              "exits": 8,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 20
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 21
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 22
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 23
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 24
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 25
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 26
              },
              "exits": 12,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 27
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 28
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 21,
                  "col": 29
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 22,
                  "col": 0
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 1
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 2
              },
              "exits": 3,
              "tags": 8,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 3
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 4
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 5
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 6
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 7
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 8
              },
              "exits": 13,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 9
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 10
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 11
              },
              "exits": 4,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 12
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 13
              },
              "exits": 3,
              "tags": 8,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 14
              },
              "exits": 1,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 15
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 16
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 17
              },
              "exits": 6,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 18
              },
              "exits": 12,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 19
              },
              "exits": 12,
              "tags": 12,
              "traps": 8,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 20
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 21
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 22
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 23
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 24
              },
              "exits": 3,
              "tags": 12,
              "traps": 1,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 25
              },
              "exits": 3,
              "tags": 12,
              "traps": 4,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 26
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 27
              },
              "exits": 3,
              "tags": 12,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 28
              },
              "exits": 3,
              "tags": 12,
              "traps": 2,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 22,
                  "col": 29
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 23,
                  "col": 0
              },
              "exits": 2,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 1
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 2
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 3
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 4
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 5
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 6
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 7
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 8
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 9
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 10
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 11
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 12
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 13
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 14
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 15
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 16
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 17
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 18
              },
              "exits": 10,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 19
              },
              "exits": 6,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 20
              },
              "exits": 12,
              "tags": 8,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 21
              },
              "exits": 10,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 22
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 23
              },
              "exits": 3,
              "tags": 12,
              "traps": 64,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 24
              },
              "exits": 3,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 25
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 26
              },
              "exits": 11,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 27
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 28
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 23,
                  "col": 29
              },
              "exits": 3,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ],
      [
          {
              "pos": {
                  "row": 24,
                  "col": 0
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 1
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 2
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 3
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 4
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 5
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 6
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 7
              },
              "exits": 13,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 8
              },
              "exits": 8,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 9
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 10
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 11
              },
              "exits": 13,
              "tags": 8,
              "traps": 2,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 12
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 13
              },
              "exits": 5,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 14
              },
              "exits": 13,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 15
              },
              "exits": 8,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 16
              },
              "exits": 7,
              "tags": 14,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 17
              },
              "exits": 12,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 18
              },
              "exits": 13,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 19
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 20
              },
              "exits": 4,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 21
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 22
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 23
              },
              "exits": 9,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 24
              },
              "exits": 5,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 25
              },
              "exits": 12,
              "tags": 12,
              "traps": 8,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 26
              },
              "exits": 13,
              "tags": 12,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 27
              },
              "exits": 12,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 28
              },
              "exits": 12,
              "tags": 8,
              "traps": 8,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          },
          {
              "pos": {
                  "row": 24,
                  "col": 29
              },
              "exits": 9,
              "tags": 8,
              "traps": 0,
              "visits": 0,
              "lastVisit": 0,
              "notes": []
          }
      ]
  ],
  "textRender": "+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+ S +---+---+---+---+---+\n|   |       |               |    >t<    |    >p<            |       |       | .   .         |   | . |     .   . |       |\n+   +   +   +   +---+---+   +   +   +   +---+---+   +---+   +   +   +   +   +   +   +---+   +   +   +---+   +   +   +   +\n|   |   |   |>f<|       |    >D<|   |               |   |       |>D<|>D<|   | . | . |   |   |   | . | .   . |>f<|   |>t<|\n+   +   +   +   +   +   +---+   +   +---+---+---+---+   +---+---+   +   +   +   +   +   +   +   +   +   +---+   +---+   +\n|       |       |   |       |   |       |   |       |>m<        |       |   | . | . |   |       | .   . |   | .   .   . |\n+   +---+---+---+   +---+   +---+---+   +   +   +   +   +   +   +   +---+---+   +   +   +   +---+---+---+   +---+---+   +\n|   |       |       |   |       |       |   |>t<|   |   |>D<|   |   | .  >D<  . |>f<|       | .   .         | .   . |>p<|\n+---+   +   +   +---+   +---+   +   +---+   +   +   +   +   +   +   +   +---+---+   +---+---+   +   +---+---+   +   +   +\n|       |       |           |       |       |   |>D<|   |>p<|   |   | .   .   . | .   .   . | . | . | .   .   . | .   . |\n+   +---+---+---+   +---+   +---+---+---+   +   +   +   +   +---+   +---+---+   +---+---+   +   +   +   +---+---+---+---+\n|           |       |       |    >t<    |   |   |       |       |           | .   .   . | .   . | . | .   . |   |       |\n+   +---+   +---+---+   +   +   +   +   +   +   +---+---+---+   +---+---+   +---+---+   +---+---+   +---+   +   +   +   +\n|       |   |           |   |   |   |       |>m<|                   |       |       | . |       | .   .   . |>m<|   |>f<|\n+---+---+   +   +   +---+---+   +   +---+   +   +   +---+---+---+   +   +---+   +   +   +---+   +---+---+---+   +   +   +\n|       |   |   |   |       |   |   |   |>p<|   |>D<|   |       |   |>t<|       |   | .   . |    >p<     >D<    |>m<|   |\n+   +   +   +   +---+   +   +   +   +   +   +   +   +   +   +   +   +   +---+   +---+---+   +   +---+---+---+   +   +   +\n|   |       |>D<    |   |       |   |       |   |   |   |>t<|       |       |           |>m<|>m<| .   .   . |   |   |   |\n+   +---+---+   +   +   +---+---+   +---+   +   +   +   +   +---+---+---+   +---+   +---+   +   +   +---+   +   +   +   +\n|>D<    |       |       |       |       |>m<|>p<|   |   |   |           |       |   | .   . |   |>f<|   |>t<|>f<    |>f<|\n+   +   +---+   +---+---+   +   +---+   +   +   +   +   +   +   +---+   +---+   +   +   +---+---+   +   +   +   +---+   +\n|   |       |           |   |       |   |   |   |>m<|       |   |    >D<    |>m<|>D<|>f<|    >t<  . |   | . |   | .   . |\n+---+---+   +---+---+   +---+   +   +   +---+   +   +   +---+   +   +---+   +   +   +   +---+   +---+   +   +---+   +   +\n|           |       |   |       |   |   |       |   |   |       |       |>m<|    >t<| .  >D<  . |   | .   . | .   . | . |\n+   +---+---+   +   +   +   +---+   +   +   +---+   +---+   +---+---+   +   +---+   +---+---+---+   +   +---+   +---+   +\n|   |       |>f<|   |   |>m<|       |       |   |       |           |   |       |   |        >D<    | .   . | .   . | . |\n+   +   +   +   +---+   +   +---+---+---+---+   +---+   +---+---+   +   +   +---+   +   +---+---+   +---+   +---+   +   +\n|   |   |   |   |       |    >t<        |           |           |   |   |   |           |       |   |   | . | .   . | . |\n+   +   +   +   +   +---+   +---+   +   +   +   +   +---+   +---+   +   +---+   +---+---+---+   +   +   +   +   +---+   +\n|   |   |   |>p<    |           |   |   |>D<|   |       |>t<|       |   |       | .   . |       |       | . | . |     . |\n+   +   +   +   +---+   +---+---+   +---+   +   +---+   +   +   +---+   +   +---+   +   +   +---+---+   +   +   +---+   +\n|>t<    |   |   |   |>D<|    >p<    |       |   |       |   |   |   |>D<|   | .   . | . |   |           | . | .   . | . |\n+   +---+   +   +   +   +   +   +---+   +---+   +---+---+   +   +   +   +   +   +---+   +   +   +---+---+   +---+   +   +\n|   |       |>f<|    >D<|   |   |           |   |           |       |       | .   . |>D<|   |>D<|   | .   . | .   . | . |\n+   +   +---+   +---+   +   +---+   +---+---+   +   +---+---+---+   +---+---+---+   +   +   +   +   +   +---+   +---+   +\n|   |>t<|   |       |   |           |   |       |   |           |   |       | .   . | . |   |   |>D<| .   .   . |   | . |\n+   +   +   +---+   +---+---+---+   +   +   +---+   +   +---+   +   +   +   +   +---+   +   +   +   +---+---+---+   +   +\n|   |   |       |       |       |       |>t<|       |>f<    |   |       |>t<| .   . | . |       |       |           |>t<|\n+   +   +   +   +---+   +   +   +---+---+   +   +---+   +---+   +---+---+   +---+   +   +---+   +   +   +   +   +---+   +\n|   |   |   |       |       |       |       |       |   |       |       |   | .   . | .   . |   |   |       |   | .   . |\n+   +   +   +   +---+---+---+---+   +   +   +---+   +   +   +---+   +   +   +   +---+---+   +   +   +---+---+   +   +---+\n|   |   |   |    >m<            |   |>D<|       |       |       |   |>m<|>D<| .  >p<    | . |       |           | . |   |\n+   +   +---+   +---+---+---+   +   +   +---+---+---+---+   +   +   +   +   +---+   +---+   +---+---+---+---+---+   +   +\n|   |       |       |           |>t<|   |               |   |       |           | . | .   . | .   . | .   .   . | . |   |\n+   +---+   +---+---+   +---+---+   +   +   +---+---+   +   +---+---+---+---+---+   +   +---+   +   +   +---+   +   +   +\n|       |>t<|       |   |               |   |       |>t<|   |       | .   .  >f<  . | .   . | . |>p<|>t<|   |>D<|>m<|   |\n+---+   +   +   +   +   +   +---+---+---+   +---+   +   +---+   +   +   +---+---+---+---+   +   +   +   +   +   +   +   +\n|   |   |   |   |   |       |           |       |   |   |       |   | .   . |    >D<    | . |>D<| . | .   . | .   . |   |\n+   +   +   +   +   +---+---+   +---+   +---+   +   +   +   +---+   +---+   +   +---+   +   +   +   +---+   +---+---+   +\n|       |       |                   |        >m<    |           | .   .   .     |       | .   . | .  >f<  .      >f<    |\n+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+ F +---+---+---+---+---+---+---+---+---+---+---+---+---+\n",
  "startCell": {
      "row": 0,
      "col": 24
  },
  "finishCell": {
      "row": 24,
      "col": 16
  },
  "shortestPathLength": 163,
  "trapCount": 85,
  "note": "",
  "lastUpdated": 1561305458780
}
