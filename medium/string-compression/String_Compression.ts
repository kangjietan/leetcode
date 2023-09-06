function compress(chars: string[]): number {
  let i = 0;
  let index = 0;
  while (i < chars.length) {
    let j = i;
    const currentChar = chars[i];
    while (currentChar === chars[j] && j < chars.length) {
      j++;
    }
    const num = j - i;
    chars[index] = currentChar;
    index++;
    if (num > 1) {
      const numStr = num + "";
      for (let k = 0; k < numStr.length; k++) {
        chars[index] = numStr[k];
        index++;
      }
    }
    i = j;
  }

  return index;
}
