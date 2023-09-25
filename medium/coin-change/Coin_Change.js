function coinChange(coins, amount) {
  var memo = new Array(amount + 1).fill(amount + 1);
  memo[0] = 0;
  for (var _i = 0, coins_1 = coins; _i < coins_1.length; _i++) {
    var coin = coins_1[_i];
    for (var i = coin; i <= amount; i++) {
      memo[i] = Math.min(memo[i], memo[i - coin] + 1);
    }
  }
  return memo[amount] === amount + 1 ? -1 : memo[amount];
}
