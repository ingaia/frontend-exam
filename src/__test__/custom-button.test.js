import React from 'react';
import { render } from '@testing-library/react';
import CustomButton from  '../components/custom-button/custom-button.component';

test('renders button', () => {
  const { getAllByTestId } = render(<CustomButton />);
  const buttonElem = getAllByTestId("custom-button")[0]
  expect(buttonElem).toBeInTheDocument();
});

