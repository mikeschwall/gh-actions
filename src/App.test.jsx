import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App Component', () => {
  it('renders the hello message', () => {
    render(<App />);
    expect(screen.getByText(/delectus aut autem/i)).toBeInTheDocument();
  });
});
