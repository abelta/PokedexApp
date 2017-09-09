import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-native';
import { TouchableOpacity } from 'react-native';

class TouchableLink extends PureComponent {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const { history, to } = this.props;
    history.push(to);
  }

  render() {
    const { children, style } = this.props;
    return (
      <TouchableOpacity onPress={this.onPress} style={style} >{children}</TouchableOpacity>
    );
  }
}

TouchableLink.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  style: PropTypes.number,
  to: PropTypes.string.isRequired,
};

export default withRouter(TouchableLink);
