function gcdOfStrings(str1, str2) {
  var divisor = "";
  var counter = {};
  for (var i = 0; i < str2.length; i++) {
    divisor += str2[i];
    if (divisorEqualsStr(divisor, str2)) {
      if (divisorEqualsStr(divisor, str1)) {
        if (counter[divisor] === undefined) {
          counter[divisor] = 1;
        } else {
          counter[divisor]++;
        }
      }
    }
  }
  var divisors = Object.keys(counter);
  return divisors.length
    ? divisors.reduce(function (a, b) {
        return counter[a] > counter[b] ? a : b;
      })
    : "";
}
function divisorEqualsStr(divisor, string) {
  var combinedStr = "";
  while (combinedStr.length < string.length) {
    combinedStr += divisor;
  }
  return combinedStr === string;
}
