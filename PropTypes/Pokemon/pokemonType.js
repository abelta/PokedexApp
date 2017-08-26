import PropTypes, { shape } from 'prop-types';

const pokemonType = shape({
  abilities: PropTypes.array.isRequired,
  base_experience: PropTypes.number.isRequired,
  game_indices: PropTypes.array.isRequired,
  forms: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
  held_items: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  is_default: PropTypes.bool.isRequired,
  location_area_encounters: PropTypes.string.isRequired,
  moves: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  species: PropTypes.object.isRequired,
  sprites: PropTypes.object.isRequired,
  stats: PropTypes.array.isRequired,
  types: PropTypes.array.isRequired,
  weight: PropTypes.number.isRequired,
});

export default pokemonType;
