import * as G from '../index.js'

test('interleave', () => {
  const g = G.interleave(
    G.cycle(G.range(0, 9)),
    G.cycle(G.charRange('a', 'z')),
    G.cycle(G.charRange('A', 'Z'))
  )
  expect(G.array(G.take(3 * 5, g))).toEqual([
    0, 'a', 'A',
    1, 'b', 'B',
    2, 'c', 'C',
    3, 'd', 'D',
    4, 'e', 'E'
  ])
})
