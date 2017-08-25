import * as types from '../actionTypes';

const indexSucceeded = ({ pokemon }) => ({
  type: types.POKEMON_INDEX_SUCCEEDED,
  payload: { pokemon },
});

export default indexSucceeded;
