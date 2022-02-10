import * as G from './index.js'

test.each([
  [0],
  [42],
  [100],
  [Number.MAX_SAFE_INTEGER]
])('prime factors of %i', _ => {
  expect(G.pipe(
    G.primeFactors(_),
    G.array
  )).toMatchSnapshot()
})
