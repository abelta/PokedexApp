import React from 'react';
import { MemoryRouter } from 'react-router-native';
import renderer from 'react-test-renderer';
import TouchableLink from '.';

describe('TouchableLink', () => {
  it('renders properly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <TouchableLink to="/">Some text</TouchableLink>
      </MemoryRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
