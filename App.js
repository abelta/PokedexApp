import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'remote-redux-devtools';
import { View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import reducers from './Reducers';
import sagas from './Sagas';
import { Header, Container } from './Containers';
import { BackHandler, StatusBar } from './Components';
import styles from './styles';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({ realtime: true });
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);

const App = () => (
  <Provider store={store}>
    <NativeRouter>
      <View style={styles.app}>
        <BackHandler />
        <StatusBar />
        <Header />
        <Container />
      </View>
    </NativeRouter>
  </Provider>
);

export default App;
