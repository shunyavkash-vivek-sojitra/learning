// Spread Operator
console.log("ARRAY:");
const arrayNumeric = [1, 2, 3, 4, 5];
console.log("Numaric Array: ", arrayNumeric);
const arrayAplhabet = ["six", "seven", "eight", "nine", "ten"];
console.log("Alphabet Array: ", arrayAplhabet);

// Spread - it will create a shallow copy of all arrays.
const arrayMerged = [...arrayNumeric, ...arrayAplhabet];
console.log("\nMerged Array: ", arrayMerged);

// Spread - it will create a shallow copy of "arrayAplhabet" only.
// It will allow to push new element, because it consider "arrayNumeric" actual array.
const arrayAlphaNumeric_first = [arrayNumeric, ...arrayAplhabet];
console.log("\nArrayAlphaNumeric_first Array: ", arrayAlphaNumeric_first);
arrayAlphaNumeric_first[0].push(555, 999);
console.log("\nArrayAlphaNumeric_first[0] Array: ", arrayAlphaNumeric_first);

// Spread - it will create a shallow copy of "arrayNumeric" only.
// It will throw an error while pushing new element, because it consider everything as an individual element not an array.
const arrayAlphaNumeric_second = [...arrayNumeric, arrayAplhabet];
console.log("ArrayAlphaNumeric_second Array: ", arrayAlphaNumeric_second);
// arrayAlphaNumeric_second[1].push(666);
// console.log("\nArrayAlphaNumeric_second[1] Array: ", arrayAlphaNumeric_second);

// it will create a new array of including "arrayNumeric" and "arrayAlphabet".
const array = [arrayNumeric, arrayAplhabet];
console.log("\nNew Array: ", array);

console.log(
  "\n=================================================================\n"
);

console.log("OBJECT: ");
const obj_name = {
  name: "Vivek",
};
const obj_email = {
  email: "vivek@gmail.com",
};
console.log("\nobj_name: ", obj_name);
console.log("obj_email: ", obj_email);

// In "obj_merged_nested" both objects are considered as a nested object.
const obj_merged_nested = { obj_name, obj_email };
console.log("\nMerged Nested Object: ", obj_merged_nested);

// Spread - it considered a whole object as a single object.
const obj_merged = { ...obj_name, ...obj_email };
console.log("\nMerged Object: ", obj_merged);
