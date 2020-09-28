import { render, screen } from '@testing-library/react';
import Layout from '.';

describe('<Layout />', () => {
  it('should render the heading', () => {
    const { container } = render(<Layout />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Layout />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
