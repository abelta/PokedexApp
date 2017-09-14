import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import pokemonShape from '../../../PropTypes/Pokemon';
import { Bullet, SpriteSwiper, StatsPanel } from '.';
import styles from './styles';

const Card = ({ pokemon }) => (
  <ScrollView>
    <View style={styles.brief}>
      <View style={styles.briefStats}>
        <Bullet label="Number" value={pokemon.id} />
        <Bullet label="Name" value={pokemon.name} />
        <Bullet label="Height" value={pokemon.height} />
        <Bullet label="Weight" value={pokemon.weight} />
      </View>
      <SpriteSwiper data={Object.values(pokemon.sprites)} style={styles.briefImages} />
    </View>

    <StatsPanel data={pokemon.stats} />

    <View>
      {pokemon.types.map(type => <Text key={type.type.name}>{type.type.name}</Text>)}
    </View>

    <View>
      {pokemon.moves.map(move => <Text key={move.move.name}>{move.move.name}</Text>)}
    </View>
  </ScrollView>
);

Card.propTypes = {
  pokemon: pokemonShape.isRequired,
};

export default Card;
