function compress(chars) {
  var i = 0;
  var index = 0;
  while (i < chars.length) {
    var j = i;
    var currentChar = chars[i];
    while (currentChar === chars[j] && j < chars.length) {
      j++;
    }
    var num = j - i;
    chars[index] = currentChar;
    index++;
    if (num > 1) {
      var numStr = num + "";
      for (var k = 0; k < numStr.length; k++) {
        chars[index] = numStr[k];
        index++;
      }
    }
    i = j;
  }
  return index;
}
