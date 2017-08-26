import { checkStatus, parseJson } from '../../Helpers/Fetch';

const get = ({ id }) => (
  fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
    .then(checkStatus)
    .then(parseJson)
);

export default get;
