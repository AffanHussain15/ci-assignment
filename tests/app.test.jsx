import { render, screen, fireEvent } from '@testing-library/react';
import { add, multiply, formatCurrency } from '../src/utils/math.js';
import Counter from '../src/components/Counter.jsx';

describe('math utils', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('multiplies two numbers', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  it('formats currency', () => {
    expect(formatCurrency(19.9)).toBe('$19.90');
  });
});

describe('Counter component', () => {
  it('increments the count', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
});
