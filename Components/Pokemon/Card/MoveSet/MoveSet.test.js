import React from 'react';
import renderer from 'react-test-renderer';
import camelcaseKeys from 'camelcase-keys';
import data from './mock-data.json';
import MoveSet from '.';

describe('MoveSet', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MoveSet data={camelcaseKeys(data, { deep: true }).moves} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
