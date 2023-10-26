import * as G from './index.js'

test('extend', () => {
  expect(G.pipe(
    G.range(1, 5),
    G.map(value => ({ value })),
    G.extend(_ => ({ double: _.value * 2 })),
    G.array
  )).toEqual([
    { value: 1, double: 2 },
    { value: 2, double: 4 },
    { value: 3, double: 6 },
    { value: 4, double: 8 },
    { value: 5, double: 10 }
  ])
})
