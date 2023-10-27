import * as G from './index.js'

test('groupObject', () => {
  expect(G.pipe(G.range(1, 10), G.groupObject(_ => _ % 2 === 0 ? 'even' : 'odd'))).toEqual({
    even: [ 2, 4, 6, 8, 10 ],
    odd: [ 1, 3, 5, 7, 9 ]
  })
})
