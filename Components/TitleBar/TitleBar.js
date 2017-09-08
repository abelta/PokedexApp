import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { AppTitle, SearchButton } from '../../Components';
import styles from './styles';

const TitleBar = () => (
  <View style={styles.titleBar}>
    <Link to="/" style={styles.title}>
      <AppTitle>Pokédex</AppTitle>
    </Link>
    <Link to="/search" style={styles.search}>
      <SearchButton />
    </Link>
  </View>
);

export default TitleBar;
