import * as G from './index.js'

test('concat', () => {
  expect(G.array(G.concat(
    G.range(1, 3),
    G.range(4, 6)
  ))).toEqual([1, 2, 3, 4, 5, 6])
})
