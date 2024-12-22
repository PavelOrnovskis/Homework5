import { lat } from '../src/lat'

test('Check Latvia prefix and number', () => {
  const actualResult = lat()

  expect(actualResult.startsWith('LVA-')).toBe(true)
  expect(actualResult.length).toBe(8)
  expect(/LVA-\d{4}/.test(actualResult)).toBe(true)
})
