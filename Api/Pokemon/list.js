import { checkStatus, parseJson } from '../../Helpers/Fetch';

const list = () => (
  fetch('http://pokeapi.co/api/v2/pokemon')
    .then(checkStatus)
    .then(parseJson)
);

export default list;
