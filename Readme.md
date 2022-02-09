# Generator module

* `areUnique: <T, U>(g: Iterable<T>, f?: (value: T) => U) => boolean`

  Returns `true` if iterable has unique elements, `false` otherwise.

  Optionally mapping function from element to same-value equality key can be provided.

* `array: <T>(g: Iterable<T>) => T[]`

  Returns an array from iterable.

* `bigproduct: (g: Iterable<bigint>) => bigint`

  Returns product of iterable elements.

* `bigsum: (g: Iterable<bigint>) => bigint`

  Returns sum of iterable elements.

* `cartesianProduct: <T, U extends Iterable<unknown>>(g?: U) => (h: Iterable<T>) => Generator<[T, U extends undefined ? T : Iterated<U>], any, unknown>`

  Yields cartesian product pairs.

* `charRange: (first: string, last: string) => Generator<string, any, unknown>`

  Yields characters from `first` to `last` inclusive.

* `combinations: <T>(k?: number) => (g: Iterable<T>) => Generator<T[], any, unknown>`

  Yields k-element combinations.

* `compact: <T>(g: Iterable<T>) => Generator<NonNullable<T>, any, unknown>`

  Yields non-nullish elements.

  See defined for filtering out `undefined` elements only.

* `composites: () => Generator<number, void, unknown>`

  Yields non-prime integers.

* `concat: <Gs extends Iterable<unknown>[]>(...gs: Gs) => Generator<Iterated<Gs[number]>, any, unknown>`

  Yields values from provided iterables.

* `consume: <T>(f?: (value: T) => unknown) => (g: Iterable<T>) => void`

  Performs side effect function on each of iterable value.

* `count: <T>(f?: (value: T, index: number) => boolean) => (g: Iterable<T>) => number`

  Returns number of elements that passed predicate test.

* `cycle: <T>(g: Iterable<T>) => Generator<T, any, unknown>`

  Returns infinite generator cycling through iterable values.

  Empty generator if provided iterable has no elements.

* `defined: <T>(g: Iterable<T>) => Generator<Defined<T>, any, unknown>`

  Yields defined values, `undefined` values are filtered out.

  See compact

* `every: <T>(f: (value: T, index: number) => boolean) => (g: Iterable<T>) => boolean`

  Returns `true` if all elements are passing provided predicate, `false` otherwise.

* `fibonacci: (a?: number, b?: number) => Generator<number, never, unknown>`

  Yields fibonacci sequence.

* `filter: <T>(f: (value: T, index: number) => boolean) => (g: Iterable<T>) => Generator<T, any, unknown>`

  Yields elements passing provided predicate only.

* `find: <T>(f: (value: T, index: number) => boolean) => (g: Iterable<T>) => T`

  Returns first found value that passes provided predicate.

  Throws {Error} if not found.

  See maybeFind for non-throwing variant.

* `first: <T>(g: Iterable<T>) => T`

  Returns first element.

  Throws {Error} if iterable is empty.

  See maybeFirst for non-throwing variant.

* `flatMap: <T, R>(f: (value: T, index: number) => Iterable<R>) => (g: Iterable<T>) => Generator<R, any, unknown>`

  [flatMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)-like combinator.

* `flatten: <T>(gs: Iterable<Iterable<T>>) => Generator<T, any, unknown>`

  Yields flattened values from provided iterable iterables.

* `from: (first: number, step?: number) => Generator<number, any, unknown>`

  Returns infinite generator of numbers starting from `first` with provided `step` (default to 1).

* `group: <T, K extends string | number | boolean | symbol>(f: (value: T) => K) => (g: Iterable<T>) => Generator<[key: K, values: T[]], void, undefined>`

* `grouped: <T, K extends string>(f: (value: T) => K) => (g: Iterable<T>) => Record<K, T[]>`

* `interleave: <Gs extends Generator<unknown, any, unknown>[]>(...gs: Gs) => Generator<Generated<Gs[number]>, any, unknown>`

* `joinStrings: (separator: string) => (g: Iterable<string>) => string`

* `last: <T>(g: Iterable<T>) => T`

* `length: (g: Iterable<unknown>) => number`

* `map: <T, R>(f: (value: T, index: number) => R) => (g: Iterable<T>) => Generator<R, any, unknown>`

* `max: (g: Iterable<number>) => number`

* `maybeFind: <T>(f: (value: T, index: number) => boolean) => (g: Iterable<T>) => T`

  Returns first value passing predicate or `undefined` if not found.

* `maybeLast: <T>(g: Iterable<T>) => T`

