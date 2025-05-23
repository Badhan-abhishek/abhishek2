import { render, screen } from '@testing-library/react';
import HomePage from './page'; // Assuming this is src/app/page.tsx
import '@testing-library/jest-dom';

// Mock framer-motion
jest.mock('framer-motion', () => {
  const actualMotion = jest.requireActual('framer-motion');

  // This is the function that gets called for motion(Component)
  const motionHoc = (ComponentToWrap) => {
    // Return a new component that strips motion props and renders an appropriate underlying element
    // eslint-disable-next-line react/display-name
    return ({ children, initial, animate, transition, variants, whileHover, whileTap, ...props }) => {
      // If we're wrapping NextLink (imported as Link), it should result in an 'a' tag.
      // The props like 'href' should be passed to this 'a' tag.
      if (props.href) {
        return <a {...props}>{children}</a>;
      }
      // Fallback for other components wrapped by motion() directly.
      return <div {...props}>{children}</div>;
    };
  };

  // Mocking specific motion properties like motion.div, motion.main, etc.
  // These should also strip motion-specific props to avoid warnings if they render plain DOM elements.
  motionHoc.div = jest.fn(({ children, initial, animate, transition, variants, whileHover, whileTap, ...props }) => <div {...props}>{children}</div>);
  motionHoc.main = jest.fn(({ children, initial, animate, transition, variants, whileHover, whileTap, ...props }) => <main {...props}>{children}</main>);
  motionHoc.section = jest.fn(({ children, initial, animate, transition, variants, whileHover, whileTap, ...props }) => <section {...props}>{children}</section>);
  motionHoc.span = jest.fn(({ children, initial, animate, transition, variants, whileHover, whileTap, ...props }) => <span {...props}>{children}</span>);

  return {
    ...actualMotion,
    motion: motionHoc, // motion is the HOC, and also the object with .div, .main etc.
    useInView: jest.fn(() => true),
    AnimatePresence: jest.fn(({ children }) => <>{children}</>),
  };
});

// Mock AnimateHeading component as its animation details are not relevant to content testing
// and it might have its own complexities (like character splitting for animation)
jest.mock('@/components/typography', () => {
  const originalTypography = jest.requireActual('@/components/typography');
  return {
    ...originalTypography,
    AnimateHeading: jest.fn(({ content }) => <h1>{content}</h1>), // Simplified mock renders content in an h1
  };
});


describe('HomePage', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;

    render(<HomePage />);
  });

  test('renders the main hero heading "I make software"', () => {
    expect(screen.getByRole('heading', { name: /i make software/i, level: 1 })).toBeInTheDocument();
  });

  test('renders the sub-hero heading "@ Cuilsoft"', () => {
    expect(screen.getByRole('heading', { name: /@ cuilsoft/i, level: 1 })).toBeInTheDocument();
  });

  test('renders the link to Cuilsoft with correct href and target', () => {
    // The text "@ Cuilsoft" is inside a heading, which is inside a link.
    // The link is found by its accessible name, which includes the text of the AnimateHeading.
    const cuilsoftLink = screen.getByRole('link', { name: /@ cuilsoft/i });
    expect(cuilsoftLink).toBeInTheDocument();
    expect(cuilsoftLink).toHaveAttribute('href', 'https://cuilsoft.com');
    expect(cuilsoftLink).toHaveAttribute('target', '_blank');
  });
});
