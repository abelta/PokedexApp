import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import styles from './styles';

const Bullet = ({ label, style, value }) => (
  <View style={[style, styles.bullet]}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

Bullet.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.number, // eslint-disable-line react/require-default-props
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Bullet;
