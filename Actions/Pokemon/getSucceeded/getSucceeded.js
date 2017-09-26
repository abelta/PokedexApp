import * as types from '../../actionTypes';

const getSucceeded = ({ pokemon }) => ({
  type: types.POKEMON_GET_SUCCEEDED,
  payload: { pokemon },
});

export default getSucceeded;
