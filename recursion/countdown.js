// recursive
function countDown(num) {
  if (num <= 0) {
    console.log("All done.");
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}

// iterative
function countDownIterative(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done.");
}

// countDown(5);
countDownIterative(5);
