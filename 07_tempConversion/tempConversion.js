const convertToCelsius = function (fahnrenheitNumber) {
  let celsiusNumber = 0;
  celsiusNumber = (fahnrenheitNumber - 32) / (9 / 5);
  if (!Number.isInteger(celsiusNumber)) {
    celsiusNumber = Number(celsiusNumber.toFixed(1));
    return celsiusNumber;
  } else {
    return celsiusNumber;
  }
};

const convertToFahrenheit = function (celsiusNumber) {
  let fahnrenheitNumber = 0;
  fahnrenheitNumber = (celsiusNumber * 9) / 5 + 32;
  if (!Number.isInteger(fahnrenheitNumber)) {
    fahnrenheitNumber = Number(fahnrenheitNumber.toFixed(1));
    return fahnrenheitNumber;
  } else {
    return fahnrenheitNumber;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
