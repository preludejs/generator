import type { Generated } from './prelude.js'

const zip =
  function* <Gs extends Generator<unknown>[]>(...valuesArray: Gs): Generator<{ [K in keyof Gs]: Generated<Gs[K]> }> {
    while (true) {
      const results = valuesArray.map(values => values.next())
      if (results.some(result => result.done)) {
        break
      }
      yield results.map(result => result.value) as { [K in keyof Gs]: Generated<Gs[K]> }
    }
  }

export default zip
