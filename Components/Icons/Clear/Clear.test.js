import React from 'react';
import renderer from 'react-test-renderer';
import Clear from '.';

describe('Clear', () => {
  const tree = renderer.create(<Clear />).toJSON();
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
