import PropTypes, { shape } from 'prop-types';

const pokemonMoveLearnShape = shape({
  moveLearnMethod: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  levelLearnedAt: PropTypes.number.isRequired,
  versionGroup: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
});

export default pokemonMoveLearnShape;
