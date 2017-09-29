import { expectSaga } from 'redux-saga-test-plan';
import {
  listFailed as listFailedAction,
  listSent as listSentAction,
  listSucceeded as listSucceededAction,
} from '../../../Actions/Pokemon';
import { listSentSaga, listSent } from './list';

describe('listSentSaga', () => {
  const listSentMock = expectSaga(listSentSaga);

  it('receives POKEMON_LIST_SENT', () => {
    listSentMock
    .put(listSentAction({ offset: 100 }));
  });

  it('forks to listSent', () => {
    listSentMock
    .fork(listSent);
  });

  it('ends', () => {
    listSentMock
    .run();
  });
});

describe('listtSent', () => {
  describe('when it succeeds', () => {
    fetch.mockResponse(JSON.stringify({}));
    const listSentMock = expectSaga(listSent, listSentAction({ offset: 100 }));

    it('dispatches a getSucceeded action', () => {
      listSentMock
      .put(listSucceededAction({ offset: 100 }));
    });

    it('ends', () => {
      listSentMock
      .run();
    });
  });

  describe('when it fails', () => {
    fetch.mockResponse({ status: 400 });
    const listSentMock = expectSaga(listSent, listSentAction({ offset: 100 }));

    it('dispatches a getFailed action', () => {
      listSentMock
      .put(listFailedAction({ offset: 100 }));
    });

    it('ends', () => {
      listSentMock
      .run();
    });
  });
});
