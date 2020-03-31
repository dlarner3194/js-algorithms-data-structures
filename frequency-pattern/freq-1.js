function same(num1, num2) {
  const arr1 = num1.toString();
  const arr2 = num2.toString();
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val = 0; val < arr1.length; val++) {
    frequencyCounter1[arr1[val]] = (frequencyCounter1[arr1[val]] || 0) + 1;
  }
  for (let val = 0; val < arr2.length; val++) {
    frequencyCounter2[arr2[val]] = (frequencyCounter2[arr2[val]] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }
  return true;
}

console.log(same(3589578, 5879385));
