import React from 'react';
import { View } from 'react-native';
import { AppTitle, SlideView, TouchableLink } from '../../../Components';
import { Search as SearchIcon } from '../../../Components/Icons';
import styles from './styles';

const TitleBar = () => (
  <SlideView style={styles.titleBar} toRight >
    <View style={styles.empty} />
    <TouchableLink style={styles.title} to="/">
      <AppTitle />
    </TouchableLink>
    <TouchableLink style={styles.search} to="/search">
      <SearchIcon />
    </TouchableLink>
  </SlideView>
);

export default TitleBar;
