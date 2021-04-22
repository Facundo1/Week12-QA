const nested = require('./exercise8')

test('square 8² + 9² is equal to 145', () => {
  expect(nested(8, 9)).toEqual(145)
})

test('square 6² + 4² is greater or equal to 52', () => {
  expect(nested(6, 4)).toBeGreaterThanOrEqual(52)
})
