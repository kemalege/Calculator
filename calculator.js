const prompt = require('prompt-sync')();

let x= parseInt(prompt("Enter first number: "));
let y= parseInt(prompt("Enter second number: "));
let operator = prompt("Enter operator: ");

switch(operator) {
    case "+":
        result = x+y;
      break;
    default:
        console.error('Invalid expression');
  }

console.log(result);

