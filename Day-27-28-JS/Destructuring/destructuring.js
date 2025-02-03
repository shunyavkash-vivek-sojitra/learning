// Destructuring
// Array
console.log("ARRAY: ");
const user = ["01", "Vivek", "Sojitra"];
console.log("USER: ", user);

// normal access to elements of an array.
console.log("\nNormal access to elements of an array:");
const id = user[0];
const firstName = user[1];
const lastName = user[2];
console.log("ID: ", id);
console.log("First_Name: ", firstName);
console.log("Last_Name: ", lastName);

// access elements using "Destructuring" method
console.log("\nAccess elements using 'Destructuring' method:");
const [ids, first_name, last_name] = user;
console.log("ID: ", ids);
console.log("First_Name: ", first_name);
console.log("Last_Name: ", last_name);

console.log(
  "\n==========================================================================\n"
);
// Object
console.log("OBJECT:");
const admin = {
  name: "admin",
  email: "admin@gmail.com",
};
console.log("ADMIN: ", admin);

// normal access to the keys of an object.
console.log("\nNormal access to the keys of an object:");
const adminName = admin.name;
const adminEmail = admin.email;
console.log("Anmin Name: ", adminName);
console.log("Anmin Email: ", adminEmail);

// access keys using "Destructuring" method
console.log("\nAccess keys using 'Destructuring' method:");
const { name, email } = admin;
console.log("Admin Name: ", name);
console.log("Admin Email: ", email);
