import React from 'react';
import renderer from 'react-test-renderer';
import SlideView from '.';

describe('SlideView', () => {
  it('renders properly', () => {
    const tree = renderer.create(<SlideView>Some text</SlideView>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
