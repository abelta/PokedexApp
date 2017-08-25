import { spawn } from 'redux-saga/effects';
import pokemon from './pokemon';

const saga = function* saga() {
  yield spawn(pokemon);
};

export default saga;
