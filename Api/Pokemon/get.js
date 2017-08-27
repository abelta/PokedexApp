import { camelcaseKeys, checkStatus, parseJson } from '../../Helpers/Fetch';

const get = ({ id }) => (
  fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
    .then(checkStatus)
    .then(parseJson)
    .then(camelcaseKeys)
);

export default get;
