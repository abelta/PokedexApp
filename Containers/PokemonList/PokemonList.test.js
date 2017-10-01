import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PokemonList from '.';

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {
  containers: {
    pokemonDetail: {
      error: false,
      loading: false,
    },
    pokemonList: {
      error: false,
      loading: false,
      offset: 0,
    },
  },
  entities: {
    pokemon: {
      pikachu: {},
    },
    pokemonIndex: {},
  },
};
const store = mockStore(initialState);

describe('PokemonList', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <PokemonList />
    </Provider>,
  ).toJSON();

  it('renders properly', () => {
    expect(tree).toMatchSnapshot();
  });
});
