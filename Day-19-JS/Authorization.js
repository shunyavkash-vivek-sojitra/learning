// if-else-nested Demo.
/*
  USECASES:
  1. "age" must 18 or above.
  2. "role" must be "student" in string.
  3. "hasId" must boolean type [in this it must true].
*/

let age = 18;
let role = "student";
let hasId = true; // hasId must "boolean" typed for this.

// hasId type checked if "boolean"
if (typeof hasId === "boolean") {
  // token must be "true" in boolean type to procced ahead.
  let token = hasId;
  // age verification
  if (age >= 18) {
    // role verification
    if (role === "student") {
      // token verification
      if (token) {
        console.log("Access Granted.");
      } else {
        console.log("Sorry, you do not have a valid ID.");
      }
    } else {
      console.log("Access Denied!! You may not authorized.");
    }
  } else {
    console.log(
      "Sorry your age does not meet the criteria that was minimum of age(18) and above."
    );
  }
} else {
  console.log("Something wen wrong! ID type may not be matched.");
}
