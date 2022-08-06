import * as G from './index.js'

test('simple', () => {
  expect(G.pipe(
    G.range(1, 5),
    G.nth(3)
  )).toEqual(3)
  expect(() => G.pipe(
    G.range(1, 5),
    G.nth(6)
  )).toThrow('nth(6) (1-based index) not found, max index 5')
  expect(() => G.pipe(
    G.range(1, 5),
    G.nth(6, { indexBase: 0 })
  )).toThrow('nth(6) (0-based index) not found, max index 4')
})
