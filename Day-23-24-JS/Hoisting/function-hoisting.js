// NOTE: Only "Normal function" will be hoisted, not others.

// normal function
console.log("Normal Function:");
normalFunc();

console.log("normal function is declared here!!");
function normalFunc() {
  console.log("normal function hoisted.");
}

// function expression
console.log("\nFunction Expression:");
//  functionExp(); // ReferenceError: Cannot access 'functionExp' before initialization

console.log("function expression declared here!!");
const functionExp = function () {
  console.log("function expression hoisted");
};

// arrow function
console.log("\nArrow Function:");
// arrowFunc(); // ReferenceError: Cannot access 'arrowFunc' before initialization

console.log("arrow function declared here!!");
const arrowFunc = () => {
  console.log("arrow function hoisted");
};
