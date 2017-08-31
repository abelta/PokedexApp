import createCachedSelector from 're-reselect';

const selectPokemonIndex = createCachedSelector(
  state => state.entities.pokemonIndex, // input selector
  (state, offset) => offset, // input selector
  (pokemonIndex, offset) => { // result function
    const offsets = Object.keys(pokemonIndex).map(o => Number(o));
    let result = [];
    offsets
      .filter(o => o <= offset)
      // eslint-disable-next-line no-return-assign
      .forEach(o => result = [...result, ...pokemonIndex[o]]);
    return result;
  },
)(
  (state, offset) => offset, // cache key
);

export default selectPokemonIndex;
