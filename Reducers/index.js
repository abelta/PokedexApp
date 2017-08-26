import { combineReducers } from 'redux';
import { pokemonList, pokemonDetail } from './Containers';
import { pokemon, pokemonIndex } from './Entities';

const reducers = combineReducers({
  containers: combineReducers({
    pokemonList,
    pokemonDetail,
  }),
  entities: combineReducers({
    pokemon,
    pokemonIndex,
  }),
});

export default reducers;
