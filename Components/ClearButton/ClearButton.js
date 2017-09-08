import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import styles from './styles';

class ClearButton extends PureComponent {
  setNativeProps(nativeProps) {
    this.root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <Image
        ref={component => this.root = component}
        style={styles.clearButton}
        {...this.props}
        source={require('./cancel.png')} // eslint-disable-line global-require
      />
    );
  }
}

export default ClearButton;
