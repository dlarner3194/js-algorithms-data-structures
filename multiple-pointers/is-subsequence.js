// function isSubsequence(subSequence, words) {
//   if (subSequence.length === 0 || words.length === 0) return false;
//   let i = 0,
//     j = 0;
//   while (j < words.length) {
//     if (words[j] === subSequence[i]) i++;
//     if (i === subSequence.length) {
//       return true;
//     }
//     j++;
//   }
//   return false;
// }

function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  console.log(str1, str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence("hello g", "hello world"));
