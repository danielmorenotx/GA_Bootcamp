// sum.test.js
import { expect, test } from 'vitest'

const sum = (a, b) => {
  return a + b;
}

test(' 1 + 2 equals 3', () => {
  expect(sum(1, 2)).toBe(3)
})