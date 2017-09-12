import React from 'react';
import { View } from 'react-native';
import { AppTitle, TouchableLink } from '../../../Components';
import { Search as SearchIcon } from '../../../Components/Icons';
import styles from './styles';

const TitleBar = () => (
  <View style={styles.titleBar}>
    {/* <View style={styles.center}> */}
      <TouchableLink style={styles.title} to="/">
        <AppTitle />
      </TouchableLink>
    {/* </View> */}
    <TouchableLink style={styles.search} to="/search">
      <SearchIcon />
    </TouchableLink>
  </View>
);

export default TitleBar;
