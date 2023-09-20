function topKFrequent(nums, k) {
  var _a;
  var cache = {};
  for (var i = 0; i < nums.length; i++) {
    if (cache[nums[i]] === undefined) {
      cache[nums[i]] = 1;
    } else {
      cache[nums[i]]++;
    }
  }
  var frequentNums = [];
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    var freq = cache[num];
    if (frequentNums[freq] === undefined) {
      frequentNums[freq] = ((_a = {}), (_a[num] = num), _a);
    } else {
      frequentNums[freq][num] = num;
    }
  }
  var res = [];
  for (var i = frequentNums.length - 1; i >= 0; i--) {
    if (!frequentNums[i]) continue;
    var list = Object.keys(frequentNums[i]);
    if (list && list.length) {
      for (var j = 0; j < list.length; j++) {
        if (list[j]) res.push(Number(list[j]));
        if (res.length === k) return res;
      }
    }
  }
  return res;
}
