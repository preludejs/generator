import * as G from './index.js'

test('on conflict throws', () => {
  expect(() => G.pipe(
    [ 1, 2, 2, 3 ],
    G.record(String)
  )).toThrow('duplicate key 2')
})

test('on conflict first wins', () => {
  expect(G.pipe(
    [ 1, 21, 22, 3 ],
    G.record(_ => String(_)[0], G.record.firstWins)
  )).toEqual({
    '1': 1,
    '2': 21,
    '3': 3
  })
})

test('on conflict last wins', () => {
  expect(G.pipe(
    [ 1, 21, 22, 3 ],
    G.record(_ => String(_)[0], G.record.lastWins)
  )).toEqual({
    '1': 1,
    '2': 22,
    '3': 3
  })
})
