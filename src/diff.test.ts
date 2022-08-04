import * as Cmp from '@prelude/cmp'
import * as G from './index.js'

test('unsorted', () => {

  expect(G.pipe(
    [ 7, 4, 5 ],
    G.diff([ 4, 8, 1, 5 ], Cmp.number),
    G.array,
  )).toEqual([
    [ undefined, 1 ],
    [ 4, 4 ],
    [ 5, 5 ],
    [ 7, undefined ],
    [ undefined, 8 ]
  ])

  expect(G.pipe(
    [ 7, 4, 5 ],
    G.diff([ 4, 8, 1, 5 ], Cmp.number, { direction: Cmp.dsc }),
    G.array,
  )).toEqual([
    [ undefined, 8 ],
    [ 7, undefined ],
    [ 5, 5 ],
    [ 4, 4 ],
    [ undefined, 1 ]
  ])

  expect(G.pipe(
    [ 7, 4, 5 ],
    G.diff([ 4, 8, 1, 5 ], Cmp.reversed(Cmp.number)),
    G.array,
  )).toEqual([
    [ undefined, 8 ],
    [ 7, undefined ],
    [ 5, 5 ],
    [ 4, 4 ],
    [ undefined, 1 ]
  ])

})
