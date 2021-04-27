const potency = require('./exercise7')

describe('all potency tests', () => {
  test('multiplication 5³ is greater than 115', () => {
    expect(potency(5, 3)).toBeGreaterThan(115)
  })

  test('multiplication 7³ is less than 500', () => {
    expect(potency(7, 3)).toBeLessThan(500)
  })
})
