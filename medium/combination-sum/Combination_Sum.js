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
function backtrack(candidates, res, set, target, idx) {
  if (target === 0) return res.push(__spreadArray([], set, true));
  if (target < 0 || idx >= candidates.length) return;
  for (var i = idx; i < candidates.length; i++) {
    set.push(candidates[i]);
    backtrack(candidates, res, set, target - candidates[i], i);
    set.pop();
  }
}
function combinationSum(candidates, target) {
  var res = [];
  backtrack(candidates, res, [], target, 0);
  return res;
}
