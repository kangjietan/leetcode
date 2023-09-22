function backtrack(nums, res, set) {
  if (set.length === nums.length) return res.push([...set]);

  for (let i = 0; i < nums.length; i++) {
    if (set.indexOf(nums[i]) !== -1) continue;
    set.push(nums[i]);
    backtrack(nums, res, set);
    set.pop();
  }
}

function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  backtrack(nums, res, []);
  return res;
}
