import * as types from '../actionTypes';

const indexSucceeded = ({ offset, pokemon }) => ({
  type: types.POKEMON_INDEX_SUCCEEDED,
  payload: { offset, pokemon },
});

export default indexSucceeded;
