const repeatString = function (initialText, numberOfTimes) {
  if (numberOfTimes < 0) {
    return "ERROR";
  }
  let finalText = "";
  for (let i = 0; i < numberOfTimes; i++) {
    finalText += initialText;
  }
  return finalText;
};

// Do not edit below this line
module.exports = repeatString;
