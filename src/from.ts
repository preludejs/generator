const from =
  function* (first: number, step = 1): Generator<number> {
    for (let value = first; ; value += step) {
      yield value
    }
  }

export default from
