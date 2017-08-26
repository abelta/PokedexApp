import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'remote-redux-devtools';
import { Text, View } from 'react-native';
import { Link, NativeRouter, Route, Switch } from 'react-router-native';
import reducers from './Reducers';
import sagas from './Sagas';
import { Title } from './Components/Layout';
import SearchBar from './Components/SearchBar';
import PokemonDetail from './Containers/PokemonDetail';
import InfiniteList from './Containers/InfiniteList';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({ realtime: true });
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);

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

export default App;
