import isArguments from '../src/isArguments';

describe('isArguments function', () => {
    test('testing with arguments',() => {
        expect(isArguments(function() { return arguments }())).toBe(true);
    });
    test('testing with no argument',() => {
            expect(isArguments([1, 2, 3])).toBe(false)
    })

});