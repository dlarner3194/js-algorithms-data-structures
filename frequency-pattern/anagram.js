function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let f = 0; f < first.length; f++) {
    let letter = first[f];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  console.log(lookup);

  for (let s = 0; s < second.length; s++) {
    let letter = second[s];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

validAnagram("anagrams", "nagarams");
