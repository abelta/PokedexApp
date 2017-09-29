import React from 'react';
import renderer from 'react-test-renderer';
import LoadMore from '.';

describe('LoadMore', () => {
  const tree = renderer.create(<LoadMore />).toJSON();
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
