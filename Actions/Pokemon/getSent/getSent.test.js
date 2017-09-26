import { expect } from 'chai';
import * as types from '../../actionTypes';
import getSent from '.';

describe('getSent', () => {
  describe('returns an action', () => {
    const name = 'pikachu';
    const action = getSent({ name });

    describe('type', () => {
      it('is POKEMON_GET_SENT', () => {
        expect(action.type).to.eql(types.POKEMON_GET_SENT);
      });
    });

    describe('payload', () => {
      describe('name', () => {
        it('is the same that was passed as a param', () => {
          expect(action.payload.name).to.eql(name);
        });
      });
    });
  });
});
