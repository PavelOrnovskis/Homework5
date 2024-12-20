import { lit } from '../src/lit'

test('Check Lithuania prefix and number', () => {
    const actualResult = lit()
    const expectedResult = 'LTU-3700'

    expect(actualResult).toBe(expectedResult)
    expect(actualResult.startsWith('LTU-')).toBe(true)
    expect(actualResult.length).toBe(8)
    expect(/LTU-\d{4}/.test(actualResult)).toBe(true)
})
