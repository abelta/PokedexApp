import PropTypes, { shape } from 'prop-types';

const pokemonShape = shape({
  abilities: PropTypes.array.isRequired,
  baseExperience: PropTypes.number.isRequired,
  gameIndices: PropTypes.array.isRequired,
  forms: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
  heldItems: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  isDefault: PropTypes.bool.isRequired,
  locationAreaEncounters: PropTypes.string.isRequired,
  moves: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  species: PropTypes.object.isRequired,
  sprites: PropTypes.object.isRequired,
  stats: PropTypes.array.isRequired,
  types: PropTypes.array.isRequired,
  weight: PropTypes.number.isRequired,
});

export default pokemonShape;
