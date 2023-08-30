function reverseWords(s: string): string {
  let word = "";
  let space = " ";
  let reversedStr: string[] = [];
  for (let i = 0; i < s.length; i++) {
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
