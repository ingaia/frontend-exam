import React from 'react';
import { render } from '@testing-library/react';
import CustomInput from  '../components/custom-input/custom-input.component';

test('renders input', () => {
  const { getAllByTestId } = render(<CustomInput />);
  const inputElem = getAllByTestId("custom-input")[0]
  expect(inputElem).toBeInTheDocument();
});


test('has onChange prop defined in defaultProps', () => {
    expect(CustomInput.defaultProps.change).toBeDefined();
});

  
