//8
const nested = (a, b) => {
  function square(x) {
    return x * x
  }
  return square(a) + square(b)
}
module.exports = nested
