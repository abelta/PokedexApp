import React from 'react';
import renderer from 'react-test-renderer';
import AppTitle from '.';

describe('AppTitle', () => {
  it('should render properly', () => {
    const tree = renderer.create(<AppTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
