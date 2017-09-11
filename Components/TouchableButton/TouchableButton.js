import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

const TouchableButton = ({ children, disabled, onPress, style }) => (
  <TouchableOpacity disabled={disabled} onPress={onPress} style={style}>
    {children}
  </TouchableOpacity>
);

TouchableButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
};

TouchableButton.defaultProps = {
  disabled: false,
};

export default TouchableButton;
