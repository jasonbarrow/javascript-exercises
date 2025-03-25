const findTheOldest = function (inputArray) {
  const date = new Date();
  const year = date.getFullYear();

  for (let i = 0; i < inputArray.length; i++) {
    if (!inputArray[i].hasOwnProperty("yearOfDeath")) {
      inputArray[i]["yearOfDeath"] = year;
    }
  }

  const sortedArray = inputArray.sort(function (a, b) {
    if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) {
      return -1;
    } else {
      return 1;
    }
  });

  return sortedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
