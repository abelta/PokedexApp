import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { pokemonEntryType } from '../../../PropTypes/Pokemon';
import styles from './styles';

const ListItem = ({ pokemonEntry }) => (
  <View style={styles.listItem}>
    <Link to={`/pokemon/${pokemonEntry.name}`}>
      <Text style={styles.text}>{pokemonEntry.name}</Text>
    </Link>
  </View>
);

ListItem.propTypes = {
  pokemonEntry: pokemonEntryType.isRequired,
};

export default ListItem;
