function topKFrequent(nums: number[], k: number): number[] {
  const cache: { [key: string]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    if (cache[nums[i]] === undefined) {
      cache[nums[i]] = 1;
    } else {
      cache[nums[i]]++;
    }
  }

  const frequentNums: { [key: string]: number }[] = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const freq = cache[num];
    if (frequentNums[freq] === undefined) {
      frequentNums[freq] = { [num]: num };
    } else {
      frequentNums[freq][num] = num;
    }
  }

  const res = [];
  for (let i = frequentNums.length - 1; i >= 0; i--) {
    if (!frequentNums[i]) continue;
    const list = Object.keys(frequentNums[i]);
    if (list && list.length) {
      for (let j = 0; j < list.length; j++) {
        if (list[j]) res.push(Number(list[j]));
        if (res.length === k) return res;
      }
    }
  }

  return res;
}
