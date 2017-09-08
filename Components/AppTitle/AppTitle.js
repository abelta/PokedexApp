import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const AppTitle = ({ style }) => <Text style={[style, styles.appTitle]}>Pokédex</Text>;

AppTitle.propTypes = {
  style: Text.propTypes.style,
};

AppTitle.defaultProps = {
  style: {},
};

export default AppTitle;
