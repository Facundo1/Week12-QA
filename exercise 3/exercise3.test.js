const sum = require('./exercise3')

test('sub 20 - 30 is equal to -10', () => {
  expect(sum(20, 30)).toBe(-10)
})
test('sub 20 - 20 is equal to 5', () => {
  expect(sum(20, 20)).not.toBe(0)
})
