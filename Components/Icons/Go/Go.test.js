import React from 'react';
import renderer from 'react-test-renderer';
import Go from '.';

describe('Go', () => {
  const tree = renderer.create(<Go />).toJSON();
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
