function reverseString(word){
  // takes string splits it, reverses it and then joins it together to form a reversed string.
    return word.split("").reverse().join("")
}
function isPalindrome(word) {
  // Write your algorithm here
  //reverse the input string
  // if the reversed string is the same as the input
   //  return true
   // else
   //  return false
  //compare reversed string to oroginal string it returns true
    return reverseString(word) === word

}

/* 
  Add your pseudocode here

*/

/*
  Add written explanation of your solution here
  The function will take in a string, then split into a list then we reverse the list 
  after the list has been reversed we join it to form a reversed string. After that we compare
  if the original string and the reversed string match using boolean expression, if they are equal
  the function isPlindrome should return true else it return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
