import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-native';
import { TouchableOpacity } from 'react-native';

class TouchableLink extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const { history, to } = this.props;
    history.push(to);
  }

  render() {
    const { children, disabled, style } = this.props;
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={this.onPress}
        style={style}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

TouchableLink.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  to: PropTypes.string.isRequired,
};

TouchableLink.defaultProps = {
  disabled: false,
  style: {},
};

export default withRouter(TouchableLink);
