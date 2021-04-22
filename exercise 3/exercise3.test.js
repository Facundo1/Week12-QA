const substract = require('./exercise3')

test('sub 20 - 30 is equal to -10', () => {
  expect(substract(20, 30)).toBe(-10)
})
test('sub 20 - 20 is equal to 5', () => {
  expect(substract(20, 20)).not.toBe(10)
})
