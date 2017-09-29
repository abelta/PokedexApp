import React from 'react';
import renderer from 'react-test-renderer';
import BulletType from '.';

describe('BulletType', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BulletType value="HP" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
