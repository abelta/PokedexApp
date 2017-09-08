import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'remote-redux-devtools';
import { View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import reducers from './Reducers';
import sagas from './Sagas';
import { PokemonDetail, PokemonList } from './Containers';
import { SearchBar, StatusBar, TitleBar } from './Components';
import styles from './styles';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({ realtime: true });
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);

const App = () => (
  <Provider store={store}>
    <NativeRouter>
      <View style={styles.app}>

        <StatusBar />

        <View style={styles.header}>
          <Switch>
            <Route path="/search" component={SearchBar} />
            <Route path="/" component={TitleBar} />
          </Switch>
        </View>

        <View style={styles.container}>
          <Switch>
            <Route path="/" component={PokemonList} exact />
            <Route path="/pokemon/:id" component={PokemonDetail} />
          </Switch>
        </View>

      </View>
    </NativeRouter>
  </Provider>
);

export default App;
