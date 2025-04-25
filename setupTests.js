import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';  // Import matchers directly

expect.extend(matchers);  // Extend Vitest's expect with jest-dom matchers
