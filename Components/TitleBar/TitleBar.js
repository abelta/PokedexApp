import React from 'react';
import { View } from 'react-native';
import { Link } from 'react-router-native';
import { AppTitle } from '../../Components';
import { Search as SearchButton } from '../../Components/Icons';
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
