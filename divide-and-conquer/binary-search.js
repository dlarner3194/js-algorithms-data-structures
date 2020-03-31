const binarySearch = (list, n) => {
  let min = 0;
  let max = list.length - 1;
  while (min <= max) {
    console.log(min, max, Math.floor((min + max) / 2));
    let middle = Math.floor((min + max) / 2);
    let currentElement = list[middle];

    if (currentElement < n) {
      min = middle + 1;
    } else if (currentElement > n) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
