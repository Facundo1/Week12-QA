const sum = require('./exercise2')

test('sum 10 + 10 is equal to 20', () => {
  expect(sum(10, 10)).toBe(20)
})
test('sum 25 + 30 is not equal to 60', () => {
  expect(sum(25, 30)).not.toBe(60)
})
