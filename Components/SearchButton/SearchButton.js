import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import styles from './styles';

class SearchButton extends PureComponent {
  setNativeProps(nativeProps) {
    this.root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <Image
        ref={component => this.root = component}
        style={styles.searchButton}
        {...this.props}
        source={require('./magnifying-glass.png')} // eslint-disable-line global-require
      />
    );
  }
}

export default SearchButton;
