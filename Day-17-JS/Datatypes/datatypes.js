// VAR
console.log(" ");
console.log("VAR DATATYPE:");
// undefined
console.log("var a =  ", a);

// declaration
var a; // declared but undefined
a = 2; // var a initialized
console.log("var a = ", a);

// LET
console.log(" ");
console.log("LET DATATYPE:");
// reference error : Cannot access 'b' before initialization
// console.log("let b = ", b);

// declaration
let b; // declared but undefined
b = 11; // initialized
console.log("let b = ", b);

// CONST
console.log(" ");
console.log("CONST DATATYPE:");
// reference error : Cannot access 'c' before initialization
// console.log("const c = ", c);

// declaration
const c = 21; // it is mandatory to declare and initialize at the same time.

// reassignment
// c = 31; // Type error: Assignment to constant variable.
console.log("const c = ", c);

// DATATYPES
console.log(" ");
console.log("DATATYPES:");

let numberType = 123; // number
console.log("number: ", numberType);

console.log(" ");
let stringType = "vivek"; // string
console.log("string: ", stringType);

console.log(" ");
let symbolType1 = Symbol("s1"); // symbol
console.log("symbol: ", symbolType1);
let symbolType2 = Symbol("s1"); // symbol
console.log("symbol: ", symbolType2);

console.log(" ");
let bigIntType = BigInt(29999999999999999); // bigint
console.log("bigint: ", bigIntType);
console.log("bigint-type: ", typeof bigIntType);

console.log(" ");
let booleanTypeTrue = true; // boolean
let booleanTypeFalse = false;
console.log("boolean: ", booleanTypeTrue);
console.log("boolean: ", booleanTypeFalse);

// NULL - UNDEFINED
// NULL
console.log(" ");
let nullType = null; // declared and initialiezd with value "null".
console.log("null: ", nullType);

// UNDEFINED
console.log(" ");
let undefinedType; // not any value given
console.log("undefined: ", undefinedType);
console.log(" ");

// ARRAY
let arrayTypeEmpty = []; // empty array
console.log("array: ", arrayTypeEmpty);
console.log("array: ", arrayTypeEmpty.length); // 0
console.log(" ");

let arrayTypeValued = [1, 2, 3, 4, 5]; // array
console.log("array: ", arrayTypeValued);
console.log("array-length: ", arrayTypeValued.length); // 5 - maxIndex: 4 [0-4]
console.log(" ");

// OBJECT
let objectTypeEmpty = {}; // empty object
console.log("object-empty: ", objectTypeEmpty);
console.log(" ");

let objectTypeValued = {
  id: "01",
  name: "vivek",
}; // object - [key: value]
console.log("object: ", objectTypeValued);
console.log(" ");

// FUNCTION
function functionTypeNoReturn() {} // undefined function ( because no return )
console.log("function-empty: ", functionTypeNoReturn());
console.log(" ");

function functionType() {
  return objectTypeValued;
} // function
console.log("function-valued: ", functionType());
console.log(" ");
