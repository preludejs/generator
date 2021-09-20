import * as G from '../index.js'

test('step', () => {
  expect(G.array(G.step(2, G.charRange('a', 'z')))).toEqual([
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
