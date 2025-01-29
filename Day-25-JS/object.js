// OBJECT in Javascript
// Object Literial
const user = {
  id: 1,
  name: "Vivek",
  "full name": "Vivek Sojitra", // differently accessed
  email: "vivek@dummy.com",
  contact: 1234567890,
  education: {
    diploma: "Computer Engineering",
    course: "Full-Stack Development",
  }, // nested (child) object
  hobby: ["Listening Music", "Travel"], // array
  isActive: true,
};

// display entire object
console.log("\nObject: [user]", user);

// normally accessed key of "user" object
console.log("\nnormally accessed key of 'user' object:");
console.log("user - id: ", user.id);
console.log("user - name: ", user.name);

// console.log("user - full name: ", user.full name); // it will not accessed normally
console.log("user - full name: ", user["full name"]); // it will work

console.log("user - email: ", user.email);
console.log("user - contact: ", user.contact);
console.log("\nusre - isActive: ", user.isActive);

// accessed nested (child) object
console.log("\nNested Child Object:");
console.log("[Child Object]: user - education: ", user.education);
console.log(
  "[Child Object]: user - education{diploma}: ",
  user.education.diploma
); //  accessed nested (child) object key
console.log(
  "[Child Object]: user - education{course}: ",
  user.education.course
); //  accessed nested (child) object key

console.log("\nArray 'hobby' of 'user' Object:");
console.log("[Array]: usre - hobby: ", user.hobby); // array
console.log("[Array]: usre - hobby[0]: ", user.hobby[0]); // accessing index of "hobby" array from "user" object
console.log("[Array]: usre - hobby[1]: ", user.hobby[1]); // accessing index of "hobby" array from "user" object
// undefined
console.log("[Array]: usre - hobby[2]: ", user.hobby[2]); // accessing index of "hobby" array from "user" object

console.log("\nDestructuring Method:");
let { id, name, "full name": full_name, email, contact, isActive } = user;
console.log("[Destructured]: user - id: ", id);
console.log("[Destructured]: user - name: ", name);
console.log("[Destructured]: user - full name: ", full_name);
console.log("[Destructured]: user - email: ", email);
console.log("[Destructured]: user - contact: ", contact);
console.log("[Destructured]: user - isActive: ", isActive);

// nested (child) object destructring
console.log("\nNested Child Object Destructring:");
let {
  education,
  education: { diploma, course },
} = user;
console.log("[Destructured]: user{education}: ", education);
console.log("[Destructured]: user{education - diploma}: ", diploma);
console.log("[Destructured]: user{education - course}: ", course);

console.log("\nDestructured Array 'hobby' of 'user' Object:");
let {
  hobby,
  // it will throw an error, if the "third_hobby" is mentioned here.
  hobby: [first_hobby, second_hobby, third_hobby],
} = user;
console.log("[Destructured-Array]: user - hobby: ", hobby); // array
console.log("[Destructured-Array]: user - hobby[0]: ", first_hobby); // accessing index of "hobby" array from "user" object
console.log("[Destructured-Array]: user - hobby[1]: ", second_hobby); // accessing index of "hobby" array from "user" object
console.log("[Destructured-Array]: user - hobby[2]: ", third_hobby); // accessing index of "hobby" array from "user" object

// another Object
console.log("\n\nAnother Object:");
// create method
let admin = (Object.create = {
  name: "admin_name",
  isActive: false,
});

// to concate multiple objects
// assign method
console.log("\nAssign:");
// it will replace the same key of "first object" with the "second object".
// BECAUSE, object is not allowing samne key.
let objectConcatinated = Object.assign({}, user, admin);
console.log(objectConcatinated);
console.log("typeof objectConcatinated", typeof objectConcatinated);

// return the array of key: values from object
// assign method
console.log("\nEntries:");
let objectEntries = Object.entries(admin);
console.log(objectEntries);

// return the array of keys from object
// keys method
console.log("\nKeys:");
let objectKeys = Object.keys(admin);
console.log(objectKeys);

// return the array of values from object
// values method
console.log("\nValues:");
let objectValues = Object.values(admin);
console.log(objectValues);

// not allow to change the values of frozen object
// freeze method
console.log("\nFreeze:");
let objectFreeze = Object.freeze(admin); // it will restrict changes values in object.
console.log("is 'user' object frozen?: ", Object.isFrozen(user));
console.log("is 'admin' object frozen?: ", Object.isFrozen(admin));
console.log("Current name of object - 'admin': ", admin.name);
admin.name = "hello - nameChandged";
console.log(
  "Trying to change the value of frozen object - 'admin': ",
  admin.name
);
