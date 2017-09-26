import { expect } from 'chai';
import * as types from '../../actionTypes';
import listSucceeded from '.';

describe('listSucceeded', () => {
  describe('returns an action', () => {
    const list = ['charmander', 'clefairy'];
    const offset = 2;
    const action = listSucceeded({ list, offset });

    describe('type', () => {
      it('is POKEMON_LIST_SUCCEEDED', () => {
        expect(action.type).to.eql(types.POKEMON_LIST_SUCCEEDED);
      });
    });

    describe('payload', () => {
      describe('list', () => {
        it('is the same that was passed as a param', () => {
          expect(action.payload.list).to.eql(list);
        });
      });

      describe('offset', () => {
        it('is the same that was passed as a param', () => {
          expect(action.payload.offset).to.eql(offset);
        });
      });
    });
  });
});
