type Defined<T> = T extends undefined ? never : T;

const defined =
  function *<T>(g: Iterable<T>): Generator<Defined<T>> {
    for (const _ of g) {
      if (typeof _ !== 'undefined') {
        yield _ as Defined<T>
      }
    }
  }

export default defined
