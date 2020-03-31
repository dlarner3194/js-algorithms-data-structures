function averagePair(list, avg) {
  let left = 0;
  let right = list.length - 1;

  while (left < right) {
    let testAvg = (list[left] + list[right]) / 2;
    if (testAvg === avg) {
      return true;
    } else if (testAvg > avg) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
// function averagePair(arr, num) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     let avg = (arr[start] + arr[end]) / 2;
//     if (avg === num) return true;
//     else if (avg < num) start++;
//     else end--;
//   }
//   return false;
// }
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
// console.log(averagePair([1, 2, 3], 2.5));
