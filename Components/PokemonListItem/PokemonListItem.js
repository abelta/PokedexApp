import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { pokemonEntryType } from '../../PropTypes/Pokemon';

const PokemonListItem = ({ pokemonEntry }) => (
  <View>
    <Link to={`/pokemon/${pokemonEntry.name}`}>
      <Text>{pokemonEntry.name}</Text>
    </Link>
  </View>
);

PokemonListItem.propTypes = {
  pokemonEntry: pokemonEntryType.isRequired,
};

export default PokemonListItem;
