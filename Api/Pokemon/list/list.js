import * as constants from '../../../Constants';
import { checkStatus, parseJson } from '../../../Helpers/Fetch';

const list = ({ offset = 0 }) => (
  fetch(`http://pokeapi.co/api/v2/pokemon?limit=${constants.POKEMON_LIST_BASE_OFFSET}&offset=${offset}`)
    .then(checkStatus)
    .then(parseJson)
    .then(response => response.results)
    .then(response => response.map(result => ({ name: result.name })))
);

export default list;
