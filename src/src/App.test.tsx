import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header and Footer', () => {
  render(<App />);
  const linkElement = screen.getByText(/Header/i);
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.getByText(/Home/i);
  expect(linkElement2).toBeInTheDocument();
  const linkElement3 = screen.getByText(/Footer/i);
  expect(linkElement3).toBeInTheDocument();
});

//here be tests