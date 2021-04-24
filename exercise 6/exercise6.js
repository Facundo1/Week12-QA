//6
const multiplicationTable = (multiplying, multiplier) => {
  if (multiplier === undefined) multiplier = 10
  let table = []
  for (let i = 0; i <= multiplier; i++) {
    table.push(multiplying * i)
  }
  return table
}

module.exports = multiplicationTable
