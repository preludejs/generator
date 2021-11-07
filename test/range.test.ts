import * as G from '../cjs/index.js'

test('more than once on generator', () => {
  const g = G.range(1, 3)
  expect(G.array(g)).toEqual([1, 2, 3])
  expect(G.array(g)).toEqual([])
})

test('more than once on iterable', () => {
  const g = G.iterable(() => G.range(1, 3))
  expect(G.array(g)).toEqual([1, 2, 3])
  expect(G.array(g)).toEqual([1, 2, 3])
})
