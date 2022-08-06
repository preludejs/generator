/** @yields mapped values. */
const map =
  <T, R>(mapping: (value: T, index: number) => R) =>
    function* (values: Iterable<T>) {
      let index = 0
      for (const value of values) {
        yield mapping(value, index++)
      }
    }

export default map
