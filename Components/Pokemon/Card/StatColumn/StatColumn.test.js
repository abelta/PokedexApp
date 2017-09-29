import React from 'react';
import renderer from 'react-test-renderer';
import StatColumn from '.';

describe('StatColumn', () => {
  it('renders properly', () => {
    const tree = renderer.create(<StatColumn label="label" value={50} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
