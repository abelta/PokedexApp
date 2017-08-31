import * as types from '../actionTypes';

const listSent = ({ offset = 0 }) => ({
  type: types.POKEMON_LIST_SENT,
  payload: { offset },
});

export default listSent;
