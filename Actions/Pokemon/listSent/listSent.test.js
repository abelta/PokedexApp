import { expect } from 'chai';
import * as types from '../../actionTypes';
import listSent from '.';

describe('listSent', () => {
  describe('returns an action', () => {
    const offset = 1;
    const action = listSent({ offset });

    describe('type', () => {
      it('is POKEMON_LIST_SENT', () => {
        expect(action.type).to.eql(types.POKEMON_LIST_SENT);
      });
    });

    describe('payload', () => {
      describe('offset', () => {
        it('is the same that was passed as param', () => {
          expect(action.payload.offset).to.eql(offset);
        });
      });
    });
  });
});
