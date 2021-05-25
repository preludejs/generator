import type GeneratorResult from './generator-result'

const zip =
  function *<Gs extends Generator<unknown>[]>(...gs: Gs): Generator<{ [K in keyof Gs]: GeneratorResult<Gs[K]> }> {
    while (true) {
      const rs = gs.map(_ => _.next())
      if (rs.some(_ => _.done)) {
        break
      }
      yield rs.map(_ => _.value) as { [K in keyof Gs]: GeneratorResult<Gs[K]> }
    }
  }

export default zip
