import { render, screen } from '@testing-library/react';
import AboutPage from './page';
import '@testing-library/jest-dom';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  motion: {
    main: jest.fn(({ children, ...props }) => <main {...props}>{children}</main>),
    // AboutPage also uses motion.section if we consider the template used, but it's not directly in page.tsx
    // The content is directly in <motion.main> -> <Heading/> and <section><p/></section>
    // So, no explicit mock for motion.section needed here unless a sub-component uses it and fails.
  },
}));

describe('AboutPage', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
    render(<AboutPage />);
  });

  test('renders the main heading "About Me"', () => {
    expect(screen.getByRole('heading', { name: /about me/i, level: 1 })).toBeInTheDocument();
  });

  test('renders the summary paragraph', () => {
    const paragraphText = /Enthusiastic and experienced Full-Stack Developer/i;
    expect(screen.getByText(paragraphText)).toBeInTheDocument();
  });
});
