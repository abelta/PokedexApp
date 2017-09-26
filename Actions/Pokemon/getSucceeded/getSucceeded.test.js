import { expect } from 'chai';
import * as types from '../../actionTypes';
import getSucceeded from '.';

describe('getSucceeded', () => {
  describe('returns an action', () => {
    const pokemon = { name: 'pikachu' };
    const action = getSucceeded({ pokemon });

    describe('type', () => {
      it('is POKEMON_GET_SUCCEEDED', () => {
        expect(action.type).to.eql(types.POKEMON_GET_SUCCEEDED);
      });
    });

    describe('payload', () => {
      describe('pokemon', () => {
        it('is the same that is passed as a param', () => {
          expect(action.payload.pokemon).to.eql(pokemon);
        });
      });
    });
  });
});
