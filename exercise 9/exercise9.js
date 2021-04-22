//9
const leftZero = (num, totalLength) => {
  var numStr = num.toString()
  var numZeros = totalLength - numStr.length
  for (var i = 1; i <= numZeros; i++) {
    numStr = '0' + numStr
  }
  return numStr
}

module.exports = leftZero
