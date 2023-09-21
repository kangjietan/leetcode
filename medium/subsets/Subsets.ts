function backtrack(
  nums: number[],
  subset: number[],
  res: number[][],
  index: number
) {
  res.push([...subset]);
  for (let i = index; i < nums.length; i++) {
    subset.push(nums[i]);
    backtrack(nums, subset, res, i + 1);
    subset.pop();
  }
}

function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  backtrack(nums, [], res, 0);
  return res;
}
