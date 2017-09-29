import React from 'react';
import renderer from 'react-test-renderer';
import ErrorModal from '.';

describe('ErrorModal', () => {
  const tree = renderer.create(<ErrorModal>some text</ErrorModal>).toJSON();
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
