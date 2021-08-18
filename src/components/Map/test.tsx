import { render, screen } from '@testing-library/react';

import Map from '.';

describe('<componete a ser testado />', () => {
  it('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument();
  });

  it('should render with the marker in correct place', () => {
    const place1 = {
      id: 1,
      name: 'Petrópolis',
      slug: 'petropolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    };

    const place2 = {
      id: 2,
      name: 'Pontiguá',
      slug: 'pontiguá',
      location: {
        latitude: 125,
        longitude: 125
      }
    };

    render(<Map places={[place1, place2]} />);

    expect(screen.getByTitle(/Petrópolis/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Pontiguá/i)).toBeInTheDocument();
  });
});
