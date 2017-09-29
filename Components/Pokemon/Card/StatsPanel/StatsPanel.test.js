import React from 'react';
import renderer from 'react-test-renderer';
import camelcaseKeys from 'camelcase-keys';
import StatsPanel from '.';
import data from './mock-data.json';

describe('StatsPanel', () => {
  it('renders properly', () => {
    const tree = renderer.create(
      <StatsPanel data={camelcaseKeys(data, { deep: true }).stats} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
