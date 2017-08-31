import * as types from '../actionTypes';

const listSucceeded = ({ offset, list }) => ({
  type: types.POKEMON_LIST_SUCCEEDED,
  payload: { offset, list },
});

export default listSucceeded;
