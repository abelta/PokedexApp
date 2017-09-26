import { expect } from 'chai';
import * as types from '../../../Actions/actionTypes';
import pokemonList from '.';

describe('pokemonList', () => {
  describe('receives POKEMON_LIST_SENT', () => {
    const action = { type: types.POKEMON_LIST_SENT };
    const reduced = pokemonList(null, action);

    it('sets error to false', () => {
      expect(reduced.error).to.be.false;
    });

    it('sets loading to true', () => {
      expect(reduced.loading).to.be.true;
    });
  });

  describe('receives POKEMON_LIST_SUCCEEDED', () => {
    const offset = 2;
    const action = { type: types.POKEMON_LIST_SUCCEEDED, payload: { offset } };
    const reduced = pokemonList(null, action);

    it('sets error to false', () => {
      expect(reduced.error).to.be.false;
    });

    it('sets loading to false', () => {
      expect(reduced.loading).to.be.false;
    });

    it('sets the offset received in the payload', () => {
      expect(reduced.offset).to.eql(offset);
    });
  });

  describe('receives POKEMON_LIST_FAILED', () => {
    const error = 'error';
    const action = { type: types.POKEMON_LIST_FAILED, payload: { error } };
    const reduced = pokemonList(null, action);

    it('sets error to the one received in the payload', () => {
      expect(reduced.error).to.eql(error);
    });

    it('sets loading to false', () => {
      expect(reduced.loading).to.be.false;
    });
  });
});
