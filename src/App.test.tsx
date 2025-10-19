import { render, screen } from '@testing-library/react';
import App from './App';
import { describe } from 'node:test';

describe('App', () => {
  it('renders the main application component', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
