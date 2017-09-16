import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import styles from './styles';

const typeColor = (value) => {
  switch (value) {
    case 'normal': return '#A8A878';
    case 'fire': return '#F08030';
    case 'fighting': return '#C03028';
    case 'water': return '#6890F0';
    case 'flying': return '#A890F0';
    case 'grass': return '#78C850';
    case 'poison': return '#A040A0';
    case 'electric': return '#F8D030';
    case 'ground': return '#E0C068';
    case 'psychic': return '#F85888';
    case 'rock': return '#B8A038';
    case 'ice': return '#98D8D8';
    case 'bug': return '#A8B820';
    case 'dragon': return '#7038F8';
    case 'ghost': return '#705898';
    case 'dark': return '#705848';
    case 'steel': return '#B8B8D0';
    case 'fairy': return '#EE99AC';
    default: return 'black';
  }
};

const BulletType = ({ style, value }) => (
  <View style={[style, styles.bulletType, { backgroundColor: typeColor(value) }]}>
    <Text style={styles.value}>{value}</Text>
  </View>
);

BulletType.propTypes = {
  style: PropTypes.number, // eslint-disable-line react/require-default-props
  value: PropTypes.string.isRequired,
};

export default BulletType;
