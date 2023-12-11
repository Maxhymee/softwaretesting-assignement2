import at from '../src/at';

describe('at function', () => {
    test('Creating a working array',() => {
        const object = {'a' : [0,5,"test"], 'b' : 4, 'c' : "test c"};
        expect(at(object, 'a[0]', 'a[2]', 'c')).toStrictEqual([0, 'test', 'test c']);
    });

});