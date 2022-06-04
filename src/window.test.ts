import * as G from './index.js'

test('simple', () => {
  expect(G.pipe(
    G.range(1, 5),
    G.window(3),
    G.array
  )).toEqual([
    [ 1, 2, 3 ],
    [ 2, 3, 4 ],
    [ 3, 4, 5 ]
  ])
  expect(G.pipe(
    G.range(1, 3),
    G.window(3),
    G.array
  )).toEqual([
    [ 1, 2, 3 ]
  ])
})

test('shorter', () => {
  expect(G.pipe(
    G.range(1, 5),
    G.window(6, true),
    G.array
  )).toEqual([
    [ 1, 2, 3, 4, 5 ]
  ])
  expect(G.pipe(
    G.range(1, 5),
    G.window(6, false),
    G.array
  )).toEqual([
  ])
})
