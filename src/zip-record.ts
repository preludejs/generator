import type { Generated } from './prelude.js'

const zipRecord =
  function* <Gs extends { [key: string]: Generator<unknown> }>(gs: Gs): Generator<{ [K in keyof Gs]: Generated<Gs[K]> }> {
    const keys = Object.keys(gs)
    while (true) {
      const results = keys.map(key => gs[key].next())
      if (results.some(_ => _.done)) {
        break
      }
      yield Object.fromEntries(keys.map((_, i) => [ _, results[i].value ])) as { [K in keyof Gs]: Generated<Gs[K]> }
    }
  }

export default zipRecord
