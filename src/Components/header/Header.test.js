import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ThemeProvider } from '../../ThemeContext/ThemeContext';
import { Header } from './Header';

test('it toggles between dark and light modes', () => {
  render(
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );

  const toggleButton = screen.getByTestId('toggle-btn');

  expect(screen.getByText('devfinder')).toBeInTheDocument();
  expect(screen.getByText('Light')).toBeInTheDocument();

  fireEvent.click(toggleButton);
  expect(screen.getByText('Dark')).toBeInTheDocument();
  expect(screen.getByTestId('moon-icon')).toBeInTheDocument();

  fireEvent.click(toggleButton);
  expect(screen.getByText('Light')).toBeInTheDocument();
  expect(screen.getByTestId('sunny-icon')).toBeInTheDocument();
});
