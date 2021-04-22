//5
const division = (dividend, divider) => {
  if (divider === 0) {
    return 'cannot be divided by zero'
  } else {
    return dividend / divider
  }
}

module.exports = division
