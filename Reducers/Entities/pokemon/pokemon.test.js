import { expect } from 'chai';
import * as types from '../../../Actions/actionTypes';
import pokemonReducer from '.';

describe('pokemon', () => {
  describe('receives POKEMON_GET_SUCCEEDED', () => {
    const pokemon = { name: 'pikachu', weight: 5 };
    const action = { type: types.POKEMON_GET_SUCCEEDED, payload: { pokemon } };
    const reduced = pokemonReducer(null, action);

    it('adds a new pokemon by that name as received in the payload', () => {
      expect(reduced.pikachu).to.eql(pokemon);
    });
  });
});
