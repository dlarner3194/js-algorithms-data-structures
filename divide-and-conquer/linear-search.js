const search = (list, num) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === num) {
      return i;
    }
  }
  return -1;
};

console.log(search([1, 2, 3], 4));
