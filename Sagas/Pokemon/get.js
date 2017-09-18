import { call, put, spawn, takeLatest } from 'redux-saga/effects';
import camelcaseKeys from 'camelcase-keys';
import * as types from '../../Actions/actionTypes';
import { getSucceeded, getFailed } from '../../Actions/Pokemon';
import { get as getApi } from '../../Api/Pokemon';

const getSent = function* getSent(action) {
  const { name } = action.payload;
  try {
    const pokemon = camelcaseKeys(yield call(getApi, { name }), { deep: true });
    yield put(getSucceeded({ pokemon }));
  } catch ({ message: error }) {
    yield put(getFailed({ name, error }));
  }
};

const getSentSaga = function* getSentSaga() {
  yield takeLatest(types.POKEMON_GET_SENT, getSent);
};

const getSaga = function* getSaga() {
  yield spawn(getSentSaga);
};

export default getSaga;
