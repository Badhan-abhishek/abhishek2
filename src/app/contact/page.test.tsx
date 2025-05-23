import { render, screen } from '@testing-library/react';
import ContactPage from './page';
import '@testing-library/jest-dom';
import { ContactConstants } from '@/lib/contact_constants'; // Import constants

// Mock framer-motion (similar to projects page)
jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  motion: {
    main: jest.fn(({ children, ...props }) => <main {...props}>{children}</main>),
    div: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
    // Add other motion components if used
  },
}));

describe('ContactPage', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
    render(<ContactPage />);
  });

  test('renders the main heading "Contact Me"', () => {
    expect(screen.getByRole('heading', { name: /contact me/i, level: 1 })).toBeInTheDocument();
  });

  test('renders Email link with correct mailto: href', () => {
    const emailLink = screen.getByRole('link', { name: new RegExp(ContactConstants.email, "i") });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', `mailto:${ContactConstants.email}`);
  });

  test('renders LinkedIn link with correct href and opens in new tab', () => {
    const linkedInLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute('href', ContactConstants.linkedIn);
    expect(linkedInLink).toHaveAttribute('target', '_blank');
    expect(linkedInLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders GitHub link with correct href and opens in new tab', () => {
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', ContactConstants.github);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
