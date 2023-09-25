function coinChange(coins: number[], amount: number): number {
  const memo = new Array(amount + 1).fill(amount + 1);
  memo[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      memo[i] = Math.min(memo[i], memo[i - coin] + 1);
    }
  }
  return memo[amount] === amount + 1 ? -1 : memo[amount];
}
