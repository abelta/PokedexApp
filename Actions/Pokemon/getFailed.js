import * as types from '../actionTypes';

const getFailed = ({ name, error }) => ({
  type: types.POKEMON_GET_FAILED,
  payload: { name, error },
});

export default getFailed;
