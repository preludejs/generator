import reduce from './reduce.js'

const reduce1 =
  <T>(reduction: (result: T, value: T, index: number) => T) =>
    (values: Iterable<T>): T => {
      const iterator = values[Symbol.iterator]()
      const first = iterator.next()
      if (first.done) {
        throw new Error('reduce1: empty iterator')
      }
      return reduce(reduction, first.value)(values)
    }

export default reduce1
