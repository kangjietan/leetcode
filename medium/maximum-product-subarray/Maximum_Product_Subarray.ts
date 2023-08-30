function maxProduct(nums: number[]): number {
  let globalMax = nums[0];
  let globalMin = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let temp = max;
    globalMax = Math.max(nums[i], nums[i] * globalMax, nums[i] * globalMin);
    globalMin = Math.min(nums[i], nums[i] * temp, nums[i] * globalMin);
    max = Math.max(globalMax, max);
  }

  return max;
}
