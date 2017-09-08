import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import styles from './styles';

class AppTitle extends PureComponent {
  setNativeProps(nativeProps) {
    this.root.setNativeProps(nativeProps);
  }

  render() {
    const { style } = this.props;
    return (
      <Text
        ref={component => this.root = component}
        {...this.props}
        style={[style, styles.appTitle]}
      >
        Pokédex
      </Text>
    );
  }
}

AppTitle.propTypes = {
  style: Text.propTypes.style,
};

AppTitle.defaultProps = {
  style: {},
};

export default AppTitle;
