import lift from './lift.js'

type TOf<G> = G extends Iterator<infer T> ? T : G extends Iterable<infer T> ? T : never

const concat =
  function *<Gs extends (Iterator<unknown> | Iterable<unknown>)[]>(...gs: Gs): Generator<TOf<Gs[number]>> {
    for (const g of gs) {
      yield *lift(g) as Generator<TOf<Gs[number]>>
    }
  }

export default concat
