import of from './of.js'
import take from './take.js'
import type PeekableIterator from './peekable-iterator.js'

const peekable =
  <T>(g: Iterable<T>): PeekableIterator<T> => {
    const queue: T[] = []
    const g_ = of(g)
    return {
      [Symbol.iterator]() {
        return this
      },
      next() {
        if (queue.length > 0) {
          return { done: false, value: queue.shift() as T }
        }
        return g_.next()
      },
      peek(index = 0): IteratorResult<T> {
        if (index < 0 || !Number.isSafeInteger(index)) {
          throw new TypeError(`Invalid index value ${index}.`)
        }
        queue.push(...take(index - queue.length + 1, g_, false))
        return index < queue.length ?
          { value: queue[index] } :
          { done: true, value: undefined }
      }
    }
  }

export default peekable