import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import Loader from './loader';
import { Theme } from '../theme';

expect.addSnapshotSerializer(serializer);

test('renders loader with correct styles', () => {
  const loader = renderer.create(
    <Theme>
      <Loader />
    </Theme>
  ).toJSON();

  expect(loader).toMatchSnapshot();
});
