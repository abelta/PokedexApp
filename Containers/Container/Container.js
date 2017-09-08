import React from 'react';
import { View } from 'react-native';
import { Route, Switch } from 'react-router-native';
import { PokemonDetail, PokemonList } from '../../Containers';
import styles from './styles';

const Container = () => (
  <View style={styles.container}>
    <Switch>
      <Route path="/" component={PokemonList} exact />
      <Route path="/pokemon/:id" component={PokemonDetail} />
    </Switch>
  </View>
);

export default Container;
