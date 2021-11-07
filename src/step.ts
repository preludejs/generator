import lift from './lift.js'

const step =
  function* <T>(step_: number, g: Iterator<T> | Iterable<T>): Generator<T> {
    let i = 0
    for (const _ of lift(g)) {
      if (i++ % step_ === 0) {
        yield _
      }
    }
  }

export default step
