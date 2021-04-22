const leftZero = require('./exercise9')

test('Returns a string with leading zeros, the result is 00030', () => {
  expect(leftZero(30, 5)).toEqual('00030')
})

test('Returns a string with leading zeros, the result is 0000000130', () => {
  expect(leftZero(152, 10)).toEqual('0000000152')
})
