import { expect } from 'chai';
import * as types from '../../actionTypes';
import getFailed from '.';

describe('getFailed', () => {
  describe('returns an action', () => {
    const error = 'error';
    const name = 'name';
    const action = getFailed({ error, name });

    it('has type POKEMON_GET_FAILED', () => {
      expect(action.type).to.eql(types.POKEMON_GET_FAILED);
    });

    describe('payload', () => {
      it('includes error passed as parameter', () => {
        expect(action.payload.error).to.eql(error);
      });

      it('includes name passed as parameter', () => {
        expect(action.payload.name).to.eql(name);
      });
    });
  });
});
