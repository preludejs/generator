import * as G from './index.js'

test('skip', () => {
  expect(G.pipe(G.from(1), G.skip(3), G.take(2), G.array)).toEqual([
    4, 5
  ])
  expect(G.pipe([ 1, 2, 3, 4, 5, 6 ], G.skip(3), G.array)).toEqual([
    4, 5, 6
  ])
})
