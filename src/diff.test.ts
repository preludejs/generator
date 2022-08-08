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

test('lhs, rhs having different type', () => {
  const xs =
    [ 2, 6, 4 ]
  const ys =
    [ '1', '7', '2', '5' ]
  const zs =
    G.pipe(
      xs,
      G.diff(ys, Cmp.number, { comparableRhs: parseFloat }),
      _ => _,
      G.array,
    )
  expect(zs).toEqual([
    [ undefined, '1' ],
    [ 2, '2' ],
    [ 4, undefined ],
    [ undefined, '5' ],
    [ 6, undefined ],
    [ undefined, '7' ]
  ])

})
