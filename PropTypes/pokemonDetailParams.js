import PropTypes, { shape } from 'prop-types';

const pokemonDetailParams = shape({
  patch: PropTypes.string,
  url: PropTypes.string,
  isExact: PropTypes.bool,
  params: shape({
    id: PropTypes.string,
  }),
});

export default pokemonDetailParams;
