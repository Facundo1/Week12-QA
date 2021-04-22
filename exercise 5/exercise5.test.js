const division = require('./exercise5')

test('division 5 / 0 is undefined', () => {
  expect(division(5, 0)).toBe('cannot be divided by zero')
})

test('division 10 / 2 is not equal to 7', () => {
  expect(division(10, 2)).not.toBe(7)
})

test('division 150 / 2 is equal to 75', () => {
  expect(division(150, 2)).toBe(75)
})
