import createCachedSelector from 're-reselect';

const selectPokemon = createCachedSelector(
  state => state.entities.pokemon, // input selector
  (state, id) => id, // input selector
  (pokemonList, id) => pokemonList[id] || false, // result function
)(
  (state, id) => id, // cache key
);

export default selectPokemon;
