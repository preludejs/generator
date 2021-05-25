import type { Cmp } from './cmp'

const sort =
  function *<T>(cmp: Cmp<T>, ...gs: Iterable<T>[]): Generator<T> {
    const values = [] as T[]
    for (const g of gs) {
      for (const value of g) {
        values.push(value)
      }
    }
    values.sort(cmp)
    for (const value of values) {
      yield value
    }
  }

export default sort
