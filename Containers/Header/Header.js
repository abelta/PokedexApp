import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { AppTitle, SearchBar } from '../../Components';
import styles from './styles';

const Header = ({ style }) => (
  <View style={[styles.header, style]}>
    <AppTitle style={style.appTitle}>Pokédex</AppTitle>
    <SearchBar style={style.searchBar} />
    <Link to="/"><Text>Home</Text></Link>
  </View>
);

Header.propTypes = {
  style: View.propTypes.style,
};

Header.defaultProps = {
  style: {},
};

export default Header;
