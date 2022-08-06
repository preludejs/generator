import * as G from './index.js'

test('simple', () => {
  expect(G.pipe(
    G.range(1, 5),
    G.at(2)
  )).toEqual(3)
  expect(() => G.pipe(
    G.range(1, 5),
    G.at(5)
  )).toThrow('index 5 out of bounds')
})
