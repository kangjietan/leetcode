function increasingTriplet(nums) {
  var smallest = Number.MAX_SAFE_INTEGER;
  var biggest = Number.MAX_SAFE_INTEGER;
  for (var i = 0; i < nums.length; i++) {
    var curr = nums[i];
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
