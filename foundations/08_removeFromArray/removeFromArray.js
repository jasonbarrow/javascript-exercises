const removeFromArray = function (initalArray, ...toRemove) {
  let filteredArray = initalArray.filter((item) => !toRemove.includes(item));
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
