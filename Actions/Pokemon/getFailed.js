import * as types from '../actionTypes';

const getFailed = ({ name, message }) => ({
  type: types.POKEMON_GET_FAILED,
  payload: { name, message },
});

export default getFailed;
