import * as G from './index.js'

test('type predicate', () => {
  const nonnullish =
    <T>(value: T): value is NonNullable<T> =>
      value != null
  const xs = G.pipe(
    [ 1, undefined ],
    G.filter(nonnullish),
    G.array
  )
  const ys: number[] = xs
  expect(ys).toEqual([ 1 ])
})
