import { expectSaga } from 'redux-saga-test-plan';
import {
  getFailed as getFailedAction,
  getSent as getSentAction,
  getSucceeded as getSucceededAction,
} from '../../../Actions/Pokemon';
import { getSentSaga, getSent } from './get';

describe('getSentSaga', () => {
  const getSentMock = expectSaga(getSentSaga);

  it('receives POKEMON_GET_SENT', () => {
    getSentMock
    .put(getSentAction({ name: 'pikachu' }));
  });

  it('forks to getSent', () => {
    getSentMock
    .fork(getSent);
  });

  it('ends', () => {
    getSentMock
    .run();
  });
});

describe('getSent', () => {
  describe('when it succeeds', () => {
    fetch.mockResponse(JSON.stringify({}));
    const getSentMock = expectSaga(getSent, getSentAction({ name: 'pikachu' }));

    it('dispatches a getSucceeded action', () => {
      getSentMock
      .put(getSucceededAction({ pokemon: {} }));
    });

    it('ends', () => {
      getSentMock
      .run();
    });
  });

  describe('when it fails', () => {
    fetch.mockResponse({ status: 400 });
    const getSentMock = expectSaga(getSent, getSentAction({ name: 'pikachu' }));

    it('dispatches a getFailed action', () => {
      getSentMock
      .put(getFailedAction({ name: 'pikachu' }));
    });

    it('ends', () => {
      getSentMock
      .run();
    });
  });
});
