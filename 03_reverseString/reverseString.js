const reverseString = function (inputText) {
  let initialArray = inputText.split("");
  let reversedArray = initialArray.reverse();
  let reversedString = reversedArray.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
