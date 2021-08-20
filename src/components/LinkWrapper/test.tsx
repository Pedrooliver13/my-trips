import { render, screen } from '@testing-library/react';
import LinkWrapper from '.';

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="https://www.google.com">Google</LinkWrapper>);

    const children = screen.getByRole('link', { name: /google/i });

    expect(children).toBeInTheDocument();
    expect(children).toHaveAttribute('href', 'https://www.google.com');
    screen.logTestingPlaygroundURL();
  });
});
