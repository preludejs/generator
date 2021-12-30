import * as G from './index.js'

test('memoized', () => {

  const generated: number[] = []

  const g =
    function* () {
      for (let i = 0; i < 10; i++) {
        generated.push(i)
        yield i
      }
    }

  const g_ = G.memoized(g())

  const expected = G.array(G.range(0, 9))
  expect(G.array(g_())).toEqual(expected)
  expect(G.array(g_())).toEqual(expected)
  expect(generated).toEqual(expected)
})
