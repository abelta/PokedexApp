import PropTypes, { shape } from 'prop-types';
import { pokemonMoveLearnShape } from '.';

const pokemonMoveShape = shape({
  versionGroupDetails: PropTypes.arrayOf(pokemonMoveLearnShape).isRequired,
  move: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
});

export default pokemonMoveShape;
