import React from 'react';
import { View } from 'react-native';
import { Route, Switch } from 'react-router-native';
import { SearchBar, TitleBar } from '.';
import styles from './styles';

const Header = () => (
  <View style={styles.header}>
    <Switch>
      <Route path="/search" component={SearchBar} />
      <Route path="/" component={TitleBar} />
    </Switch>
  </View>
);

export default Header;
