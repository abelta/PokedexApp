import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'remote-redux-devtools';
import { View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import reducers from './Reducers';
import sagas from './Sagas';
import Header from './Containers/Header';
import PokemonDetail from './Containers/PokemonDetail';
import PokemonList from './Containers/PokemonList';
import StatusBar from './Components/StatusBar';
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
        <Header style={styles.header} />

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
