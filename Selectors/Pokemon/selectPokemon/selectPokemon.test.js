import { expect } from 'chai';
import selectPokemon from '.';

const pikachu = { name: 'pikachu' };

describe('selectPokemon', () => {
  describe('pokemon is present in state', () => {
    const state = {
      entities: {
        pokemon: {
          pikachu: { name: 'pikachu' },
        },
      },
    };

    it('returns pokemon', () => {
      expect(selectPokemon(state, 'pikachu')).to.eql(pikachu);
    });
  });

  describe('pokemon is not present in state', () => {
    const state = {
      entities: {
        pokemon: {
        },
      },
    };

    it('returns false', () => {
      expect(selectPokemon(state, 'pikachu')).to.be.false;
    });
  });

  describe('pokemon has been previously selected', () => {
    const state = {
      entities: {
        pokemon: {
          pikachu: { name: 'pikachu' },
        },
      },
    };

    it('calculates only first time', () => {
      selectPokemon.getMatchingSelector(state, 'pikachu').resetRecomputations();
      selectPokemon(state, 'pikachu');
      selectPokemon(state, 'pikachu');
      expect(selectPokemon.getMatchingSelector(state, 'pikachu').recomputations()).to.eql(1);
    });
  });
});
