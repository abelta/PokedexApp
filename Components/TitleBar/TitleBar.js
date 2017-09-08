import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { AppTitle } from '../../Components';
import styles from './styles';

const TitleBar = ({ style }) => (
  <View style={[styles.header, style]}>
    <Link to="/"><AppTitle style={style.appTitle}>Pokédex</AppTitle></Link>
    <Link to="/search"><Text>Search</Text></Link>
  </View>
);

TitleBar.propTypes = {
  style: View.propTypes.style,
};

TitleBar.defaultProps = {
  style: {},
};

export default TitleBar;
