import * as G from './index.js'

test('repeat', () => {
  expect(G.array(G.pipe1(
    G.repeat(3, Math.random),
    G.map(_ => typeof _)
  ))).toEqual([
    'number', 'number', 'number'
  ])
})

test('distinct', () => {
  const _s = G.array(G.repeat(2, () => ({})))
  expect(_s).toHaveLength(2)
  expect(_s[0]).not.toBe(_s[1])
})
