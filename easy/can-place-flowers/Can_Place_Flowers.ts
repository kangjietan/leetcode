function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    const left = flowerbed[i - 1] === undefined ? true : flowerbed[i - 1] === 0;
    const middle = flowerbed[i] === 0;
    const right =
      flowerbed[i + 1] === undefined ? true : flowerbed[i + 1] === 0;
    if (left && middle && right) {
      flowerbed[i] = 1;
      count++;
    }
  }
  return count >= n;
}
