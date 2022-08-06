import * as G from './index.js'

test('simple', () => {
  expect(G.pipe(
    G.range(1, 5),
    G.prepend(G.range(1, 3)),
    G.array
  )).toEqual([
    1, 2, 3,
    1, 2, 3, 4, 5
  ])
})
