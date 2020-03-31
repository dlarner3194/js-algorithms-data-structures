// function areThereDuplicates() {
//   let collection = {};
//   for (let i = 0; i < arguments.length; i++) {
//     collection[arguments[i]] = (collection[arguments[i]] || 0) + 1;
//   }

//   for (let key of Object.keys(collection)) {
//     if (collection[key] > 1) return true;
//   }
//   return false;
// }

function areThereDuplicates() {
  const set = new Set(arguments).size;
  console.log(set);
  return set !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 2));
