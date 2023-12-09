/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //handle punctuation, whitespace and case insensitive strings
  let newStr = str
    .replace(/[^\w\s]|_/g, "")
    .replace(/ +/g, "")
    .toLowerCase();

  //return true for empty string
  if (newStr === "") return true;

  const arr = newStr.split("");
  let isPalindrome;

  //define start and end
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    //check if both are same
    if (arr[start] === arr[end]) {
      // console.log("same");
      isPalindrome = true;
    } else {
      // console.log("not same");
      isPalindrome = false;
      break;
    }

    start++;
    end--;
  }
  // console.log(isPalindrome);
  return isPalindrome;
}
isPalindrome("A man, a plan, a canal. Panama");

module.exports = isPalindrome;
