import { expect } from 'chai';
import camelCase from '.';

describe('camelCase', () => {
  describe('receives a JSON object as response', () => {
    const response = { a_key: 0 };
    it('transforms response keys to camelcase', () => {
      expect(camelCase(response)).to.eql({ aKey: 0 });
    });
  });
});
