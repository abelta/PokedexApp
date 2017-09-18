import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import styles from './styles';

const ErrorView = ({ children, style }) => (
  <View style={[styles.errorView, style]}>
    <Text style={styles.text}>{children}</Text>
  </View>
);

ErrorView.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.number, // eslint-disable-line react/require-default-props
};

export default ErrorView;
