/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const p = new Promise(function (resolve) {
    setTimeout(resolve, n);
  });
  return p;
}
wait(5000).then(function () {
  console.log("promise resolved after 5 seconds");
});
