import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const Title = ({ children }) => <Text>{children}</Text>;

Title.defaultProps = {
  children: null,
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
