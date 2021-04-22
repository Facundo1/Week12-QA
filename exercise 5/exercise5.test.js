const division = require('./exercise5')

test('division 5 / 0 is not equal to 0', () => {
  expect(division(5, 0)).not.toBe('cannot be divided by zero')
})

test('division 10 / 2 is equal to 5', () => {
  expect(division(10, 2)).toBe(5)
})

test('division 150 / 2 is equal to 75', () => {
  expect(division(150, 2)).toBe(75)
})
