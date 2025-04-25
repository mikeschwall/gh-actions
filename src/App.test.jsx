import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App Component', () => {
  it('renders the text from api', () => {
    render(<App />);
    expect(screen.getByText(/delectus aut autem/i)).toBeInTheDocument();
  });
});
