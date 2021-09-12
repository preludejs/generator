import range_ from './range.js'

export const range =
  (start: number, end: number): Iterable<number> => ({
    [Symbol.iterator]: () => range_(start, end)
  })
