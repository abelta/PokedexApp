import React from 'react';
import { TextInput, View } from 'react-native';
import { Link } from 'react-router-native';
import { BackButton, ClearButton } from '../../Components';
import styles from './styles';

const SearchBar = () => (
  <View style={styles.searchBar}>
    <Link to="/" style={styles.back}><BackButton /></Link>
    <TextInput
      autoCorrect={false}
      autoFocus
      multiline={false}
      placeholder="Find Pokèmon by name"
      placeholderTextColor="lightgrey"
      returnKeyType="search"
      selectTextOnFocus
      style={styles.input}
      underlineColorAndroid="transparent"
    />
    <View style={styles.clear}><ClearButton /></View>
  </View>
);

export default SearchBar;
