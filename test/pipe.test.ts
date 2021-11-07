import * as G from '../cjs/index.js'

test('pipe', () => {
  const double = (g: Iterable<number>) => G.map(g, _ => _ * 2)
  const itemize = <T>(g: Iterable<T>) => G.map(g, _ => ({ item: _ }))
  const xs = G.pipe(
    [ 1, 2, 3 ],
    double,
    itemize,
    G.array
  )
  expect(xs).toEqual([
    { item: 2 },
    { item: 4 },
    { item: 6 }
  ])
})
