function reverseVowels(s) {
  var vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
  };
  var vowelsStr = "";
  for (var i = 0; i < s.length; i++) {
    if (vowels[s[i]]) vowelsStr += s[i];
  }
  var counter = vowelsStr.length - 1;
  var newStr = "";
  for (var i = 0; i < s.length; i++) {
    if (vowels[s[i]]) {
      newStr += vowelsStr[counter];
      counter--;
    } else {
      newStr += s[i];
    }
  }
  return newStr;
}
