function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let f of first) {
    lookup[f] ? (lookup[f] += 1) : (lookup[f] = 1);
  }

  for (let s of second) {
    if (!lookup[s]) {
      return false;
    } else {
      lookup[s] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("anagrams", "nagarams"));
