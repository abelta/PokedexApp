import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

class SlideView extends PureComponent {
  constructor(props) {
    super(props);
    const { toRight, toLeft } = this.props;
    this.toRight = toRight && !toLeft;
    this.state = { left: new Animated.Value(this.toRight ? -100 : 100) };
  }

  componentDidMount() {
    this.slideIn();
  }

  slideIn() {
    const { left } = this.state;
    Animated.timing(left, { toValue: 0 }).start();
  }

  render() {
    const { children, style } = this.props;
    const { left } = this.state;
    return (
      <Animated.View
        style={[
          style,
          { left: left.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) },
        ]}
      >
        {children}
      </Animated.View>
    );
  }
}

SlideView.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  toLeft: PropTypes.bool,
  toRight: PropTypes.bool,
};

SlideView.defaultProps = {
  style: {},
  toLeft: false,
  toRight: true,
};

export default SlideView;
