import * as G from './index.js'

test('maybeSingle', () => {
  expect(G.maybeSingle([])).toBe(undefined)
  expect(G.maybeSingle([42])).toEqual(42)
  // expect(() => G.maybeSingle([ 1, 2 ])).toThrow('Expected no elements or a single element, got more.')
})
