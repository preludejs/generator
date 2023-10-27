import * as G from './index.js'
import * as Cmp from '@prelude/cmp'

test('sort', () => {
  expect(G.pipe(
    ['5', 3, 2, '6', 1, '4'],
    G.sort((a, b) => Cmp.string(String(a), String(b))),
    G.array
  )).toEqual([1, 2, 3, '4', '5', '6'])
})
