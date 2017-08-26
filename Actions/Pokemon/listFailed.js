import * as types from '../actionTypes';

const indexFailed = ({ message }) => ({
  type: types.POKEMON_INDEX_FAILED,
  payload: { message },
});

export default indexFailed;
