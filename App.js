import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducers'; 
import { Link, NativeRouter, Route, Switch } from 'react-router-native';
import { Title } from './Components/Layout';
import SearchBar from './Components/SearchBar';
import PokemonDetail from './Containers/PokemonDetail';
import InfiniteList from './Containers/InfiniteList';

let store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <View>
      <View>
        <Title>Pokédex</Title>
        <SearchBar />
      </View>

      <View>
        <Text>CONTENT</Text>
        <NativeRouter>
          <View>
            <View>
              <Link to="/"><Text>Home</Text></Link>
              <Link to="/pokemon/1"><Text>Bulbasaur</Text></Link>
            </View>
            <Switch>
              <Route path="/" component={InfiniteList} exact />
              <Route path="/pokemon/:id" component={PokemonDetail} />
            </Switch>
          </View>
        </NativeRouter>
      </View>
    </View>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
