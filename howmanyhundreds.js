const howManyHundreds = function (number) {
  let container = 0;
  if (number < 100) {
    container = 0;
  } else {
    container = Math.floor(number / 100)
  }
  return container
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);