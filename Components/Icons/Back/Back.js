import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import styles from './styles';

class Back extends PureComponent {
  setNativeProps(nativeProps) {
    this.root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <Image
        ref={component => this.root = component}
        style={styles.back}
        {...this.props}
        source={require('./left-arrow.png')} // eslint-disable-line global-require
      />
    );
  }
}

export default Back;
