import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { Link } from 'react-router-native';
import { Back as BackButton, Clear as ClearButton } from '../../Components/Icons';
import styles from './styles';

const SearchBar = () => (
  <View style={styles.searchBar}>
    <Link to="/" style={styles.back}><TouchableOpacity><BackButton /></TouchableOpacity></Link>
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
    <View style={styles.clear}>
      <TouchableOpacity
        // style={[styles.clear, { height: 10, width: 20 }]}
        onPress={() => { console.warn('PRESS') }}
      >
        <ClearButton />
      </TouchableOpacity>
    </View>
  </View>
);

export default SearchBar;
