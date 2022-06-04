/**
 * @yields window of values.
 *
 * @param n window length.
 * @param yieldShorter should yield shorter range if collection is shorter than window (default false).
 */
const window =
  <T>(n: number, yieldShorter = false) =>
    function* (values: Iterable<T>): Generator<T[]> {
      const range: T[] = []
      for (const value of values) {
        switch (range.push(value)) {
          case n + 1:
            range.shift()
          case n:
            yield range.slice()
        }
      }
      if (range.length < n && yieldShorter) {
        yield range
      }
    }

export default window
