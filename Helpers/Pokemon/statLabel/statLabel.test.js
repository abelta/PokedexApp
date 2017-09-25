import { expect } from 'chai';
import statLabel from '.';

describe('statLabel', () => {
  describe('receives "label" as param', () => {
    it('returns corresponding text', () => {
      expect(statLabel('special-defense')).to.eql('Sp. Def');
    });

    describe('receives a label that is not covered', () => {
      it('returns the received label by default', () => {
        expect(statLabel('xxx')).to.eql('xxx');
      });
    });
  });
});
