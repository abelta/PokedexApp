import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

const TouchableButton = ({ children, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={style} >{children}</TouchableOpacity>
);

TouchableButton.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  style: PropTypes.number,
};

export default TouchableButton;
