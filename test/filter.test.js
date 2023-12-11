import filter from '../src/filter';

describe('filter function',() => {
    test('filter on an active condition, removing one item', () => {
        expect(filter([{'user': 'barney', 'active': true }, 
                        { 'user': 'fred', 'active': false }, 
                        { 'user': 'george', 'active': true }]
                    , ({active}) => active)).toStrictEqual([{'user': 'barney', 'active': true }, { 'user': 'george', 'active': true }]);
      });

      test('filter on an active condition, removing two items', () => {
          expect(filter([{'user': 'barney', 'active': false }, 
                          { 'user': 'fred', 'active': false }, 
                          { 'user': 'george', 'active': true }]
                      , ({active}) => active)).toStrictEqual([{ 'user': 'george', 'active': true }]);
        });

});