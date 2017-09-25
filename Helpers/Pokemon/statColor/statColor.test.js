import { expect } from 'chai';
import statColor from '.';

describe('statColor', () => {
  describe('receives "label" as param', () => {
    it('returns corresponding color', () => {
      expect(statColor('speed')).to.eql('pink');
    });

    describe('receives a "label" that is not covered', () => {
      it('returns "black" by default', () => {
        expect(statColor('xxx')).to.eql('black');
      });
    });
  });
});
