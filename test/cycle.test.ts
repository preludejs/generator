import * as G from '../'

test('cycle', () => {
  expect(G.array(G.take(7, G.cycle([ 1, 2, 3 ])))).toEqual([
    1, 2, 3,
    1, 2, 3,
    1
  ])
})
