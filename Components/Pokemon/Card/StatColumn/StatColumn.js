import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';

const statColor = (label) => {
  switch (label) {
    case 'speed': return 'pink';
    case 'special-defense': return 'lightgreen';
    case 'special-attack': return 'lightblue';
    case 'defense': return 'yellow';
    case 'attack': return 'orange';
    case 'hp': return 'red';
    default: return 'black';
  }
};

const statLabel = (label) => {
  switch (label) {
    case 'speed': return 'Speed';
    case 'special-defense': return 'Sp. Def';
    case 'special-attack': return 'Sp. Atk';
    case 'defense': return 'Def';
    case 'attack': return 'Atk';
    case 'hp': return 'HP';
    default: return 'black';
  }
};

const StatColumn = ({ label, value }) => (
  <View key={label} style={styles.statColumn}>
    <View style={[styles.filler, { height: value, backgroundColor: statColor(label) }]} />
    <Text style={styles.label}>{statLabel(label)}</Text>
  </View>
);

StatColumn.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatColumn;
