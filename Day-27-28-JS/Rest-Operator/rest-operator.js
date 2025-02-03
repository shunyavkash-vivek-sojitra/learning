// REST Operator
// Array
console.log("ARRAY: ");
const number = [1, 2, 3, 4, 5];
console.log("NUMBER: ", number);

const [index_0, index_1, ...rest] = number;

// values are displaying using index
console.log("\nnumber[0]: ", index_0);
console.log("number[1]: ", index_1);
// rest operator
console.log("\nRest Operator:");
console.log("REST: ", rest);
console.log("REST type: ", typeof rest); // array it-self an object.

console.log("\n=========================================================\n");

// Object
console.log("OBJECT: ");
const user = {
  id: 11,
  name: "Vivek",
  email: "user@gmail.com",
  role: "user",
  isActive: true,
};
console.log("USER: ", user);

const { id, name, email, ...rest_UserInfo } = user;
console.log("\nID: ", id);
console.log("Name: ", name);
console.log("Email: ", email);
console.log("\nREST_UserInfo: ", rest_UserInfo);
