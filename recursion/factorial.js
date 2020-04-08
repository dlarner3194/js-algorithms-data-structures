// function factorial(n) {
//   let total = 1;
//   for (let i = n; i > 1; i--) {
//     total *= i;
//   }
//   return total;
// }

function factorial(n) {
  let total = 1;
  if (n > 0) {
    total = n * factorial(n - 1);
  }
  return total;
}

console.log(factorial(5));
