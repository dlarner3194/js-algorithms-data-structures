function productOfArray(list) {
  if (list.length === 0) return 1;
  if (list[0] === 0) return 0;
  return list[0] * productOfArray(list.slice(1));
}

console.log(productOfArray([1, 2, 3]));
