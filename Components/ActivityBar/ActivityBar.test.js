import React from 'react';
import renderer from 'react-test-renderer';
import ActivityBar from '.';

describe('ActivityBar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ActivityBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
