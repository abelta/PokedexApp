import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

// eslint-disable-next-line global-require
const AppTitle = () => <Image source={require('./pokedex-logo.png')} style={styles.appTitle} />;
export default AppTitle;
