import * as G from './index.js'

test('pair', () => {
  expect(
    G.pipe(
      G.pair(
        G.from(),
        G.pipe(G.from(), G.skip(2))
      ),
      G.take(3),
      G.array
    )
  ).toEqual([
    [ 0, 2 ],
    [ 1, 3 ],
    [ 2, 4 ]
  ])
})
