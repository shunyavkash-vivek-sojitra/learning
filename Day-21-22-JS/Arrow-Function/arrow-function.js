console.log(
  "verifyAge() with no 'age' passed throw an ERROR, ReferenceError: Cannot access 'verifyAge' before initialization."
);
// function calling
// It will throw error during hoisting.
// ReferenceError: Cannot access 'verifyAge' before initialization.
// verifyAge();

let age = 13;

const verifyAge = (age) => {
  if (age >= 18) {
    console.log("Welcome, you are eligible for voating, Your AGE: ", age);
  } else {
    console.log(
      `Your age:${age} does not meet the minimum age criteria for voating!!`
    );
  }
};

console.log("\nverifyAge() with 'age' passed.");
verifyAge(age);
