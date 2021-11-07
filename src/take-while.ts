import type PeekableIterator from './peekable-iterator.js'

const takeWhile =
  function *<T>(f: (value: T) => boolean, g: PeekableIterator<T>): Generator<T> {
    while (true) {
      const peek = g.peek()
      if (peek.done || !f(peek.value)) {
        break
      }
      const next = g.next()
      if (next.done) {
        break
      }
      yield next.value
    }
  }

export default takeWhile
