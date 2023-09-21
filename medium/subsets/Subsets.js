var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
function backtrack(nums, subset, res, index) {
  res.push(__spreadArray([], subset, true));
  for (var i = index; i < nums.length; i++) {
    subset.push(nums[i]);
    backtrack(nums, subset, res, i + 1);
    subset.pop();
  }
}
function subsets(nums) {
  var res = [];
  backtrack(nums, [], res, 0);
  return res;
}
