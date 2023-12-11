import endsWith from '../src/endsWith';

describe('endsWith function', () => {
    test('testing with a character at the end of the string',() => {
        expect(endsWith("Hello", 'o')).toBe(true);
    });
    
    test('testing with a character not at the end of the string',() => {
        expect(endsWith("Hello", 'f')).toBe(false);
    });

    test('testing with multiple characters at the end of the string',() => {
        expect(endsWith("Hello", 'llo')).toBe(true);
    });
    
    test('testing with multiple characters not at the end of the string',() => {
        expect(endsWith("Hello", 'flo')).toBe(false);
    });
    
    test('testing with multiple characters not at the end of the string',() => {
        expect(endsWith("Hello", 'lle')).toBe(false);
    });

    test('testing with a character in 3rd position of the string',() => {
        expect(endsWith("Hello", 'l', 3)).toBe(true);
    });
    
    test('testing with a character not in 3rd position of the string',() => {
        expect(endsWith("Hello", 'f', 3)).toBe(false);
    });

    test('testing with multiple characters in 2nd position of the string',() => {
        expect(endsWith("Hello", 'He', 2)).toBe(true);
    });
    
    test('testing with multiple characters not in 2nd position of the string',() => {
        expect(endsWith("Hello", 'll', 2)).toBe(false);
    });

});