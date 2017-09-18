import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { typeColor } from '../../../../Helpers/Pokemon';
import styles from './styles';

const BulletType = ({ style, value }) => (
  <View style={[style, styles.bulletType, { backgroundColor: typeColor(value) }]}>
    <Text style={styles.value}>{value}</Text>
  </View>
);

BulletType.propTypes = {
  style: PropTypes.number, // eslint-disable-line react/require-default-props
  value: PropTypes.string.isRequired,
};

export default BulletType;
