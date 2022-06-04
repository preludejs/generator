/** @yields values in n-length batches, last batch can have length between 1 and n. */
const batch =
  (n: number) =>
    function* <T>(values: Iterable<T>): Generator<T[]> {
      let range: T[] = []
      for (const value of values) {
        if (range.push(value) >= n) {
          yield range
          range = []
        }
      }
      if (range.length > 0) {
        yield range
      }
    }

export default batch
