import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import styles from './styles';

class AppTitle extends PureComponent {
  setNativeProps(nativeProps) {
    this.root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <Text
        ref={component => this.root = component}
        style={styles.appTitle}
        {...this.props}
      >
        Pokédex
      </Text>
    );
  }
}

export default AppTitle;
