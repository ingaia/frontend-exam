import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import { Theme, useTheme, withTheme } from './index';
import setTheme from './set-theme';

expect.addSnapshotSerializer(serializer);

test('renders theme with correct styles', () => {
  const theme = renderer.create(
    <Theme setGlobalStyles theme="dark">
      Testing
    </Theme>
  ).toJSON();

  expect(theme).toMatchSnapshot();
});

test('components can access theme prop', () => {
  const mock = setTheme();
  let result;

  const Comp = () => {
    const t = useTheme();

    result = t;

    return(<div>Test</div>);
  };

  const tree = renderer.create(<Theme><Comp /></Theme>);

  expect(mock).toEqual(result);
});
