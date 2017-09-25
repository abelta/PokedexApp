import { expect } from 'chai';
import typeColor from '.';

describe('typeColor', () => {
  describe('receives a "type" as param', () => {
    it('returns code for corresponding color', () => {
      expect(typeColor('psychic')).to.eql('#F85888');
    });

    describe('receives a type that is not covered', () => {
      it('returns black by default', () => {
        expect(typeColor('xxx')).to.eql('black');
      });
    });
  });
});
