import { expect } from 'chai';
import * as types from '../../../Actions/actionTypes';
import header from '.';

describe('header', () => {
  describe('receives action type POKEMON_LIST_SCROLLED_DOWN', () => {
    const action = { type: types.POKEMON_LIST_SCROLLED_DOWN };
    const reduced = header(null, action);

    it('sets movedDown as false', () => {
      expect(reduced.movedDown).to.be.false;
    });

    it('sets movedUp as true', () => {
      expect(reduced.movedUp).to.be.true;
    });
  });
});
