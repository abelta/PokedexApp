import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

// eslint-disable-next-line global-require
const Search = () => <Image source={require('./magnifying-glass.png')} style={styles.search} />;

export default Search;
