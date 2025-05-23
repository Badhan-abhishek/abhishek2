import { render, screen, fireEvent } from '@testing-library/react';
import SharedHeader from './header'; 
import '@testing-library/jest-dom';

// Mock NavItems as its internal links are tested elsewhere or manually verified
jest.mock('@/components/nav-items', () => ({
  NavItems: jest.fn(() => <div data-testid="mock-nav-items">NavItems</div>),
}));

// Mock Heading component
jest.mock('@/components/typography', () => ({
  Heading: jest.fn(({ content }) => <h1 aria-label={content}>{content}</h1>), // Added aria-label for easier querying if needed
}));

// Mock next/link
jest.mock('next/link', () => {
    // eslint-disable-next-line react/display-name
    return ({ children, href }) => <a href={href}>{children}</a>;
});

describe('SharedHeader', () => {
  beforeEach(() => {
    render(<SharedHeader />);
  });

  test('renders the logo/brand name "abhishek" as a link to home', () => {
    const logoLink = screen.getByRole('link', { name: /abhishek/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
    // Check if Heading is rendered within the link
    expect(screen.getByRole('heading', { name: /abhishek/i, level: 1 })).toBeInTheDocument();
  });

  test('renders NavItems component for desktop view', () => {
    // NavItems is rendered twice, one for desktop, one for mobile (when open)
    // We check if at least one instance (the desktop one) is present initially.
    // The mock has data-testid="mock-nav-items"
    const navItemsInstances = screen.getAllByTestId('mock-nav-items');
    expect(navItemsInstances.length).toBeGreaterThanOrEqual(1); 
  });

  test('renders mobile menu toggle icon', () => {
    // The BsList icon is inside a <li> which acts as a button.
    // The <li> itself doesn't have a direct role of "button".
    // We can find it by looking for a listitem.
    // A more robust way would be to add a data-testid or aria-label to the toggle <li>.
    const listItems = screen.getAllByRole('listitem');
    // Assuming the mobile toggle is the only <li> initially visible in that specific nav structure.
    // This test is a bit fragile due to lack of specific selector.
    expect(listItems.find(item => item.innerHTML.includes("svg"))).toBeInTheDocument(); // Checks for an SVG icon within an li
  });

  test('mobile navigation menu (NavItems) is not visible initially', () => {
    // The mobile NavItems is conditionally rendered.
    // Check that only one instance of NavItems (desktop) is rendered initially.
    expect(screen.getAllByTestId('mock-nav-items').length).toBe(1);
  });

  test('clicking mobile menu toggle shows NavItems for mobile', () => {
    // Find the mobile menu toggle. This is still a bit fragile.
    // Adding data-testid="mobile-menu-toggle" to the <li> in SharedHeader would be better.
    const listItems = screen.getAllByRole('listitem');
    const mobileMenuToggle = listItems.find(item => item.innerHTML.includes("svg"));
    
    expect(mobileMenuToggle).toBeInTheDocument();
    fireEvent.click(mobileMenuToggle);
    
    // Now two instances of NavItems should be rendered (desktop + mobile)
    expect(screen.getAllByTestId('mock-nav-items').length).toBe(2);
  });

  test('clicking mobile menu toggle twice hides NavItems for mobile', () => {
    const listItems = screen.getAllByRole('listitem');
    const mobileMenuToggle = listItems.find(item => item.innerHTML.includes("svg"));

    expect(mobileMenuToggle).toBeInTheDocument();
    fireEvent.click(mobileMenuToggle); // Open
    fireEvent.click(mobileMenuToggle); // Close
    
    // Only one instance of NavItems (desktop) should be rendered again
    expect(screen.getAllByTestId('mock-nav-items').length).toBe(1);
  });

});
