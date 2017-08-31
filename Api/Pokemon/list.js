import { checkStatus, parseJson } from '../../Helpers/Fetch';

const LIMIT = 60;

const list = ({ offset }) => (
  fetch(`http://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset || 0}`)
    .then(checkStatus)
    .then(parseJson)
    .then(response => response.results)
    .then(response => response.map(result => ({ name: result.name })))
);

export default list;
