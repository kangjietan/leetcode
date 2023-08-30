function gcdOfStrings(str1: string, str2: string): string {
  let divisor = "";
  const counter: { [key: string]: number } = {};
  for (let i = 0; i < str2.length; i++) {
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

  const divisors = Object.keys(counter);
  return divisors.length
    ? divisors.reduce((a, b) => (counter[a] > counter[b] ? a : b))
    : "";
}

function divisorEqualsStr(divisor: string, string: string) {
  let combinedStr = "";
  while (combinedStr.length < string.length) {
    combinedStr += divisor;
  }
  return combinedStr === string;
}
