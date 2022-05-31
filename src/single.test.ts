import * as G from './index.js'

test('single', () => {
  // expect(() => G.single([])).toThrow('Expected single element, got none.')
  expect(G.single([42])).toEqual(42)
  // expect(() => G.single([ 1, 2 ])).toThrow('Expected single element, got more.')
})
