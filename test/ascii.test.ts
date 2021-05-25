import * as G from '../'

test('ascii', () => {
  expect(G.array(G.ascii('a', 'd'))).toEqual([
    'a', 'b', 'c', 'd'
  ])
})
