import * as G from './index.js'

test('42 fibonacci', () => {
  expect(G.pipe(
    G.fibonacci(),
    G.take(42),
    G.array
  )).toMatchSnapshot()
})
