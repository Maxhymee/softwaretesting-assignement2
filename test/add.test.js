import add from '../src/add';

describe('add function', () => {
  test('handles two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('handles two negative numbers', () => {
    expect(add(-6, -4)).toBe(-10);
  });

  test('handles one negative number (right) and one positive (left)', () => {
    expect(add(7, -5)).toBe(2);
  });

  test('handles one negative number (left) and one positive(right)', () => {
    expect(add(-3, 7)).toBe(4);
  });

  test('handles one positive number and 0', () => {
    expect(add(7, 0)).toBe(7);
  });

  test('handles 0 and one positive number', () => {
    expect(add(0, 7)).toBe(7);
  });

  test('handles one negative number and 0', () => {
    expect(add(-7, 0)).toBe(-7);
  });

  test('handles 0 and one negative number', () => {
    expect(add(0, -7)).toBe(-7);
  });

  test('handles double zero values', () => {
    expect(add(0, 0)).toBe(0);
  });
});