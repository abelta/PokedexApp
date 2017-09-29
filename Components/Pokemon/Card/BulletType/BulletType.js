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
  // eslint-disable-next-line react/require-default-props
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  value: PropTypes.string.isRequired,
};

export default BulletType;
