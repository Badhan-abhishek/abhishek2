import { render, screen } from '@testing-library/react';
import ProjectsPage from './page';
import '@testing-library/jest-dom';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  motion: {
    main: jest.fn(({ children, ...props }) => <main {...props}>{children}</main>),
    div: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
    section: jest.fn(({ children, ...props }) => <section {...props}>{children}</section>),
    span: jest.fn(({ children, ...props }) => <span {...props}>{children}</span>),
    // Add any other motion components you use that might need mocking
  },
  // If useInView is problematic, you might need to mock it too
  // useInView: jest.fn(() => true), // Example: always return true
}));


describe('ProjectsPage', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
    render(<ProjectsPage />);
  });

  test('renders the main heading "My Projects"', () => {
    expect(screen.getByRole('heading', { name: /my projects/i, level: 1 })).toBeInTheDocument();
  });

  test('renders the "Projects at Cuilsoft" sub-heading', () => {
    expect(screen.getByRole('heading', { name: /projects at cuilsoft/i, level: 1 })).toBeInTheDocument();
  });

  test('renders the "Personal Projects" sub-heading', () => {
    expect(screen.getByRole('heading', { name: /personal projects/i, level: 1 })).toBeInTheDocument();
  });

  test('renders at least one project from "Projects at Cuilsoft" section (e.g., Tradecafe)', () => {
    expect(screen.getByRole('heading', { name: /tradecafe/i, level: 1 })).toBeInTheDocument();
  });

  test('renders at least one project from "Personal Projects" section (e.g., Go HTMX Task Manager)', () => {
    expect(screen.getByRole('heading', { name: /go htmx task manager/i, level: 1 })).toBeInTheDocument();
  });

  test('renders "View on GitHub" link for "Go HTMX Task Manager" with correct href', () => {
    const ghtmLink = screen.getAllByRole('link', { name: /view on github/i }).find(link => link.getAttribute('href') === 'https://github.com/Abhishek-90/go-htmx-task-manager');
    expect(ghtmLink).toBeInTheDocument();
    expect(ghtmLink).toHaveAttribute('href', 'https://github.com/Abhishek-90/go-htmx-task-manager');
  });

  test('renders "View on GitHub" link for "RNAM" with correct href', () => {
    const rnamLink = screen.getAllByRole('link', { name: /view on github/i }).find(link => link.getAttribute('href') === 'https://github.com/Abhishek-90/rnam');
    expect(rnamLink).toBeInTheDocument();
    expect(rnamLink).toHaveAttribute('href', 'https://github.com/Abhishek-90/rnam');
  });
});
