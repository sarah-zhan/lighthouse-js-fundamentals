//loop start at 100, end at 200, increment 1
for (let num = 100; num <= 200; num++) {
  // If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
  if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopyLighthouse");
  } 
  //If the number is a multiple of 3, print the string "Loopy" instead of the number.
  else if (num % 3 === 0) {
    console.log("Loopy");
  } 
  //If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
  else if (num % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(num);
  }
}