function binarySearch(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === n) {
      return middle;
    } else if (arr[middle] < n) {
      left = middle + 1;
    } else if (arr[middle] > n) {
      right = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100));
