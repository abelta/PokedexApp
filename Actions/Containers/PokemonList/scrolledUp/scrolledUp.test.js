import { expect } from 'chai';
import * as types from '../../../actionTypes';
import scrolledUp from '.';

describe('scrolledUp', () => {
  describe('returns an action', () => {
    const action = scrolledUp();

    it('has type POKEMON_LIST_SCROLLED_UP', () => {
      expect(action.type).to.eql(types.POKEMON_LIST_SCROLLED_UP);
    });
  });
});
