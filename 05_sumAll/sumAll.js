const sumAll = function (startNumber, endNumber) {
  let sumResult = 0;
  if (startNumber < 0 || endNumber < 0) {
    return "ERROR";
  }
  if (!Number.isInteger(startNumber) || !Number.isInteger(endNumber)) {
    return "ERROR";
  }
  if (startNumber < endNumber) {
    for (let i = startNumber; i <= endNumber; i++) {
      sumResult += i;
    }
  } else {
    for (let i = endNumber; i <= startNumber; i++) {
      sumResult += i;
    }
  }
  return sumResult;
};

// Do not edit below this line
module.exports = sumAll;
