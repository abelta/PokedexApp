import * as types from '../Actions/actionTypes';

const initialState = {};

const pokemonDetail = (state = initialState, action) => {
  switch (action.type) {
    case types.POKEMON_GET_SUCCEEDED: {
      console.warn('POKEMON_GET_SUCCEEDED');
      console.warn(action.payload.pokemon.name);
      return action.payload.pokemon;
    }
    default: return state;
  }
};

export default pokemonDetail;
