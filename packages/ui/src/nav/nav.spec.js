import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import { Nav, NavItem } from './index';
import { Theme } from '../theme';

expect.addSnapshotSerializer(serializer);

test('renders Nav and NavItem with correct styles', () => {
  const nav = renderer.create(
    <Theme theme="light">
      <Nav decorate>
        <NavItem href="#" active>Trailers</NavItem>
        <NavItem href="#">Options</NavItem>
        <NavItem href="#">Logout</NavItem>
      </Nav>
    </Theme>
  ).toJSON();

  expect(nav).toMatchSnapshot();
});
