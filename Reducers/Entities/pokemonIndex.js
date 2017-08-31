import * as types from '../../Actions/actionTypes';

const initialState = {};

const pokemonIndexReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POKEMON_LIST_SUCCEEDED: {
      const { offset, list } = action.payload;
      return { ...state, [offset]: list };
    }
    default: return state;
  }
};

export default pokemonIndexReducer;
