// ARRAY
console.log("Empty Array:");
const arrayEmpty = []; // empty array
console.log("Empty Array:", arrayEmpty); // []
console.log("Empty Array Length: ", arrayEmpty.length); // 0

// console.log("\nArray With Different Types:");
console.log("\nArray Mixture:");
const arrayMixture = [1, "hello", true];
console.log(arrayMixture); // Javascript allow to store different typed elements in asingle array.
console.log("typeof arrayMixture[0]: ", typeof arrayMixture[0]);
console.log("typeof arrayMixture[1]: ", typeof arrayMixture[1]);
console.log("typeof arrayMixture[2]: ", typeof arrayMixture[2]);

console.log("\nArray:");
const array = [1, 2, 3, 4, 5]; // number array
console.log("Original array: ", array);
const arrayOther = ["one", "throw", "three", "four", "five"]; // string array
console.log("Original arrayOther: ", arrayOther);
const arrayNested = [11, 12, [13, 14, [15, 16, [17, 18]]]]; // nested array
console.log("Original arrayNested: ", arrayNested);
const string = "12345";
console.log("\n=================================================");
console.log("\nArray Object Methods:");
console.log("isArray - 'array': ", Array.isArray(array)); // array
console.log("isArray - 'string': ", Array.isArray(string)); // string
console.log("isArray - 'string-to-array': ", Array.isArray(Array.from(string))); // "string" is converted into array by using "Array.from()"

console.log("\nArray Methods:");
console.log("at() - index[2]: ", array.at(2));
console.log("at() - index[-2]: ", array.at(-2));

console.log("\npush() - array: ", array.push(6), array);
console.log("pop() - array: ", array.pop(), array);
console.log("\nshift() - array: ", array.shift(), array);
console.log("unshift() - array: ", array.unshift(0), array); // it will add "0" to the begining and return the new length of an array.

console.log(
  "\nconcat() - array: ",
  array.concat(arrayOther.concat(Array.from(string)))
); // it will merge multiple array

console.log("\nOriginal arrayNested:", arrayNested); // merge all nested array
console.log("flat() - array: ", arrayNested.flat());
console.log("flat(1) - array: ", arrayNested.flat(2));
console.log("flat(Infinity) - array: ", arrayNested.flat(Infinity));

// it will check weather the value is included or not in the current array.
console.log("\nincludes(10) - array: ", array.includes(10));
console.log("includes(3) - array: ", array.includes(3));

// it will merge all the elements of an array by seperator.
console.log("\njoin(' ') - array: ", array.join(" "));
console.log("join('-') - array: ", array.join("-"));
console.log("join('/') - array: ", array.join("/"));

console.log("\nreverse() - array: ", array.reverse());
console.log("reverse() - arrayOther: ", arrayOther.reverse());

console.log("\nslice() - array: ", array.slice(1)); // return from start
console.log("slice() - array: ", array.slice(1, 3));
console.log("slice() - array: ", array.slice(4));
console.log("slice() - array: ", array.slice(-2)); // return from end
console.log("slice() - array: ", array.slice(-3));

// SYNTEX: .splice(start-index, delete-elements, new-elements);
const arraySplice = array;
console.log("\nsplice() - array: ");
arraySplice.splice(0, 2, 5, 4);
console.log(arraySplice);

const arrayUnsorted = [58, 66, 0, 99, 88];
console.log("\nOriginal arrayUnsorted:", arrayUnsorted);
console.log("sort() - array: ", arrayUnsorted.sort());

let arrayToString = array.toString();
console.log("\ntoString() - arrayToString: ", arrayToString);
console.log("Typeof arrayToString: ", typeof arrayToString);
