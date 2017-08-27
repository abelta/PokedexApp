import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { pokemonType } from '../../PropTypes/Pokemon';

const PokemonCard = ({ pokemon }) => (
  <ScrollView>
    <Text>Number</Text><Text>{pokemon.id}</Text>
    <Text>Name</Text><Text>{pokemon.name}</Text>
    <Text>Weight</Text><Text>{pokemon.weight}</Text>
    <Text>Height</Text><Text>{pokemon.height}</Text>
    <Image style={{ width: 200, height: 200 }} source={{ uri: pokemon.sprites.frontDefault }} />
    <View>
      {pokemon.types.map(type => <Text key={type.type.name}>{type.type.name}</Text>)}
    </View>
    <View>
      {pokemon.moves.map(move => <Text key={move.move.name}>{move.move.name}</Text>)}
    </View>
    <View>
      {
        pokemon.stats.map(stat => (
          <View key={stat.stat.name}>
            <Text>{stat.stat.name}</Text>
            <Text>{stat.effort}</Text>
            <Text>{stat.baseStat}</Text>
          </View>
        ))
      }
    </View>
  </ScrollView>
);

PokemonCard.propTypes = {
  pokemon: pokemonType.isRequired,
};

export default PokemonCard;
