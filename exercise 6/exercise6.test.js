const multiplicationTable = require('./exercise6')

test('if multiplier is undefined then multiplicador is equal to 10', () => {
  expect(multiplicationTable(5, undefined)).toEqual([
    0,
    5,
    10,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50
  ])
})

test('multiplicando is 7 and multiplicador 7', () => {
  expect(multiplicationTable(7, 7)).toEqual([0, 7, 14, 21, 28, 35, 42, 49])
})
