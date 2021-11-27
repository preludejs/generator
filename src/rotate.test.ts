import * as G from './index.js'

const rotate =
  (n: number, xs = [ 1, 2, 3 ]) =>
    G.pipe1(G.of(xs), G.rotate(n), G.array)

test('simple', () => {
  expect(rotate(1)).toEqual([ 2, 3, 1 ])
})

test('larger', () => {
  expect(rotate(0)).toEqual([ 1, 2, 3 ])
  expect(rotate(1)).toEqual([ 2, 3, 1 ])
  expect(rotate(2)).toEqual([ 3, 1, 2 ])
  expect(rotate(3)).toEqual([ 1, 2, 3 ])
  expect(rotate(4)).toEqual([ 2, 3, 1 ])
  expect(rotate(5)).toEqual([ 3, 1, 2 ])
  expect(rotate(6)).toEqual([ 1, 2, 3 ])
  expect(rotate(7)).toEqual([ 2, 3, 1 ])
})

test('empty', () => {
  expect(rotate(0, [])).toEqual([])
  expect(rotate(1, [])).toEqual([])
  expect(rotate(2, [])).toEqual([])
})

test('negative', () => {
  expect(rotate(-1)).toEqual([ 3, 1, 2 ])
  expect(rotate(-2)).toEqual([ 2, 3, 1 ])
  expect(rotate(-3)).toEqual([ 1, 2, 3 ])
  expect(rotate(-4)).toEqual([ 3, 1, 2 ])
})
