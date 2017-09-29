import createCachedSelector from 're-reselect';

const selectPokemon = createCachedSelector(
  state => state.entities.pokemon, // input selector
  (state, name) => name, // input selector
  (pokemonList, name) => pokemonList[name] || false, // result function
)(
  (state, name) => name, // cache key
);

export default selectPokemon;
