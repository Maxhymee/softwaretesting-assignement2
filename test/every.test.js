import every from '../src/every';

describe('every function', () => {
    test('testing with correct predicate',() => {
        expect(every(["a", "bc", "def"], String)).toBe(true);
    });
    
    test('testing with incorrect predicate',() => {
        expect(every([true, 1, null, 'yes'], Boolean)).toBe(false);
    });
    
    test('testing with correct predicate',() => {
        expect(every([true, "bc", false], String)).toBe(true);
    });
    
    test('testing with empty array',() => {
        expect(every([], String)).toBe(true);
    });
});