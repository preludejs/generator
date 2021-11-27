import * as G from './index.js'

test('cycle', () => {
  expect(G.array(G.pipe1(G.cycle([ 1, 2, 3 ]), G.take(7)))).toEqual([
    1, 2, 3,
    1, 2, 3,
    1
  ])
})

test('empty', () => {
  expect(G.array(G.cycle([]))).toEqual([])
})
