import { call, put, spawn, takeLatest } from 'redux-saga/effects';
import * as types from '../../Actions/actionTypes';
import { listSucceeded, listFailed } from '../../Actions/Pokemon';
import { list as listApi } from '../../Api/Pokemon';

const listSent = function* listSent(action) {
  const { offset } = action.payload;
  try {
    const list = yield call(listApi, { offset });
    yield put(listSucceeded({ offset, list }));
  } catch (e) {
    yield put(listFailed({ message: e.message }));
  }
};

const listSentSaga = function* getSentSaga() {
  yield takeLatest(types.POKEMON_LIST_SENT, listSent);
};

const listSaga = function* listSaga() {
  yield spawn(listSentSaga);
};

export default listSaga;
