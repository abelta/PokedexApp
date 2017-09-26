import { expect } from 'chai';
import * as types from '../../../Actions/actionTypes';
import pokemonIndexReducer from '.';

describe('pokemonIndex', () => {
  describe('receives POKEMON_LIST_SUCCEEDED', () => {
    const offset = 2;
    const list = ['pikachu', 'bulbasaur'];
    const action = { type: types.POKEMON_LIST_SUCCEEDED, payload: { offset, list } };
    const reduced = pokemonIndexReducer(null, action);

    it('adds a new key offset with the content of the list passed in the payload', () => {
      expect(reduced[offset]).to.eql(list);
    });
  });
});
