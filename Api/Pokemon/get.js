const get = ({ id }) => fetch(`http://pokeapi.co/api/v2/pokemon/${id}`);

export default get;
