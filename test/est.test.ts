import { est } from '../src/est'

test('Check Estonia prefix and number', () => {
    const actualResult = est()
    const expectedResult = 'EST-3720'

    expect(actualResult).toBe(expectedResult)
    expect(actualResult.startsWith('EST-')).toBe(true)
    expect(actualResult.length).toBe(8)
    expect(/EST-\d{4}/.test(actualResult)).toBe(true)
})
