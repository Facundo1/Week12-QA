const multiplication = require('./exercise4')

test('multiplication 5 * 4 is equal to 20', () => {
  expect(multiplication(5, 4)).toBe(20)
})

test('multiplication 7 * 7 is not equal to 53', () => {
  expect(multiplication(7, 7)).not.toBe(53)
})
