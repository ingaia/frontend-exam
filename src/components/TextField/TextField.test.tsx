import React from 'react';
import { render } from '@testing-library/react';
import TextField from '.';

describe('<TextField />', () => {
  it('should render correctly', () => {
    const { container } = render(<TextField id="jest" label="jest" />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
