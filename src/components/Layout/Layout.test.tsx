import React from 'react';
import { render } from '@testing-library/react';
import Layout from '.';

describe('<Layout />', () => {
  it('should render correctly', () => {
    const { container } = render(<Layout />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