* `memoized: <T>(g: Iterable<T>) => { (): Generator<T, any, unknown>; values: T[]; }`

* `min: (g: Iterable<number>) => number`

* `of: <T>(g: Iterator<T, any, undefined> | Iterable<T>) => Generator<T, any, unknown>`

* `pair: <A, B>(a: Generator<A, any, unknown>, b: Generator<B, any, unknown>) => Generator<[A, B], any, unknown>`

* `permutations: <T>(k?: number) => (g: Iterable<T>) => Generator<T[], any, unknown>`

* `pipe: Pipe`

* `pipe1: Pipe1`

* `primeFactors: (value: number) => Generator<[prime: number, exponent: number], any, unknown>`

  Yields naïve prime factors with exponents.

* `primes: { (): Generator<number, any, unknown>; values: number[]; }`

* `product: (g: Iterable<number>) => number`

* `range: (start: number, end: number) => Generator<number, any, unknown>`

  Param start Start of range.

  Param end End of range (inclusive).

  Return `start` to `end` inclusive range number iterator.

* `reduce: <T, U>(f: (result: U, value: T, index: number) => U, initialResult: U) => (g: Iterable<T>) => U`

* `repeat: <T>(n: number, f: () => T) => Generator<T, any, unknown>`

  Repeats `value` returned from `f` function `n` times.

  Example   repeat(3, () => 'yes')

  Example   repeat(5, Math.random)

* `retain: <T = unknown, TReturn = unknown, TNext = unknown>(g: Generator<T, any, unknown>) => Generator<T, TReturn, TNext>`

* `reverse: <T>(g: Iterable<T>) => Generator<T, any, unknown>`

* `rotate: <T>(n: number) => (g: Iterable<T>) => Generator<T, any, unknown>`

* `skip: <T>(n: number) => (g: Generator<T, any, unknown>) => Generator<T, any, unknown>`

* `skipWhile: <T>(f: (value: T, index: number) => boolean) => (g: Iterable<T>) => Generator<T, any, unknown>`

* `some: <T>(f: (value: T, index: number) => boolean) => (g: Iterable<T>) => boolean`

  Returns `true` if at least one `f`-predicate returns `true`, `false` otherwise.

* `sort: <T>(cmp: t<T>) => (g: Iterable<T>) => Generator<T, any, unknown>`

* `step: <T>(n: number) => (g: Iterable<T>) => Generator<T, any, unknown>`

* `sum: (g: Iterable<number>) => number`

* `take: <T>(n: number) => (g: Iterable<T>) => Generator<T, any, unknown>`

* `tap: <T, U>(f: (value: T, index: number, state: U) => U) => (g: Iterable<T>) => Generator<T, any, unknown>`

* `unique: <T>(f: (value: T, index: number) => string | number) => (g: Generator<T, any, unknown>) => Generator<T, any, unknown>`

* `unsafeCombinations: <T>(k?: number) => (g: Iterable<T>) => Generator<T[], any, unknown>`

* `unsafePermutations: <T>(k?: number) => (g: Iterable<T>) => Generator<T[], any, unknown>`

* `until: <T>(f: (value: T, index: number) => boolean) => (g: Iterable<T>) => Generator<T, any, unknown>`

* `while: <T>(f: (value: T, index: number) => boolean) => (g: Iterable<T>) => Generator<T, any, unknown>`

* `window: <T>(n: number) => (g: Iterable<T>) => Generator<T[], any, unknown>`

* `withIndex: <T>(g: Iterable<T>) => Generator<[T, number], any, unknown>`

  Yields an index together with an element.

  Param g Generator.

  Returns Generator yielding an index together with an element.

* `yield: <T>(value: T) => Generator<T, any, unknown>`

* `zip: <Gs extends Generator<unknown, any, unknown>[]>(...gs: Gs) => Generator<{ [K in keyof Gs]: Generated<Gs[K]>; }, any, unknown>`

* `zipRecord: <Gs extends { [key: string]: Generator<unknown, any, unknown>; }>(gs: Gs) => Generator<{ [K in keyof Gs]: Generated<Gs[K]>; }, any, unknown>`

# Usage

```bash
npm i -E @prelude/generator
```

```ts
import * as G from '@prelude/generator'

console.log(G.pipe1(
  G.charRange('a', 'c'),
  G.cycle,
  G.take(10),
  G.array
))
// [
//   'a', 'b', 'c', 'a',
//   'b', 'c', 'a', 'b',
//   'c', 'a'
// ]
```

# License

```
MIT License

Copyright 2021 Mirek Rusin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
