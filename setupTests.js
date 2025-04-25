import { expect } from 'vitest';  // Import Vitest's expect first
import matchers from '@testing-library/jest-dom/matchers';  // Import matchers

expect.extend(matchers);  // Extend Vitest's expect

// Now, import jest-dom itself (this includes custom assertions)
import '@testing-library/jest-dom';
