import type * as Cmp from '@prelude/cmp'

const sort =
  <T>(cmp: Cmp.t<T>) =>
    function* (g: Iterable<T>): Generator<T> {
      const values = [] as T[]
      for (const value of g) {
        values.push(value)
      }
      values.sort(cmp)
      for (const value of values) {
        yield value
      }
    }

export default sort
