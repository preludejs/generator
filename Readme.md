# Generator module

# Usage

```bash
npm i -E @prelude/generator
```

```ts
import * as G from '@prelude/generator'

console.log(G.take(10, G.cycle(G.ascii('a', 'c'))))
```

# Functions

Name       | Finite input iterator
-----------|--------------------------------
all        | yes
array      | yes
ascii      | -
chain      | no
compact    | yes
consume    | no
cycle      | no
filter     | no
interleave | no
join       | yes
map        | no
max        | yes
min        | yes
of         | no
pair       | no
partition  | yes
peekable   | no
range      | -
reduce     | yes
repeat     | -
rotate     | no
skip       | no
some       | no
sort       | yes
takeWhile  | no
take       | no
unique     | no
while      | no
withIndex  | no
zipRecords | no
zip        | no

# License

```
MIT License

Copyright 2021 Mirek Rusin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
