import * as types from '../../actionTypes';

const listSent = ({ offset }) => ({
  type: types.POKEMON_LIST_SENT,
  payload: { offset },
});

export default listSent;
