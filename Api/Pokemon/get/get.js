import { camelcaseKeys, checkStatus, parseJson } from '../../../Helpers/Fetch';

const get = ({ name }) => (
  fetch(`http://pokeapi.co/api/v2/pokemon/${name}`)
    .then(checkStatus)
    .then(parseJson)
    .then(camelcaseKeys)
);

export default get;
