import * as G from './index.js'

test('simple', () => {
  expect(G.pipe(
    G.range(1, 5),
    G.findIndex(_ => _ === 3)
  )).toEqual(2)
  expect(G.pipe(
    G.range(1, 5),
    G.findIndex(_ => _ === 6)
  )).toEqual(-1)
})
