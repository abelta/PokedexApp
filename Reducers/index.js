import { combineReducers } from 'redux';
import pokemonDetail from './pokemonDetail';
import pokemonIndex from './pokemonIndex';

const reducer = combineReducers({
  pokemonDetail,
  pokemonIndex,
});

export default reducer;
