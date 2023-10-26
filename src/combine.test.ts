import * as G from './index.js'

test('combine', () => {
  expect(G.pipe(G.combine(
    G.range(1, 5),
    [ 'a', 'b', 'c' ]
  ), G.array)).toEqual([
    [ 1, 'a' ],
    [ 2, 'b' ],
    [ 3, 'c' ]
  ])
})
