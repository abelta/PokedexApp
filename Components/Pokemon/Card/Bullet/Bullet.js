import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import styles from './styles';

const Bullet = ({ label, style, value }) => (
  <View style={[styles.bullet, style]}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

Bullet.propTypes = {
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Bullet;
