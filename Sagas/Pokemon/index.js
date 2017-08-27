import { spawn } from 'redux-saga/effects';
import get from './get';
import list from './list';

const pokemon = function* pokemon() {
  yield spawn(get);
  yield spawn(list);
};

export default pokemon;
