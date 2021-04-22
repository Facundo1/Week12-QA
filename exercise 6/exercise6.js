//6
const multiplicationTable = (multiplying, multiplier) => {
  if (multiplier === undefined) return (multiplier = 10)
  for (i = 0; i <= multiplier; i++)
    return multiplying + ' x', i + ' = ', multiplying * i
}

module.exports = multiplicationTable
