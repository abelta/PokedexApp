import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

// eslint-disable-next-line global-require
const Back = () => <Image source={require('./left-arrow.png')} style={styles.back} />;

export default Back;
