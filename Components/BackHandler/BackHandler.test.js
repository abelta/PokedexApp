import React from 'react';
import { MemoryRouter } from 'react-router-native';
import renderer from 'react-test-renderer';
import BackHandler from '.';

describe('BackHandler', () => {
  it('renders properly', () => {
    const tree = renderer.create(<MemoryRouter><BackHandler /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
