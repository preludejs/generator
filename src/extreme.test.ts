import * as G from './index.js'

test('extreme', () => {
  const values = [ 6, 3, 1, 8, 2, 4, 5, 7 ]
  const f = (a: number, b: number) => a - b
  expect(G.pipe(
    values,
    G.extreme(f)
  )).toEqual({
    min: values.slice().sort(f)[0],
    max: values.slice().sort(f).reverse()[0]
  })
})
