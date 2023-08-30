function reverseWords(s) {
  var word = "";
  var space = " ";
  var reversedStr = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === space) {
      if (word) reversedStr.unshift(word);
      word = "";
    } else {
      word += s[i];
      if (i === s.length - 1) {
        reversedStr.unshift(word);
      }
    }
  }
  return reversedStr.join(" ");
}
