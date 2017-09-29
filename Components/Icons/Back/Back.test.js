import React from 'react';
import renderer from 'react-test-renderer';
import Back from '.';

describe('Back', () => {
  const tree = renderer.create(<Back />).toJSON();
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
