import React from 'react';
import renderer from 'react-test-renderer';
import TouchableButton from '.';

describe('TouchableButton', () => {
  const onPress = jest.fn();
  const tree = renderer.create(
    <TouchableButton onPress={onPress}>Some text</TouchableButton>,
  ).toJSON();
  it('renders properly', () => {
    expect(tree).toMatchSnapshot();
  });
});
