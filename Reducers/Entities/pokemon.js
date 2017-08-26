import * as types from '../../Actions/actionTypes';

const initialState = {};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POKEMON_GET_SUCCEEDED: {
      const { pokemon, pokemon: { id } } = action.payload;
      return { ...state, [id]: pokemon };
    }
    default: return state;
  }
};

export default pokemonReducer;
