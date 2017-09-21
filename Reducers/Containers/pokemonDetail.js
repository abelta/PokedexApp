import * as types from '../../Actions/actionTypes';

const initialState = {
  error: false,
  loading: false,
};

const pokemonDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POKEMON_DETAIL_RESET: {
      return initialState;
    }
    case types.POKEMON_GET_SENT: {
      return { ...state, error: false, loading: true };
    }
    case types.POKEMON_GET_SUCCEEDED: {
      return { ...state, error: false, loading: false };
    }
    case types.POKEMON_GET_FAILED: {
      const { error } = action.payload;
      return { ...state, error, loading: false };
    }
    default: return state;
  }
};

export default pokemonDetailReducer;
