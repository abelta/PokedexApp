import { expect } from 'chai';
import * as types from '../../actionTypes';
import listFailed from '.';

describe('listFailed', () => {
  describe('returns an action', () => {
    const message = 'Not found.';
    const action = listFailed({ message });

    describe('type', () => {
      it('is POKEMON_LIST_FAILED', () => {
        expect(action.type).to.eql(types.POKEMON_LIST_FAILED);
      });
    });

    describe('payload', () => {
      describe('message', () => {
        it('is the same that was passed as param', () => {
          expect(action.payload.message).to.eql(message);
        });
      });
    });
  });
});
