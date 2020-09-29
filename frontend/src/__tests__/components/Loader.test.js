import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from '~/components';

test('renders learn react Loader', () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId('svg')).toHaveClass('svg-1');
});
