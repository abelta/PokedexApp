import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-native';
import Container from '.';

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

describe('Container', () => {
  describe('location is "/"', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']} >
          <Container />
        </MemoryRouter>
      </Provider>,
    ).toJSON();

    it('renders PokemonList', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe('location is "/pokemon/:id"', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/pokemon/picachu']} >
          <Container />
        </MemoryRouter>
      </Provider>,
    ).toJSON();

    it('renders PokemonDetail', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
