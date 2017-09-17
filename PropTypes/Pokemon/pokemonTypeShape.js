import PropTypes, { shape } from 'prop-types';

const pokemonTypeShape = shape({
  slot: PropTypes.number.isRequired,
  type: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
});

export default pokemonTypeShape;
