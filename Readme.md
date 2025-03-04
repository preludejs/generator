[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=preludejs_generator&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=preludejs_generator)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=preludejs_generator&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=preludejs_generator)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=preludejs_generator&metric=bugs)](https://sonarcloud.io/summary/new_code?id=preludejs_generator)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=preludejs_generator&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=preludejs_generator)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=preludejs_generator&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=preludejs_generator)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=preludejs_generator&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=preludejs_generator)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=preludejs_generator&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=preludejs_generator)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=preludejs_generator&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=preludejs_generator)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=preludejs_generator&metric=coverage)](https://sonarcloud.io/summary/new_code?id=preludejs_generator)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=preludejs_generator&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=preludejs_generator)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=preludejs_generator&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=preludejs_generator)

---

# Generator module

A TypeScript library for working with iterables and generators, providing a rich set of utility functions for functional programming patterns.

## Installation

```bash
npm i -E @prelude/generator
```

## Usage

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

## API Reference

### Functions

- [`append`](./src/append.ts) - Creates a generator that yields all values from the source iterable followed by all values from appendValues.
- [`areUnique`](./src/are-unique.ts) - Checks if all elements in the iterable are unique according to their values or a derived key.
- [`array`](./src/array.ts) - Converts an iterable to an array.
- [`at`](./src/at.ts) - Retrieves the element at the specified index in an iterable.
- [`batch`](./src/batch.ts) - Creates a generator that yields arrays of values from the source iterable, grouped into batches of specified size.
- [`bigproduct`](./src/bigproduct.ts) - Multiplies all numeric values in an iterable using BigInt for precise large number arithmetic.
- [`bigsum`](./src/bigsum.ts) - Sums all numeric values in an iterable using BigInt for precise large number arithmetic.
- [`cartesianProduct`](./src/cartesian-product.ts) - Creates a generator that yields all possible combinations of elements from multiple iterables.
- [`charRange`](./src/char-range.ts) - Creates a generator that yields characters in a range from start to end character.
- [`combinations`](./src/combinations.ts) - Creates a generator that yields all possible combinations of a specific length from an iterable.
- [`compact`](./src/compact.ts) - Creates a generator that yields all non-nullish values from the source iterable.
- [`composites`](./src/composites.ts) - Creates a generator that yields composite numbers (non-prime numbers greater than 1).
- [`concat`](./src/concat.ts) - Creates a generator that yields all values from multiple iterables in sequence.
- [`consume`](./src/consume.ts) - Exhausts an iterable by iterating through all its values without returning anything.
- [`count`](./src/count.ts) - Returns the number of elements in an iterable.
- [`cycle`](./src/cycle.ts) - Creates a generator that yields the elements of an iterable repeatedly, cycling through them indefinitely.
- [`defined`](./src/defined.ts) - Creates a generator that yields only the defined values from the source iterable.
- [`diff`](./src/diff.ts) - Creates a generator that yields elements from the first iterable that are not present in the second iterable.
- [`every`](./src/every.ts) - Checks if all elements in an iterable satisfy a given predicate.
- [`extend`](./src/extend.ts) - Creates a generator that yields elements from the source followed by a repeating value until a specified length is reached.
- [`extreme`](./src/extreme.ts) - Finds the extreme (min/max) value in an iterable based on a comparison function.
- [`fibonacci`](./src/fibonacci.ts) - Creates a generator that yields the Fibonacci sequence.
- [`filter`](./src/filter.ts) - Creates a generator that yields only elements from an iterable that pass a predicate test.
- [`findIndex`](./src/find-index.ts) - Returns the index of the first element in an iterable that satisfies a predicate.
- [`find`](./src/find.ts) - Returns the first element in an iterable that satisfies a predicate, or throws if none found.
- [`first`](./src/first.ts) - Returns the first element of an iterable, or throws if the iterable is empty.
- [`flatMap`](./src/flat-map.ts) - Creates a generator that maps each element using a function and flattens the result.
- [`flatten`](./src/flatten.ts) - Creates a generator that flattens nested iterables into a single level.
- [`fork`](./src/fork.ts) - Creates multiple independent iterators from a single iterable source.
- [`from`](./src/from.ts) - Creates a generator from various input types.
- [`generator`](./src/generator.ts) - Creates a stateful generator function from an initialization function.
- [`groupMap`](./src/group-map.ts) - Groups elements of an iterable by keys derived from a mapping function.
- [`groupObject`](./src/group-object.ts) - Groups elements of an iterable by keys derived from a mapping function into an object.
- [`group`](./src/group.ts) - Creates a generator that yields arrays of consecutive elements that share the same key.
- [`interleave`](./src/interleave.ts) - Creates a generator that alternates values from multiple iterables.
- [`joinStrings`](./src/join-strings.ts) - Joins string values from an iterable with a separator.
- [`last`](./src/last.ts) - Returns the last element of an iterable, or throws if the iterable is empty.
- [`length`](./src/length.ts) - Returns the number of elements in an iterable.
- [`lift`](./src/lift.ts) - Converts a function that works on values to one that works on iterables.
- [`map`](./src/map.ts) - Creates a generator that transforms each value in an iterable using a mapping function.
- [`max`](./src/max.ts) - Returns the maximum value in an iterable according to a comparison function.
- [`maybeFind`](./src/maybe-find.ts) - Returns the first element in an iterable that satisfies a predicate, or undefined if none found.
- [`maybeFirst`](./src/maybe-first.ts) - Returns the first element of an iterable, or undefined if the iterable is empty.
- [`maybeLast`](./src/maybe-last.ts) - Returns the last element of an iterable, or undefined if the iterable is empty.
- [`maybeSingle`](./src/maybe-single.ts) - Returns the single element if the iterable contains exactly one element, or undefined otherwise.
- [`memoized`](./src/memoized.ts) - Creates a generator that caches results of an input generator for reuse.
- [`min`](./src/min.ts) - Returns the minimum value in an iterable according to a comparison function.
- [`of`](./src/of.ts) - Creates a generator that yields the provided values.
- [`pair`](./src/pair.ts) - Creates a generator that yields pairs of adjacent elements from an iterable.
- [`permutations`](./src/permutations.ts) - Creates a generator that yields all possible arrangements of elements from an iterable.
- [`pipe`](./src/pipe.ts) - Passes a value through a series of transformations.
- [`pipe0`](./src/pipe0.ts) - Creates a pipeline of transformations to be applied to a value later.
- [`prelude`](./src/prelude.ts) - Exports helpers for integrating with @prelude libraries.
- [`prepend`](./src/prepend.ts) - Creates a generator that yields values from prependValues followed by all values from the source iterable.
- [`primeFactors`](./src/prime-factors.ts) - Creates a generator that yields all prime factors of a number.
- [`primes`](./src/primes.ts) - Creates a generator that yields prime numbers.
- [`product`](./src/product.ts) - Multiplies all numeric values in an iterable.
- [`properDivisors`](./src/proper-divisors.ts) - Creates a generator that yields all proper divisors of a number.
- [`range`](./src/range.ts) - Creates a generator that yields numbers in a sequence from start to end.
- [`record`](./src/record.ts) - Converts an iterable of key-value pairs into a record object.
- [`recursive`](./src/recursive.ts) - Creates a generator from a recursive function definition.
- [`reduce`](./src/reduce.ts) - Applies a reducer function to each element in an iterable, resulting in a single output value.
- [`reduce1`](./src/reduce1.ts) - Applies a reducer function to elements in a non-empty iterable, using the first element as the initial value.
- [`repeat`](./src/repeat.ts) - Creates a generator that yields a value repeatedly.
- [`retain`](./src/retain.ts) - Creates a generator that keeps only elements that are present in both iterables.
- [`reverse`](./src/reverse.ts) - Creates a generator that yields elements from an iterable in reverse order.
- [`rotate`](./src/rotate.ts) - Creates a generator that rotates elements of an iterable by a specified offset.
- [`single`](./src/single.ts) - Returns the single element if the iterable contains exactly one element, or throws otherwise.
- [`skipWhile`](./src/skip-while.ts) - Creates a generator that skips elements from an iterable as long as a predicate returns true.
- [`skip`](./src/skip.ts) - Creates a generator that skips a specified number of elements from the beginning of an iterable.
- [`some`](./src/some.ts) - Checks if at least one element in an iterable satisfies a given predicate.
- [`sort`](./src/sort.ts) - Creates a generator that yields elements from an iterable in sorted order.
- [`sortedDiff`](./src/sorted-diff.ts) - Creates a generator that yields elements from the first sorted iterable that are not present in the second sorted iterable.
- [`step`](./src/step.ts) - Creates a generator that yields every nth element from an iterable.
- [`sum`](./src/sum.ts) - Sums all numeric values in an iterable.
- [`take`](./src/take.ts) - Creates a generator that yields a specified number of elements from the beginning of an iterable.
- [`tap`](./src/tap.ts) - Creates a generator that applies a side-effect function to each element while yielding the original values.
- [`unique`](./src/unique.ts) - Creates a generator that yields only unique values from an iterable.
- [`unsafeCombinations`](./src/unsafe-combinations.ts) - Creates a generator that yields all possible combinations of a specific length from an array.
- [`unsafePermutations`](./src/unsafe-permutations.ts) - Creates a generator that yields all possible arrangements of elements from an array.
- [`until`](./src/until.ts) - Creates a generator that yields elements from an iterable until a predicate returns true.
- [`while`](./src/while.ts) - Creates a generator that yields elements from an iterable as long as a predicate returns true.
- [`window`](./src/window.ts) - Creates a generator that yields sliding windows of elements from an iterable.
- [`withIndex`](./src/with-index.ts) - Creates a generator that yields pairs of [index, value] for each element in an iterable.
- [`yield`](./src/yield.ts) - Creates a generator that yields a single value.
- [`zipRecord`](./src/zip-record.ts) - Creates a generator that combines elements from iterables into record objects using provided keys.
- [`zip`](./src/zip.ts) - Creates a generator that combines corresponding elements from multiple iterables.

## License

```
MIT License

Copyright 2021 Mirek Rusin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
