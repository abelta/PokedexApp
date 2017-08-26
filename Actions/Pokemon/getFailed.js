import * as types from '../actionTypes';

const getFailed = ({ id, message }) => ({
  type: types.POKEMON_GET_FAILED,
  payload: { id, message },
});

export default getFailed;
