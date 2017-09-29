import React from 'react';
import renderer from 'react-test-renderer';
import Empty from '.';

describe('Empty', () => {
  const tree = renderer.create(<Empty />).toJSON();
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
