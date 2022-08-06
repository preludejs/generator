import * as G from './index.js'

const t =
  (n: number, ds: number[]) =>
    expect(G.pipe(
      G.properDivisors(n),
      G.array
    )).toEqual(ds)

test('simple', () => {
  t(0, [])
  t(1, [])
  t(2, [1])
  t(3, [1])
  t(4, [1, 2])
  t(28, [1, 2, 4, 7, 14])
})
