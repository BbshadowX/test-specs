function multiplication(x, y) {
  return x * y;
}

const { eventNames } = require("process");

console.log(multiplication(4, 9));

/*
What do I expect multiplication to do?
I expect multiplication to return the multiplication of x and y.
What types do I expect the perameters x and y to be?
I expect x and y to be numbers.
What type do I expect the output to be?
I expect the output to be a number.
what do you expect the output of multiplication(4, 9) to be?
I expect the output to be 36.
*/

function cancatOdds(num1, num2) {
  const num1odd = [];
  const num2odd = [];
  const odd = [];
  for (let i = 0; i < num1.length; i++) {
    if (num1[i] % 2 === 1 || num1[i] % 2 === -1) {
      num1odd.push(num1[i]);
    }
  }
  for (let i = 0; i < num2.length; i++) {
    if (num2[i] % 2 === 1 || num2[i] % 2 === -1) {
      num2odd.push(num2[i]);
    }
  }
  for (let i = 0; i < num1odd.length; i++)
    if (num1odd) {
      odd.push(num1odd[i]);
    }
  for (let i = 0; i < num2odd.length; i++)
    if (num2odd) {
      odd.push(num2odd[i]);
    }
  const odds = odd.filter((numb, i) => {
    return odd.indexOf(numb) === i;
  });
  return odds.sort(function (a, b) {
    return a - b;
  });
}

console.log(
  cancatOdds(
    [3, 2, 1, "Test", undefined, null, {}, false],
    [9, 1, 1, 1, 4, 15, -1]
  )
);

/* 
What should happen with unexpected inputs?
The output will not include the unexpected inputs
What kinds of unexpected inputs should we worry about?
I should worry about strings, undefined, null, boolean, and objects.
What should happen when there are multiples of the same odd number in the array?
The output should not include duplicate numbers.
*/
