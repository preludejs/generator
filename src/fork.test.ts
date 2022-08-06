import * as G from './index.js'

test('fork, union', () => {
  expect(G.pipe(
    G.range(1, 5),
    G.fork(
      G.map((_: number) => _ * 2),
      G.map((_: number) => String(_ * 3))
    ),
    G.concat,
    G.array
  )).toEqual([
    2, 4, 6, 8, 10,
    '3', '6', '9', '12', '15'
  ])
})
