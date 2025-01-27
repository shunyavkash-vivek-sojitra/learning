// function calling
// it will be thrown - ReferenceError: Cannot access 'age' before initialization, if "age" is passed.
console.log("verifyAge() with no 'age' passed.");
verifyAge(); // it will hoisted successfully

let age = 18;

function verifyAge(age) {
  if (age >= 18) {
    console.log("Welcome, you are eligible for voting, Your AGE: ", age);
  } else {
    console.log(
      `Your age:${age} does not meet the minimum age criteria for voting!!`
    );
  }
}

console.log("\nverifyAge() with 'age' passed.");
verifyAge(age);
