import React from 'react';
import { Text, View } from 'react-native';
import { pokemonType } from '../../PropTypes/Pokemon';

const PokemonCard = ({ pokemon }) => (
  <View>
    <Text>Name</Text><Text>{pokemon.name}</Text>
    <Text>Weight</Text><Text>{pokemon.weight}</Text>
  </View>
);

PokemonCard.propTypes = {
  pokemon: pokemonType.isRequired,
};

export default PokemonCard;
