import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import styles from './styles';

class Clear extends PureComponent {
  // setNativeProps(nativeProps) {
  //   this.root.setNativeProps(nativeProps);
  // }

  render() {
    return (
      <Image
        // ref={component => this.root = component}
        source={require('./cancel.png')} // eslint-disable-line global-require
        style={styles.clear}
        // {...this.props}
      />
    );
  }
}

export default Clear;
