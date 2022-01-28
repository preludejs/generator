const fibonacci =
  function* (a = 0, b = 1) {
    while (true) {
      [ a, b ] = [ b, a + b]
      yield a
    }
  }

export default fibonacci
