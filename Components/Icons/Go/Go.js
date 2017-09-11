import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

// eslint-disable-next-line global-require
const Go = () => <Image source={require('./right-arrow.png')} style={styles.go} />;

export default Go;
