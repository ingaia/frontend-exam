import React from 'react';
import { render } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
  it('should render correctly', () => {
    const { container } = render(<Button>Button</Button>)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const { container } = render(<Button noborders>Button</Button>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
