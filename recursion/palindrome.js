// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// function isPalindrome(s) {
//   if (s === "") return "";
//   if (s.slice(s.length - 1) === s.charAt(0)) {
//     if (isPalindrome(s.substring(1, s.length - 1))) {
//       return true;
//     }
//   }
//   return false;
// }

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log(isPalindrome("hannah"));
