import PropTypes, { shape } from 'prop-types';

const pokemonStatShape = shape({
  stat: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  effort: PropTypes.number.isRequired,
  baseStat: PropTypes.number.isRequired,
});

export default pokemonStatShape;
