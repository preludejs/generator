import * as G from './index.js'

test('grouped', () => {
  const values = [
    { key: 1, value: 'a' },
    { key: '1', value: 'b' },
    { key: 1, value: 'c' }
  ]
  const grouped = G.pipe(values, G.grouped(_ => _.key))
  expect(grouped instanceof Map).toBe(true)
  expect(grouped.size).toBe(2)
  expect(Array.from(grouped.entries())).toEqual([
    [ 1, [
      { key: 1, value: 'a' },
      { key: 1, value: 'c' }
    ] ],
    [ '1', [
      { key: '1', value: 'b' }
    ] ]
  ])
})
