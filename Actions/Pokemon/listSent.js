import * as types from '../actionTypes';

const indexSent = ({ offset }) => ({
  type: types.POKEMON_INDEX_SENT,
  payload: { offset },
});

export default indexSent;
