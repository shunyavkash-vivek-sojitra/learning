// This 4 operation can be performed.
import {
  addition,
  subtraction,
  multiplication,
  division,
} from "./services/math.js";

let a = 10;
let b = 20;

console.log(`a: ${a}`);
console.log(`b: ${b}`);

const result_addition = addition(a, b);
console.log(`Result: ${result_addition}`);

const result_subtraction = subtraction(a, b);
console.log(`Result: ${result_subtraction}`);

const result_multiplication = multiplication(a, b);
console.log(`Result: ${result_multiplication}`);

const result_division = division(a, b);
console.log(`Result: ${result_division}`);
