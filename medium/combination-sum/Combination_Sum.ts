function backtrack(candidates: number[], res: number[][], set: number[], target: number, idx: number) {
  if (target === 0) return res.push([...set])
  if (target < 0 || idx >= candidates.length) return;

  for (let i = idx; i < candidates.length; i++) {
    set.push(candidates[i])
    backtrack(candidates, res, set, target - candidates[i], i);
    set.pop();
  }
}

function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  backtrack(candidates, res, [], target, 0);
  return res;
};