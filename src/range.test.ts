import * as G from './index.js'

test('simple', () => {
  expect(G.pipe(G.range(1, 3), G.array)).toEqual([ 1, 2, 3 ])
})

test('step', () => {
  expect(G.pipe(G.range(1, 5, 2), G.array)).toEqual([ 1, 3, 5 ])
})

test('down', () => {
  expect(G.pipe(G.range(3, 1), G.array)).toEqual([ 3, 2, 1 ])
})

test('down', () => {
  expect(G.pipe(G.range(5, 1, -2), G.array)).toEqual([ 5, 3, 1 ])
})
