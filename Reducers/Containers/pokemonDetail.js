import * as types from '../../Actions/actionTypes';

const initialState = {
  loading: false,
};

const pokemonDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POKEMON_GET_SENT: {
      return { ...state, loading: true };
    }
    case types.POKEMON_GET_SUCCEEDED: {
      return { ...state, loading: false };
    }
    case types.POKEMON_GET_FAILED: {
      return { ...state, loading: false };
    }
    default: return state;
  }
};

export default pokemonDetailReducer;
