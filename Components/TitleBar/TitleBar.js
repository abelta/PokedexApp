import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { AppTitle } from '../../Components';
import styles from './styles';

const TitleBar = () => (
  <View style={styles.titleBar}>
    <Link to="/" style={styles.title}>
      <AppTitle>Pokédex</AppTitle>
    </Link>
    <Link to="/search" style={styles.search}>
      <Text>Search</Text>
    </Link>
  </View>
);

export default TitleBar;
