import React from 'react';
import renderer from 'react-test-renderer';
import ActivityIndicator from '.';

describe('ActivityIndicator', () => {
  it('should render properly', () => {
    const tree = renderer.create(<ActivityIndicator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
