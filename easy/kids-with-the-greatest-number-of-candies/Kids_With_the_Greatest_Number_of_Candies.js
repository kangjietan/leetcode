function kidsWithCandies(candies, extraCandies) {
  var highest = 0;
  var res = [];
  for (var i = 0; i < candies.length; i++) {
    highest = Math.max(candies[i], highest);
  }
  for (var i = 0; i < candies.length; i++) {
    res[i] = candies[i] + extraCandies >= highest;
  }
  return res;
}
