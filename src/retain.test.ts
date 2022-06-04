import * as G from './index.js'

test('retain', () => {
  const g = G.range(1, 100)
  expect(G.pipe(g, G.retain, G.take(3), G.array)).toEqual([ 1, 2, 3 ])
  expect(G.pipe(g, G.retain, G.take(3), G.array)).toEqual([ 4, 5, 6 ])
  expect(G.pipe(g, G.take(3), G.array)).toEqual([ 7, 8, 9 ])
  expect(G.pipe(g, G.take(3), G.array)).toEqual([])
})

test('for', () => {
  const g = G.retain(G.range(1, 5), 2)
  for (const _ of g) {
    break
  }
  for (const _ of g) {
    break
  }
  const values: number[] = []
  for (const value of g) {
    values.push(value)
  }
  expect(values).toEqual([ 3, 4, 5 ])
})
