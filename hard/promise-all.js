/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise(function (resolve) {
    setTimeout(resolve, 1000);
  });
}

function waitTwoSecond() {
  return new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  });
}

function waitThreeSecond() {
  return new Promise(function (resolve) {
    setTimeout(resolve, 3000);
  });
}

function calculateTime() {
  const start = Date.now();
  console.log("start time " + start);

  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(
    function () {
      console.log("all three promises have resolved");
      const end = Date.now();
      console.log("end time " + end);
      const timeTaken = end - start;
      console.log(
        "time taken for all three promises to resolve is " + timeTaken + " ms"
      );
    }
  );
}
calculateTime();
