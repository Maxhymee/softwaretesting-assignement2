import isDate from '../src/isDate';

describe('isDate function', () => {
    test('testing with a Date',() => {
        expect(isDate(new Date)).toBe(true);
    });

    test('testing with an array',() => {
        expect(isDate([1,2,3])).toBe(false);
    });

    test('testing with a string',() => {
        expect(isDate("123")).toBe(false)
    });

    test('testing with an integer',() => {
        expect(isDate(123)).toBe(false)
    });

    test('testing with null value',() => {
        expect(isDate(null)).toBe(false)
    });

});