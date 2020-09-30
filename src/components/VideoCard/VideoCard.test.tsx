import React from 'react';
import { render } from '@testing-library/react';
import VideoCard from '.';

describe('<VideoCard />', () => {
  it('should render correctly', () => {
    const { container, getByAltText } = render(
      <VideoCard title="Test component" cover="/assets/background.webp" onClick={() => {}} />
    );

    expect(getByAltText('Test component').src).toContain('/assets/background.webp');
    expect(container.firstChild).toMatchSnapshot();
  })
})
