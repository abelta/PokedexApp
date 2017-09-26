import * as types from '../../actionTypes';

const listFailed = ({ message }) => ({
  type: types.POKEMON_LIST_FAILED,
  payload: { message },
});

export default listFailed;
