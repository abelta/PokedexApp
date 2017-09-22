import { combineReducers } from 'redux';
import { header, pokemonList, pokemonDetail } from './Containers';
import { pokemon, pokemonIndex } from './Entities';

const reducers = combineReducers({
  containers: combineReducers({
    header,
    pokemonList,
    pokemonDetail,
  }),
  entities: combineReducers({
    pokemon,
    pokemonIndex,
  }),
});

export default reducers;
