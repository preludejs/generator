import type GeneratorResult from './generator-result'

const chain =
  function *<Gs extends Generator<unknown>[]>(...gs: Gs): Generator<GeneratorResult<Gs[number]>> {
    for (const g of gs as Generator<GeneratorResult<Gs[number]>>[]) {
      yield *g
    }
  }

export default chain
