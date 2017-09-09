import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import styles from './styles';

class Search extends PureComponent {
  setNativeProps(nativeProps) {
    this.root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <Image
        ref={component => this.root = component}
        style={styles.search}
        {...this.props}
        source={require('./magnifying-glass.png')} // eslint-disable-line global-require
      />
    );
  }
}

export default Search;
