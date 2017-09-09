import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

// eslint-disable-next-line global-require
const Clear = () => <Image source={require('./cancel.png')} style={styles.clear} />;

export default Clear;
