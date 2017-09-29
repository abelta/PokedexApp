import React from 'react';
import renderer from 'react-test-renderer';
import camelcaseKeys from 'camelcase-keys';
import StatsType from '.';
import data from './mock-data.json';

describe('StatsType', () => {
  it('renders properly', () => {
    const tree = renderer.create(
      <StatsType data={camelcaseKeys(data, { deep: true }).types} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
