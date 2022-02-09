import type { Generated } from './prelude.js'

const zipRecord =
  function* <Gs extends { [key: string]: Generator<unknown> }>(gs: Gs): Generator<{ [K in keyof Gs]: Generated<Gs[K]> }> {
    const keys = Object.keys(gs)
    while (true) {
      const rs = keys.map(_ => gs[_].next())
      if (rs.some(_ => _.done)) {
        break
      }
      yield Object.fromEntries(keys.map((_, i) => [ _, rs[i].value ])) as { [K in keyof Gs]: Generated<Gs[K]> }
    }
  }

export default zipRecord
