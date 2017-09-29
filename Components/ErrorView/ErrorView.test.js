import React from 'react';
import renderer from 'react-test-renderer';
import ErrorView from '.';

describe('ErrorView', () => {
  const tree = renderer.create(<ErrorView>Some text</ErrorView>).toJSON();
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
