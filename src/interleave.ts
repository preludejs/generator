import type { Generated } from './prelude.js'

const interleave =
  function *<Gs extends Generator<unknown>[]>(...gs: Gs): Generator<Generated<Gs[number]>> {
    while (true) {
      const rs = gs.map(_ => _.next())
      if (rs.some(_ => _.done)) {
        break
      }
      for (const r of rs) {
        yield r.value
      }
    }
  }

export default interleave
