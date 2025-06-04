function analyzeArray(arr) {
  let object = {
    average: findAverage(arr)
  };

  return object;
}

function findAverage(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}


module.exports = { analyzeArray };