import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Link } from 'react-router-native';
import styles from './styles';

const SearchBar = ({ style }) => (
  <View style={[styles.searchBar, style]}>
    <Link to="/"><Text>Home</Text></Link>
    <TextInput style={styles.input} />
  </View>
);

SearchBar.propTypes = {
  style: View.propTypes.style,
};

SearchBar.defaultProps = {
  style: {},
};

export default SearchBar;
