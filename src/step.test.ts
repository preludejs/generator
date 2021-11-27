import * as G from './index.js'

test('step', () => {
  expect(G.array(G.pipe1(G.charRange('a', 'z'), G.step(2)))).toEqual([
    'a',
    'c',
    'e',
    'g',
    'i',
    'k',
    'm',
    'o',
    'q',
    's',
    'u',
    'w',
    'y'
  ])
})
