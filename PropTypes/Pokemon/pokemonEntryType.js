import PropTypes, { shape } from 'prop-types';

const pokemonEntryType = shape({
  name: PropTypes.string.isRequired,
});

export default pokemonEntryType;
