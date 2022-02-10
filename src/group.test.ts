import * as G from './index.js'

test('group', () => {
  const values = [
    { key: 1, value: 'a' },
    { key: '1', value: 'b' },
    { key: 1, value: 'c' }
  ]
  expect(G.pipe(values, G.group(_ => _.key), G.array)).toEqual([
    [ 1, [
      { key: 1, value: 'a' },
      { key: 1, value: 'c' }
    ] ],
    [ '1', [
      { key: '1', value: 'b' }
    ] ]
  ])
})
