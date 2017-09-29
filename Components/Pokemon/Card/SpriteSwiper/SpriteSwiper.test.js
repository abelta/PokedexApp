import React from 'react';
import renderer from 'react-test-renderer';
import SpriteSwiper from '.';
import data from './mock-data.json';

describe('SpriteSwiper', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <SpriteSwiper autoplay={false} data={Object.values(data.sprites)} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
