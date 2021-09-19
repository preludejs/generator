import * as G from '../index.js'

test('simple', () => {
  expect(G.array(G.rotate(1, G.of([ 1, 2, 3 ])))).toEqual([ 2, 3, 1 ])
})

test('larger', () => {
  expect(G.array(G.rotate(0, G.of([ 1, 2, 3 ])))).toEqual([ 1, 2, 3 ])
  expect(G.array(G.rotate(1, G.of([ 1, 2, 3 ])))).toEqual([ 2, 3, 1 ])
  expect(G.array(G.rotate(2, G.of([ 1, 2, 3 ])))).toEqual([ 3, 1, 2 ])
  expect(G.array(G.rotate(3, G.of([ 1, 2, 3 ])))).toEqual([ 1, 2, 3 ])
  expect(G.array(G.rotate(4, G.of([ 1, 2, 3 ])))).toEqual([ 2, 3, 1 ])
  expect(G.array(G.rotate(5, G.of([ 1, 2, 3 ])))).toEqual([ 3, 1, 2 ])
  expect(G.array(G.rotate(6, G.of([ 1, 2, 3 ])))).toEqual([ 1, 2, 3 ])
  expect(G.array(G.rotate(7, G.of([ 1, 2, 3 ])))).toEqual([ 2, 3, 1 ])
})

test('empty', () => {
  expect(G.array(G.rotate(0, G.of([])))).toEqual([])
  expect(G.array(G.rotate(1, G.of([])))).toEqual([])
  expect(G.array(G.rotate(2, G.of([])))).toEqual([])
})

test('negative', () => {
  expect(G.array(G.rotate(-1, G.of([ 1, 2, 3 ])))).toEqual([ 3, 1, 2 ])
  expect(G.array(G.rotate(-2, G.of([ 1, 2, 3 ])))).toEqual([ 2, 3, 1 ])
  expect(G.array(G.rotate(-3, G.of([ 1, 2, 3 ])))).toEqual([ 1, 2, 3 ])
  expect(G.array(G.rotate(-4, G.of([ 1, 2, 3 ])))).toEqual([ 3, 1, 2 ])
})
