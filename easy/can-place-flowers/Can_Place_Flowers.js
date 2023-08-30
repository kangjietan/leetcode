function canPlaceFlowers(flowerbed, n) {
  var count = 0;
  for (var i = 0; i < flowerbed.length; i++) {
    var left = flowerbed[i - 1] === undefined ? true : flowerbed[i - 1] === 0;
    var middle = flowerbed[i] === 0;
    var right = flowerbed[i + 1] === undefined ? true : flowerbed[i + 1] === 0;
    if (left && middle && right) {
      flowerbed[i] = 1;
      count++;
    }
  }
  return count >= n;
}
