import * as types from '../actionTypes';

const getSent = ({ id }) => ({
  type: types.POKEMON_GET_SENT,
  payload: { id },
});

export default getSent;
