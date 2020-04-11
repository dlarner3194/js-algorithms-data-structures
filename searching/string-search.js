function stringSearch(first, searchString) {
  let count = 0;
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < searchString.length; j++) {
      console.log(searchString[j], first[i+j])
      if (searchString[j] !== first[i+j]) {
        console.log("BREAK")
        break;
      }
      if (j === searchString.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(stringSearch("zomgomgzomgomgahd", "omg"));
