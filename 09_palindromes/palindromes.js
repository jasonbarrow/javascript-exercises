const palindromes = function (inputString) {
  let lowerCaseString = inputString.toLowerCase();
  const lowerCaseArray = Array.from(lowerCaseString);

  const filteredArray = lowerCaseArray.filter((char) =>
    /^[a-z0-9]$/.test(char),
  );
  const filteredString = filteredArray.join("");

  const reversedArray = filteredArray.reverse();
  const reversedString = reversedArray.join("");

  if (filteredString === reversedString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
