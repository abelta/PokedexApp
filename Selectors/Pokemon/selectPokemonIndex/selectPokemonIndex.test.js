import { expect } from 'chai';
import selectPokemonIndex from '.';

const state = {
  entities: {
    pokemonIndex: {
      1: [{ name: 'bulbasaur' }],
      2: [{ name: 'ivysaur' }],
      3: [{ name: 'venosaur' }],
    },
  },
};

describe('selectPokemonIndex', () => {
  describe('offset', () => {
    it('returns results that are smaller than offset parameter', () => {
      expect(selectPokemonIndex(state, 2)).to.eql([{ name: 'bulbasaur' }, { name: 'ivysaur' }]);
    });
  });

  describe('memoization', () => {
    it('calculates only first time', () => {
      selectPokemonIndex.getMatchingSelector(state, 2).resetRecomputations();
      selectPokemonIndex(state, 2);
      selectPokemonIndex(state, 2);
      expect(selectPokemonIndex.getMatchingSelector(state, 2).recomputations()).to.eql(0);
    });
  });
});
