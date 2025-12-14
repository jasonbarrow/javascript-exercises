const fibonacci = function (numInSeries) {
  numInSeries = parseInt(numInSeries);
  if (numInSeries === 0) {
    return 0;
  } else if (numInSeries < 1) {
    return "OOPS";
  } else if (numInSeries < 3) {
    return 1;
  } else {
    let numbers = [1, 1];
    for (let i = 1; i < numInSeries; i++) {
      numbers.push(numbers[i] + numbers[i - 1]);
    }
    console.log(numbers);
    return numbers[numInSeries - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
