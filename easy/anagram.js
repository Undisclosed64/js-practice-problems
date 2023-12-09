/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.replace(/ +/g, "").toLowerCase();
  str2 = str2.replace(/ +/g, "").toLowerCase();

  const arr1 = str1.split("");
  const arr2 = str2.split("");
  if (arr1.length !== arr2.length) {
    // console.log("not an anagram");
    return false;
  }

  const occurrenceObj1 = countOccurance(arr1);
  const occurrenceObj2 = countOccurance(arr2);

  // Check if the character counts are the same
  for (let char in occurrenceObj1) {
    if (occurrenceObj1[char] !== occurrenceObj2[char]) {
      // console.log("not an anagram");
      return false;
    }
  }

  // console.log("it is an anagram");
  return true;
}

function countOccurance(arr) {
  let occurrenceObj = {};

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];

    // Increment count for the character in the object
    occurrenceObj[char] = (occurrenceObj[char] || 0) + 1;
  }
  return occurrenceObj;
}

isAnagram("noon", "no no");

module.exports = isAnagram;
