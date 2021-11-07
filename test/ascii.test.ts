import * as G from '../cjs/index.js'

test('charRange', () => {
  expect(G.array(G.charRange('a', 'd'))).toEqual([
    'a', 'b', 'c', 'd'
  ])
})
