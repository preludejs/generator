import * as G from './index.js'

test('42 composites', () => {
  expect(G.pipe(
    G.composites(),
    G.take(42),
    G.array
  )).toMatchSnapshot()
})
