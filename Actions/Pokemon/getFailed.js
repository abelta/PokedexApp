import * as types from '../actionTypes';

const getFailed = ({ id }) => ({ type: types.POKEMON_GET_FAILED, payload: { id } });

export default getFailed;
