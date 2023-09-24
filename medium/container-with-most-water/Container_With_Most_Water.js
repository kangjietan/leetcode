/**
[1,8,6,2,5,4,8,3,7] heights
[0,1,2,3,4,5,6,7,8] indexes

width = index[rightPointer] - index[curr]
height = Math.min(index[rightPointer], index[curr])
maxArea = Math.max(currArea, maxArea)
 */
function maxArea(height) {
  var maxArea = 0;
  var i = 0;
  var j = height.length - 1;
  while (i < j) {
    var width = j - i;
    var currHeight = Math.min(height[i], height[j]);
    maxArea = Math.max(maxArea, width * currHeight);
    if (height[i] <= height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
}
// function maxArea(height: number[]): number {
//   let maxArea = 0;
//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       const width = j - i;
//       const currHeight = Math.min(height[i], height[j]);
//       maxArea = Math.max(maxArea, width * currHeight);
//     }
//   }
//   return maxArea;
// }
