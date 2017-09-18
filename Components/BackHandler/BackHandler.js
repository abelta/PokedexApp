import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';
import { withRouter } from 'react-router-native';

class BackHandlerCustom extends PureComponent {
  constructor(props) {
    super(props);
    this.onHardwareBackPress = this.onHardwareBackPress.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onHardwareBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onHardwareBackPress);
  }

  onHardwareBackPress() {
    const { history } = this.props;
    if (history.length > 0) {
      history.goBack();
      return true;
    }
    return false;
  }

  render() {
    return (null);
  }
}

BackHandlerCustom.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default withRouter(BackHandlerCustom);
