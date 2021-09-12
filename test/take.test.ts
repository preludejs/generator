import * as G from '../index.js'

test('is iterable non-closing', () => {
  const g = G.iterable(() => G.range(1, 100))
  expect(G.array(G.take(3, g))).toEqual([ 1, 2, 3 ])
  expect(G.array(G.take(3, g))).toEqual([ 1, 2, 3 ])
})

test('is iterator closing', () => {
  const g = G.range(1, 100)[Symbol.iterator]()
  expect(G.array(G.take(3, g))).toEqual([ 1, 2, 3 ])
  expect(G.array(G.take(3, g))).toEqual([])
})

test('is optionally open', () => {
  const g = G.range(1, 100)
  expect(G.array(G.take(3, g, false))).toEqual([ 1, 2, 3 ])
  expect(G.array(G.take(3, g, false))).toEqual([ 4, 5, 6 ])
  expect(G.array(G.take(3, g, false))).toEqual([ 7, 8, 9 ])
})

test('works on empty', () => {
  const g = G.of([])
  expect(G.array(G.take(3, g))).toEqual([])
  expect(G.array(G.take(3, g, true))).toEqual([])
  expect(G.array(G.take(3, g, false))).toEqual([])
})

test('works on shorter', () => {
  let g = G.of([ 1, 2 ])
  expect(G.array(G.take(3, g, true))).toEqual([ 1, 2 ])
  expect(G.array(G.take(3, g, true))).toEqual([])
  g = G.of([ 1, 2 ])
  expect(G.array(G.take(3, g, false))).toEqual([ 1, 2 ])
  expect(G.array(G.take(3, g, false))).toEqual([])
})

test('taking 0 and closing is absurd', () => {
  expect(() => G.array(G.take(0, G.of([]), true))).toThrowError('Taking 0 elements with done = true is an absurd.')
})
