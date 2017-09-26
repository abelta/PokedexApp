import { expect } from 'chai';
import * as types from '../../../actionTypes';
import scrolledDown from '.';

describe('scrolledDown', () => {
  const action = scrolledDown();

  describe('returns an action', () => {
    it('has type POKEMON_LIST_SCROLLED_DOWN', () => {
      expect(action.type).to.eql(types.POKEMON_LIST_SCROLLED_DOWN);
    });
  });
});
