import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';

const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
    Promise.resolve(
      success({
        coords: {
          latitude: 51.1,
          longitude: 45.3,
        },
      })
    )
  ),
};
global.navigator.geolocation = mockGeolocation;

describe('App', () => {
  test('renders App component', async () => {
    const { getByTestId } = render(<App />);

    await waitFor(() => {
      expect(screen.getByText('Travel Advisor')).toBeInTheDocument();
    });
    // screen.debug();
  });
});
