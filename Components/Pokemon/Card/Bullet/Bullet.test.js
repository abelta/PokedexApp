import React from 'react';
import renderer from 'react-test-renderer';
import Bullet from '.';

describe('Bullet', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Bullet label="label" value="4" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
