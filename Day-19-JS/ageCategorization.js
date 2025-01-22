// if...else and switch demo for "age categorization".

// age
let age = 23; // enter your age here

// if...else
console.log("Using if...else statement:");
if (!isNaN(age) && age > 0) {
  if (age >= 0 && age <= 12) {
    console.log("You are living as a child.");
  } else if (age >= 13 && age <= 19) {
    console.log("You are a growing teenager.");
  } else if (age >= 20 && age <= 59) {
    console.log("You are an adult now.");
  } else if (age >= 60) {
    console.log("You are now a sinior, enjoy your rest of the life.");
  } else {
    console.log("Please, enter valid age!!");
  }
} else {
  console.log("Please, enter valid number!!");
}

// switch
console.log("\nUsing switch statement:");
if (!isNaN(age) && age > 0) {
  // "true" keyword will make expression every time.
  switch (true) {
    case age >= 0 && age <= 12:
      {
        console.log("You are living as a child.");
      }
      break;

    case age >= 13 && age <= 19:
      {
        console.log("You are a growing teenager.");
      }
      break;

    case age >= 20 && age <= 59:
      {
        console.log("You are an adult now.");
      }
      break;

    case age >= 60:
      {
        console.log("You are now a sinior, enjoy your rest of the life.");
      }
      break;

    default: {
      console.log("Please, enter valid age!!");
    }
  }
} else {
  console.log("Please, enter valid number!!");
}
