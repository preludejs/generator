/** @returns infinite generator of numbers starting from `first` with provided `step` (default to 1). */
const from =
  function* (first = 0, step = 1): Generator<number> {
    for (let value = first; ; value += step) {
      yield value
    }
  }

export default from
