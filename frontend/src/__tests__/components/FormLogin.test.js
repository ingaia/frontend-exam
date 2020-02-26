import React from 'react';
import { useDispatch } from 'react-redux';
import { render } from '@testing-library/react';

import { FormLogin } from '~/components';

jest.mock('react-redux');

test('renders learn react FormLogin', () => {
    const { getByText } = render(<FormLogin />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    expect(getByText('Password')).toBeTruthy();
});
