import * as G from './index.js'

test('recursive', () => {
  expect(G.pipe(
    G.recursive(_ => _ + 1, 1, _ => _ === 10),
    G.array
  )).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9
  ])
})
