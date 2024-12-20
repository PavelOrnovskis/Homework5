import { lat } from '../src/lat'

test('Check Latvia prefix and number', () => {
    const actualResult = lat()
    const expectedResult = 'LVA-3710'

    expect(actualResult).toBe(expectedResult)
    expect(actualResult.startsWith('LVA-')).toBe(true)
    expect(actualResult.length).toBe(8)
    expect(/LVA-\d{4}/.test(actualResult)).toBe(true)
})
