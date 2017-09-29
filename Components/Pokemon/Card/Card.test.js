import React from 'react';
import renderer from 'react-test-renderer';
import camelcaseKeys from 'camelcase-keys';
import Card from '.';
import data from './mock-data.json';

describe('Card', () => {
  it('renders properly', () => {
    const tree = renderer.create(
      <Card pokemon={camelcaseKeys(data, { deep: true })} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
