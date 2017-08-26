import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const Error = ({ children }) => <Text>{children}</Text>;

Error.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Error;
