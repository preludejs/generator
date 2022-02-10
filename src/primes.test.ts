import * as G from './index.js'

test('42 primes', () => {
  expect(G.pipe(
    G.primes(),
    G.take(42),
    G.array
  )).toMatchSnapshot()
})
