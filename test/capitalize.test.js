import capitalize from '../src/capitalize';

describe('capitalize function', () => {
    test('testing with an already capitalize string',() => {
        expect(capitalize("Hello")).toBe("Hello");
    });

    test('testing with an entirely down cases string',() => {
            expect(capitalize("hello")).toBe('Hello');
    });
    
    test('testing with an entirely up cases string',() => {
            expect(capitalize("HELLO")).toBe('Hello');
    });
});