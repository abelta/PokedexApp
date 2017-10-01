import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-native';
import TitleBar from '.';

jest.mock('../../../Components/SlideView');

describe('TitleBar', () => {
  const tree = renderer.create(
    <MemoryRouter initialEntries={['/']}>
      <TitleBar />
    </MemoryRouter>,
  ).toJSON();

  it('renders properly', () => {
    expect(tree).toMatchSnapshot();
  });
});
