// Implicit Conversion - (Automatically Conversion)
// String Conversion
console.log(" ");
console.log("String Conversion");
console.log(`"5" + 5: `, "5" + 5);
// Explicit Conversion
console.log(`Number("5") + 5: `, Number("5") + 5);
console.log(`Number("5") + String(5): `, Number("5") + String(5));

// Number Conversion
console.log(" ");
console.log("Number Conversion");
console.log(`"5" - 5: `, "5" - 5);

// Boolean Conversion
console.log(" ");
console.log("Boolean Conversion");
console.log(true);
console.log(typeof true);

console.log(false);
console.log(typeof false);

// Comparison Conversion
console.log(" ");
console.log("Comparison Conversion");
console.log(`"5" == 5: `, "5" == 5); // both represent "true" boolean value
console.log(typeof ("5" == 5));

console.log(" ");
console.log(`null == undefined: `, null == undefined); // both represent "false" boolean value
console.log(`Typeof null: `, typeof null);
console.log(`Typeof undefined: `, typeof undefined);

// Strict Equality (===)
console.log(" ");
console.log(`Strict Equality - (===)`);
console.log(`null === undefined: `, null === undefined);
console.log(typeof (null === undefined));

console.log(" ");
console.log(`true == 0: `, true == 0); // "true" represent true boolean value, While 0 represent "false" boolean value.

console.log(" ");
console.log(`true == 1: `, true == 1); // "true" represent true boolean value, While 1 represent "false" boolean value.

console.log(" ");
console.log(`true === 1: `, true === 1); // "true" represent true boolean value, While 1 represent "false" boolean value.
console.log(`true - Boolean Type`);
console.log(`1 - Number`);

console.log(" ");
console.log(`empty-string("") == space-string(" ")`, "" == " "); // "" represent false boolean value, While " " represent "true" boolean value.
console.log(`Typeof "": `, typeof "");
console.log(`Typeof " ": `, typeof " ");
// Explicit Conversion
console.log(`Boolean Value of "": `, Boolean(""));
console.log(`Boolean Value of " ": `, Boolean(" "));

// Strict Equality (===)
console.log(" ");
console.log(`"5" == NaN: `, "5" == NaN); // "" represent false boolean value, While " " represent "true" boolean value.
console.log(`Typeof NaN: `, typeof NaN);

// Parsing Numbers
console.log(" ");
console.log(`parseInt("123abc"): `, parseInt("123abc"));
console.log(`parseInt("abc123"): `, parseInt("abc123"));

console.log(" ");
console.log(`parseFloat("3.14abc"): `, parseFloat("3.14abc"));

console.log(" ");
console.log(`Array:`, typeof Array);

console.log(" ");
let arrayCustom = [];
console.log(`arrayCustom:`, typeof arrayCustom);
