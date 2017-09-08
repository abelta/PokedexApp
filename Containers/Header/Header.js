import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { AppTitle, SearchBar } from '../../Components';
import styles from './styles';

const Header = ({ style }) => (
  <View style={[styles.header, style]}>
    <Link to="/"><AppTitle style={style.appTitle}>Pokédex</AppTitle></Link>
    <Link to="/search"><Text>Search</Text></Link>
  </View>
);

Header.propTypes = {
  style: View.propTypes.style,
};

Header.defaultProps = {
  style: {},
};

export default Header;
