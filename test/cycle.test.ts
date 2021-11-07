import * as G from '../cjs/index.js'

test('cycle', () => {
  expect(G.array(G.take(7, G.cycle([ 1, 2, 3 ]), false))).toEqual([
    1, 2, 3,
    1, 2, 3,
    1
  ])
})

test('empty', () => {
  expect(G.array(G.cycle([]))).toEqual([])
})
