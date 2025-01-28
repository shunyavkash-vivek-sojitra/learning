// var
console.log("VAR");
console.log("varGlobal_1: ", varGlobal_1); // undefined
var varGlobal_1;

// console.log("varGlobal_2: ", varGlobal_2); // ReferenceError: varGlobal_2 is not defined
console.log("varGlobal_2: ", test.varGlobal_2); // undefined
function test() {
  var varGlobal_2;
}

// let
console.log("\nLET");
// console.log("letGlobal_1: ", letGlobal_1); // ReferenceError: Cannot access 'letGlobal_1' before initialization
let letGlobal_1;

// console.log("letGlobal_2: ", letGlobal_2); // ReferenceError: letGlobal_2 is not defined
console.log("letGlobal_2: ", test.letGlobal_2); // undefined - because it is in "function".
function test() {
  let letGlobal_2;
}

// const
console.log("\nCONST");
// console.log("constGlobal_1: ", constGlobal_1); // ReferenceError: Cannot access 'constGlobal_1' before initialization
const constGlobal_1 = 1;

// console.log("constGlobal_2: ", constGlobal_2); // ReferenceError: letGlobal_2 is not defined
console.log("constGlobal_2: ", test.constGlobal_2); // undefined - because it is in "function".
function test() {
  const constGlobal_2 = 2;
}
