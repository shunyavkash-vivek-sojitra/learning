let age = 18;

const verifyAge = () => {
  try {
    if (typeof age === typeof 18) {
      if (age >= 18) {
        console.log("Welcome, you are eligible for voting, Your AGE: ", age);
      } else {
        console.log(
          `Your age:${age} does not meet the minimum age criteria for voting!!`
        );
      }
      return;
    }
    throw new Error(
      "Error occured with age!! - [ age must be in Number type. ] "
    );
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("\nAge is varified successfully.");
  }
};

verifyAge(age);
