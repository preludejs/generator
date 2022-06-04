import * as G from './index.js'

test('simple', () => {
  expect(G.pipe(
    G.range(1, 10),
    G.batch(3),
    G.array
  )).toEqual([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
    [ 10 ]
  ])
})
