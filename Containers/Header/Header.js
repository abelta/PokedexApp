import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Animated } from 'react-native';
import { Route, Switch, withRouter } from 'react-router-native';
import { SearchBar, TitleBar } from '.';
import styles from './styles';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { height: new Animated.Value(0) };
    this.slideIn = this.slideIn.bind(this);
    this.slideOut = this.slideOut.bind(this);
  }

  componentDidMount() {
    this.slideIn();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.movedUp && (nextProps.movedUp !== this.props.movedUp)) this.slideOut();
    if (nextProps.movedDown && (nextProps.movedDown !== this.props.movedDown)) this.slideIn();
    return nextProps;
  }

  slideIn() {
    const { height } = this.state;
    Animated.timing(height, { toValue: 40 }).start();
  }

  slideOut() {
    const { height } = this.state;
    Animated.timing(height, { toValue: 0 }).start();
  }

  render() {
    const { height } = this.state;
    return (
      <Animated.View style={[styles.header, { height }]}>
        <Switch>
          <Route path="/search" component={SearchBar} />
          <Route path="/" component={TitleBar} />
        </Switch>
      </Animated.View>
    );
  }
}

Header.propTypes = {
  movedDown: PropTypes.bool.isRequired,
  movedUp: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  movedDown: state.containers.header.movedDown,
  movedUp: state.containers.header.movedUp,
});

export default withRouter(connect(mapStateToProps)(Header));
