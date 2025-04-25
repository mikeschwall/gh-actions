import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('App Component', () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ title: 'delectus aut autem' }]),
      })
    );
  });

  it('renders the text from api', async () => {
    const queryClient = new QueryClient();  // Create a query client instance

    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    await waitFor(() => {
        expect(screen.getByText(/delectus aut autem/i)).toBeInTheDocument();
      });
  });
});
