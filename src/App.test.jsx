import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('App Component', () => {
    beforeEach(() => {
        globalThis.fetch = vi.fn(() => {
          console.log('Mock fetch called');  // <-- Add this
          return Promise.resolve({
            json: () => Promise.resolve([{ id: 1, title: 'delectus aut autem' }]),
          });
        });
      });
      

  it('renders the text from api', async () => {
    const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,    // Disable retries (they delay test completion)
            cacheTime: 0,    // Prevent caching between tests
            staleTime: 0,    // Data becomes stale immediately
          },
        },
      });

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
