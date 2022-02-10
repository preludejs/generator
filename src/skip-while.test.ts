import * as G from './index.js'

test('skip while', () => {
  let n = 0
  expect(G.pipe(G.from(1), G.skipWhile(_ => {
    n++
    return _ < 10
  }), G.take(3), G.array)).toEqual([
    10,
    11,
    12
  ])
  expect(n).toBe(10)
})
