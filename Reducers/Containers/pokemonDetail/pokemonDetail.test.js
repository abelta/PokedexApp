import { expect } from 'chai';
import * as types from '../../../Actions/actionTypes';
import pokemonDetail from '.';

describe('pokemonDetail', () => {
  const initialState = { error: false, loading: false };

  describe('receives POKEMON_DETAIL_RESET', () => {
    const action = { type: types.POKEMON_DETAIL_RESET };
    const reduced = pokemonDetail(null, action);

    it('returns the initial state', () => {
      expect(reduced).to.eql(initialState);
    });
  });

  describe('receives POKEMON_GET_SENT', () => {
    const action = { type: types.POKEMON_GET_SENT };
    const reduced = pokemonDetail(null, action);

    it('sets error to false', () => {
      expect(reduced.error).to.be.false;
    });

    it('sets loading to true', () => {
      expect(reduced.loading).to.be.true;
    });
  });

  describe('receives POKEMON_GET_SUCCEEDED', () => {
    const action = { type: types.POKEMON_GET_SUCCEEDED };
    const reduced = pokemonDetail(null, action);

    it('sets error to false', () => {
      expect(reduced.error).to.be.false;
    });

    it('sets loading to false', () => {
      expect(reduced.loading).to.be.false;
    });
  });

  describe('receives POKEMON_GET_FAILED', () => {
    const error = 'error';
    const action = { type: types.POKEMON_GET_FAILED, payload: { error } };
    const reduced = pokemonDetail(null, action);

    it('sets error to the error message received in payload', () => {
      expect(reduced.error).to.eql(error);
    });

    it('sets loading to false', () => {
      expect(reduced.loading).to.be.false;
    });
  });
});
