import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { pokemonType } from '../../../PropTypes/Pokemon';
import { Bullet, SpriteSwiper } from '.';
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

    <View>
      {pokemon.types.map(type => <Text key={type.type.name}>{type.type.name}</Text>)}
    </View>

    <View>
      {pokemon.moves.map(move => <Text key={move.move.name}>{move.move.name}</Text>)}
    </View>
  </ScrollView>
);

Card.propTypes = {
  pokemon: pokemonType.isRequired,
};

export default Card;
