import * as G from './index.js'

test('retain', () => {
  const g = G.range(1, 100)
  expect(G.pipe1(g, G.retain, G.take(3), G.array)).toEqual([ 1, 2, 3 ])
  expect(G.pipe1(g, G.retain, G.take(3), G.array)).toEqual([ 4, 5, 6 ])
  expect(G.pipe1(g, G.take(3), G.array)).toEqual([ 7, 8, 9 ])
  expect(G.pipe1(g, G.take(3), G.array)).toEqual([])
})
