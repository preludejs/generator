import type { Generated } from './prelude.js'

const interleave =
  function* <Gs extends Generator<unknown>[]>(...valuesArray: Gs): Generator<Generated<Gs[number]>> {
    while (true) {
      const results = valuesArray.map(_ => _.next())
      if (results.some(_ => _.done)) {
        break
      }
      for (const result of results) {
        yield result.value
      }
    }
  }

export default interleave
