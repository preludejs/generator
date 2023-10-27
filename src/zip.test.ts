import * as G from './index.js'

test('zip', () => {
  expect(G.pipe(G.zip(
    G.range(1, 5),
    [ 'a', 'b', 'c' ]
  ), G.array)).toEqual([
    [ 1, 'a' ],
    [ 2, 'b' ],
    [ 3, 'c' ]
  ])
})
