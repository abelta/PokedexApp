import React from 'react';
import { MemoryRouter } from 'react-router-native';
import renderer from 'react-test-renderer';

import ListItem from '.';

describe('ListItem', () => {
  it('renders properly', () => {
    const pokemonEntry = { name: 'pikachu' };
    const tree = renderer.create(
      <MemoryRouter>
        <ListItem pokemonEntry={pokemonEntry} />
      </MemoryRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
