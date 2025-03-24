const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (inputArray) {
  // return inputArray.reduce((summy, current) => summy + current, 0);

  let value = inputArray.reduce(function (summy, current) {
    return summy + current;
  }, 0);
  return value;
};

const multiply = function (inputArray) {
  let value = inputArray.reduce(function (multi, current) {
    return multi * current;
  });
  return value;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a === 0) {
    return 1;
  } else {
    let result = 1;
    for (i = a; i > 0; i--) {
      result = result * i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
