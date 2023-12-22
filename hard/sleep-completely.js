/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(milliseconds) {
  console.log("Sleeping for", milliseconds, "milliseconds");
  const start = Date.now();
  console.log(start);
  while (Date.now() - start < milliseconds) {
    // Busy wait
  }
}

console.log("Before sleep");
sleep(5000); // Sleep for 5 seconds
console.log("After sleep");
console.log("Hi");
