import * as types from '../../Actions/actionTypes';

const initialState = {
  error: false,
  loading: false,
  offset: 0,
};

const pokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POKEMON_LIST_SENT: {
      return { ...state, error: false, loading: true };
    }
    case types.POKEMON_LIST_SUCCEEDED: {
      const { offset } = action.payload;
      return { ...state, error: false, loading: false, offset };
    }
    case types.POKEMON_LIST_FAILED: {
      const { error } = action.payload;
      return { ...state, error, loading: false };
    }
    default: return state;
  }
};

export default pokemonListReducer;
