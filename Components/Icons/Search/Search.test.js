import React from 'react';
import renderer from 'react-test-renderer';
import Search from '.';

describe('Search', () => {
  const tree = renderer.create(<Search />).toJSON();
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
