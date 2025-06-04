function analyzeArray(arr) {
  let object = {
    average: findAverage(arr),
    min: findMin(arr),
    max: findMax(arr),
    length: arr.length
  };

  return object;
}

function findAverage(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

function findMin(arr) {
  return arr.reduce((acc, curr) => {
    return curr < acc ? curr : acc
  }, +Infinity);
}

function findMax(arr) {
  return arr.reduce((acc, curr) => {
    return curr > acc ? curr : acc
  }, -Infinity);
}

module.exports = { analyzeArray };