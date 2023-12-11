import isArrayLike from '../src/isArrayLike';

describe('isArrayLike function', () => {
    test('testing with an array',() => {
        expect(isArrayLike([1,2,3])).toBe(true);
    });

    test('testing with a string',() => {
        expect(isArrayLike("123")).toBe(true)
    });

    test('testing with an integer',() => {
        expect(isArrayLike(123)).toBe(false)
    });

    test('testing with null value',() => {
        expect(isArrayLike(null)).toBe(false)
    });

});