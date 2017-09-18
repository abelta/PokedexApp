import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import styles from './styles';

const Empty = ({ style }) => (
  <View style={[styles.empty, style]}>
    <Text style={styles.text}>...loading data</Text>
  </View>
);

Empty.propTypes = {
  style: PropTypes.number, // eslint-disable-line react/require-default-props
};

export default Empty;
