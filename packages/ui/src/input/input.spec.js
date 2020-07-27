import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import TextInput from './text-input';
import { Theme } from '../theme';

expect.addSnapshotSerializer(serializer);

test('renders text input with correct styles', () => {
  const input = renderer.create(
    <Theme>
      <TextInput type="email" placeholder="test" block />
    </Theme>
  ).toJSON();

  expect(input).toMatchSnapshot();
});
