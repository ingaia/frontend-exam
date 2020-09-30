import React from 'react';
import { render } from '@testing-library/react';
import Dialog from '.';

describe('<Dialog />', () => {
  it('should render correctly', () => {
    const { container, getByTitle } = render(<Dialog open videoId="#test" handleClose={() => {}} />);

    expect(getByTitle('Youtube video dialog').src).toEqual('https://www.youtube.com/embed/#test')
    expect(container.firstChild).toMatchSnapshot()
  })
})
