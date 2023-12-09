/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const newStr = str.toLowerCase();
  const splitStr = newStr.split("");
  let vowelCount = 0;
  // Your code here
  for (let i = 0; i < splitStr.length; i++) {
    if (
      splitStr[i] === "a" ||
      splitStr[i] === "e" ||
      splitStr[i] === "i" ||
      splitStr[i] === "o" ||
      splitStr[i] === "u"
    ) {
      vowelCount += 1;
    }
  }
  // console.log(vowelCount);
  return vowelCount;
}
// countVowels("random");

module.exports = countVowels;
