import divide from '../src/divide';

describe('divide function', () => {
  test('handles two positive numbers', () => {
    expect(divide(8, 4)).toBe(2);
  });

  test('handles two negative numbers', () => {
    expect(divide(-7, -4)).toBe(1.75);
  });

  test('handles one negative number (right) and one positive (left)', () => {
    expect(divide(8, -5)).toBe(-1.6);
  });

  test('handles one negative number (left) and one positive(right)', () => {
    expect(divide(-3, 6)).toBe(-0.5);
  });

  test('handles one positive number and 0', () => {
    expect(divide(7, 0)).toBe(7);
  });

  test('handles 0 and one positive number', () => {
    expect(divide(0, 7)).toBe(NaN);
  });

  test('handles one negative number and 0', () => {
    expect(divide(-7, 0)).toBe(-7);
  });

  test('handles 0 and one negative number', () => {
    expect(divide(0, -7)).toBe(NaN);
  });

  test('handles double zero values', () => {
    expect(divide(0, 0)).toBe(NaN);
  });
});