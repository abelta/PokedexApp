import { expect } from 'chai';
import * as types from '../../../actionTypes';
import reset from '.';

describe('reset', () => {
  const action = reset();

  describe('returns an action', () => {
    it('has type POKEMON_DETAIL_RESET', () => {
      expect(action.type).to.eql(types.POKEMON_DETAIL_RESET);
    });
  });
});
