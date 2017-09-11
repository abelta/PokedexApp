import React from 'react';
import { Text } from 'react-native';
import { TouchableLink } from '../../../Components';
import { pokemonEntryType } from '../../../PropTypes/Pokemon';
import styles from './styles';

const ListItem = ({ pokemonEntry }) => (
  <TouchableLink style={styles.listItem} to={`/pokemon/${pokemonEntry.name}`}>
    <Text style={styles.text}>{pokemonEntry.name}</Text>
  </TouchableLink>
);

ListItem.propTypes = {
  pokemonEntry: pokemonEntryType.isRequired,
};

export default ListItem;
