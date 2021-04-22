const multiplicationTable = require('./exercise6')

test('multiplication Table 2 / 0 is equal to 0', () => {
  expect(multiplicationTable(undefined)).toBe(10)
})

test('multiplication Table 7 to 7 is equal to 0, 7, 14, 21, 28, 35, 42, 49', () => {
  expect(multiplicationTable(7, 7)).toBe(0, 7, 14, 21, 28, 35, 42, 49)
})
