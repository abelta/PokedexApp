import PropTypes, { shape } from 'prop-types';

const pokemonStatShape = shape({
  slot: PropTypes.number.isRequired,
  type: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
});

export default pokemonStatShape;
