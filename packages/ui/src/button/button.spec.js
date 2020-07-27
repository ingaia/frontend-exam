import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import Button from './button';
import { Theme } from '../theme';

expect.addSnapshotSerializer(serializer);

test('renders button with correct styles', () => {
  const button = renderer.create(
    <Theme>
      <Button kind="active" href="#" link>Test</Button>
    </Theme>
  ).toJSON();

  expect(button).toMatchSnapshot();
});
