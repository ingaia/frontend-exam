import React from 'react';
import { render } from '@testing-library/react';
import CircularProgress from '.';

describe('<CircularProgress />', () => {
  it('should render correctly', () => {
    const { container } = render(<CircularProgress />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the correct size', () => {
    const { container } = render(<CircularProgress />)

    expect(container.firstChild).toHaveStyle({ 'width': '80px', 'height': '80px' });
  })
})
