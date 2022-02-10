import * as G from './index.js'

test('pipe0', () => {
  const f = G.pipe0(
    G.map((_: number) => _ * 2),
    G.map(_ => String(_))
  )
  expect(G.array(f([ 3, 4, 5 ]))).toEqual([ '6', '8', '10' ])
})
