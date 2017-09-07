import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';
import AppTitle from '../../Components/AppTitle';
import SearchBar from '../../Components/SearchBar';
import styles from './styles';

const Header = () => (
  <View style={styles.header}>
    <AppTitle>Pokédex</AppTitle>
    <SearchBar />
    <Link to="/"><Text>Home</Text></Link>
  </View>
);

export default Header;
