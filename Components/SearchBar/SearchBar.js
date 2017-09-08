import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';

const SearchBar = ({ style }) => (
  <View style={[styles.searchBar, style]}>
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
