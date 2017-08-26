import { call, put, spawn, takeLatest } from 'redux-saga/effects';
import * as types from '../Actions/actionTypes';
import { getSucceeded, getFailed } from '../Actions/Pokemon';
import { get as getApi } from '../Api/Pokemon';

const getSent = function* getSent(action) {
  const { id } = action.payload;
  try {
    const pokemon = yield call(getApi, { id });
    yield put(getSucceeded({ pokemon }));
  } catch (e) {
    yield put(getFailed({ id, message: e.message }));
  }
};

const getSentSaga = function* getSentSaga() {
  yield takeLatest(types.POKEMON_GET_SENT, getSent);
};

const pokemonSaga = function* pokemonSaga() {
  yield spawn(getSentSaga);
};

export default pokemonSaga;
