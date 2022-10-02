// When this function is given an array and a value, it should return the index of the last time the value occurs in the array.If the value never occurs, the function should return -1.

function lastIndexOf(series, value) {
  var foundMatch = false;
  var result = 0;
  for (var i = series.length - 1; i >= 0; i--) {
    if (series[i] === value) {
      result = i;
      foundMatch = true;
      break;
    }
  }
  if (foundMatch) {
    return result;
  } else {
    return -1;
  }
}
 

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);