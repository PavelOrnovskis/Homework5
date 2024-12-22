import { lit } from '../src/lit'

test('Check Lithuania prefix and number', () => {
  const actualResult = lit()

  expect(actualResult.startsWith('LTU-')).toBe(true)
  expect(actualResult.length).toBe(8)
  expect(/LTU-\d{4}/.test(actualResult)).toBe(true)
})
