import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-native';
import SearchBar from '.';

jest.mock('../../../Components/SlideView');

describe('SearchBar', () => {
  const tree = renderer.create(
    <MemoryRouter initialEntries={['/search']}>
      <SearchBar />
    </MemoryRouter>,
  ).toJSON();

  it('renders properly', () => {
    expect(tree).toMatchSnapshot();
  });
});
