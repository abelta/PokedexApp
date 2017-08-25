import { call, put, spawn, takeLatest } from 'redux-saga/effects';
import * as types from '../Actions/actionTypes';
import { getSucceeded, getFailed } from '../Actions/Pokemon';

const apiCallGet = ({ id }) => (fetch(`http://pokeapi.co/api/v2/pokemon/${id}`));

const getSent = function* getSent(action) {
  const { id } = action.payload;
  try {
    const pokemon = yield call(apiCallGet, { id });
    yield put(getSucceeded({ pokemon }));
  } catch (e) {
    yield put(getFailed({ id }));
  }
};

const getSentSaga = function* getSentSaga() {
  yield takeLatest(types.POKEMON_GET_SENT, getSent);
};

const pokemonSaga = function* pokemonSaga() {
  yield spawn(getSentSaga);
};

export default pokemonSaga;
