function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let highest = 0;
  const res: boolean[] = [];
  for (let i = 0; i < candies.length; i++) {
    highest = Math.max(candies[i], highest);
  }
  for (let i = 0; i < candies.length; i++) {
    res[i] = candies[i] + extraCandies >= highest;
  }
  return res;
}
