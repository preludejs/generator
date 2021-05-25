import array from './array'
import take from './take'

const rotate =
  function *<T>(n: number, g: Generator<T>): Generator<T> {
    const queue = array(take(n, g))
    yield *g
    for (let i = 0; i < queue.length; i++) {
      yield queue[i]
    }
  }

export default rotate
