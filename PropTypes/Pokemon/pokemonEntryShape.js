import PropTypes, { shape } from 'prop-types';

const pokemonEntryShape = shape({
  name: PropTypes.string.isRequired,
});

export default pokemonEntryShape;
