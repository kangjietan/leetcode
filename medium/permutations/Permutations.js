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
function backtrack(nums, res, set) {
  if (set.length === nums.length) return res.push(__spreadArray([], set, true));
  for (var i = 0; i < nums.length; i++) {
    if (set.indexOf(nums[i]) !== -1) continue;
    set.push(nums[i]);
    backtrack(nums, res, set);
    set.pop();
  }
}
function permute(nums) {
  var res = [];
  backtrack(nums, res, []);
  return res;
}
