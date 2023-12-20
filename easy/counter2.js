let count = 0;

//counter without setInterval
function counter() {
  count++;
  console.log(count);
  setTimeout(callSet, 1000);
}
function callSet() {
  setTimeout(counter, 1000);
}
callSet();
