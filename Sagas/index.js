import { spawn } from 'redux-saga/effects';
import pokemon from './Pokemon';

const sagas = function* saga() {
  yield spawn(pokemon);
};

export default sagas;
