function increasingTriplet(nums: number[]): boolean {
  let smallest = Number.MAX_SAFE_INTEGER;
  let biggest = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (curr <= smallest) {
      smallest = curr;
      continue;
    }
    if (curr <= biggest) {
      biggest = curr;
      continue;
    }
    return true; // If number is greater than small and less than biggest
  }
  return false;
}
