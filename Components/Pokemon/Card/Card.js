import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import pokemonShape from '../../../PropTypes/Pokemon';
import { Bullet, MoveSet, SpriteSwiper, StatsPanel, StatsType } from '.';
import styles from './styles';

const Card = ({ pokemon, style }) => (
  <View style={[styles.card, style]}>
    <View style={styles.brief}>
      <View style={styles.briefStats}>
        <Bullet label="Number" style={styles.briefBullets} value={pokemon.id} />
        <Bullet label="Name" style={styles.briefBullets} value={pokemon.name} />
        <Bullet label="Height" style={styles.briefBullets} value={pokemon.height} />
        <Bullet label="Weight" style={styles.briefBullets} value={pokemon.weight} />
        <StatsType data={pokemon.types} />
      </View>
      <SpriteSwiper data={Object.values(pokemon.sprites)} style={styles.briefImages} />
    </View>
    <StatsPanel data={pokemon.stats} />
    <MoveSet data={pokemon.moves} style={styles.moveSet} />
  </View>
);

Card.propTypes = {
  pokemon: pokemonShape.isRequired,
  // eslint-disable-next-line react/require-default-props
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

export default Card;
