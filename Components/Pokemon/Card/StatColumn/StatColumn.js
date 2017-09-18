import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { statColor, statLabel } from '../../../../Helpers/Pokemon';
import styles from './styles';

const StatColumn = ({ label, value }) => (
  <View key={label} style={styles.statColumn}>
    <View style={[styles.filler, { height: value, backgroundColor: statColor(label) }]} />
    <Text style={styles.label}>{statLabel(label)}</Text>
  </View>
);

StatColumn.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatColumn;
