import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import camelcaseKeys from 'camelcase-keys';
import PokemonDetail from '.';
import pokemonData from './mock-data-pokemon.json';

jest.mock('../../Components/SlideView');

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
      pikachu: camelcaseKeys(pokemonData, { deep: true }),
    },
    pokemonIndex: {},
  },
};
const store = mockStore(initialState);

describe('PokemonDetail', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <PokemonDetail match={{ params: { id: 'pikachu' } }} />
    </Provider>,
  );
  it('renders properly', () => {
    expect(tree).toMatchSnapshot();
  });
});
