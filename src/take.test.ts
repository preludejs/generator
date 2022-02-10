import * as G from './index.js'

test('is closing', () => {
  const g = G.range(1, 100)
  expect(G.pipe(g, G.take(3), G.array)).toEqual([ 1, 2, 3 ])
  expect(G.pipe(g, G.take(3), G.array)).toEqual([])
})

test('can be retained', () => {
  const g = G.range(1, 100)
  expect(G.pipe(g, G.retain, G.take(1), G.array)).toEqual([ 1 ])
  expect(G.pipe(g, G.retain, G.take(2), G.array)).toEqual([ 2, 3 ])
  expect(G.pipe(g, G.take(2), G.array)).toEqual([ 4, 5 ])
  expect(G.pipe(g, G.take(3), G.array)).toEqual([])
})

test('works on empty', () => {
  const g = G.of([])
  expect(G.pipe(g, G.take(3), G.array)).toEqual([])
})

test('works on shorter', () => {
  let g = G.of([ 1, 2 ])
  expect(G.pipe(g, G.take(3), G.array)).toEqual([ 1, 2 ])
  expect(G.pipe(g, G.take(3), G.array)).toEqual([])
  g = G.of([ 1, 2 ])
  expect(G.pipe(g, G.retain, G.take(3), G.array)).toEqual([ 1, 2 ])
  expect(G.pipe(g, G.retain, G.take(3), G.array)).toEqual([])
})

test('taking 0 is a bit special', () => {
  const g = G.range(1, 100)
  expect(G.pipe(g, G.take(0), G.array)).toEqual([])
  expect(G.pipe(g, G.take(1), G.array)).toEqual([ 1 ])
  expect(G.pipe(g, G.take(1), G.array)).toEqual([])
})
