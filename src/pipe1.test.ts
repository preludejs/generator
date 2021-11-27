import * as G from './index.js'

test('pipe', () => {
  const double = G.map<number, number>(_ => _ * 2)
  const itemize: <T>(g: Iterable<T>) => Generator<{ item: T }> =
    G.map(_ => ({ item: _ }))
  const xs = G.pipe1(
    [ 1, 2, 3 ],
    double,
    itemize,
    G.array
  )
  expect(xs).toEqual([
    { item: 2 },
    { item: 4 },
    { item: 6 }
  ])
})

test('decorate', () => {

  const withHex =
    function* <T extends { value: number }>(g: Iterable<T>): Generator<T & { hex: string }> {
      for (const _ of g) {
        yield { ..._, hex: _.value.toString(16) }
      }
    }

  const withEven =
    function* <T extends { value: number }>(g: Iterable<T>): Generator<T & { even: boolean }> {
      for (const _ of g) {
        yield { ..._, even: _.value % 2 === 0 }
      }
    }

  const input: { value: number, test?: 'yes' }[] = [
    { value: 1 },
    { value: 17 },
    { value: 10, test: 'yes' }
  ]
  const values = G.pipe1(input, withHex, withEven, G.array)

  expect(values).toEqual([
    { value: 1, hex: '1', even: false },
    { value: 17, hex: '11', even: false },
    { value: 10, hex: 'a', even: true, test: 'yes' }
  ])

})
