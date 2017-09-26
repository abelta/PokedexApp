import * as types from '../../actionTypes';

const getSent = ({ name }) => ({
  type: types.POKEMON_GET_SENT,
  payload: { name },
});

export default getSent;
