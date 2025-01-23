let stringUpp = "VIVEK";
let stringCap = "Vivek";
let stringLow = "vivek";
let stringSpace = "   hello   ";

console.log("\nSTRING: vivek\n"); // actual string

console.log("toLowerCase: ", stringUpp.toLowerCase());
console.log("toUpperCase: ", stringLow.toUpperCase());

console.log("\nindexOf - [first occurence]: ", stringLow.indexOf("v"));
console.log("lastIndexOf - [last occurence]: ", stringLow.lastIndexOf("v"));
console.log("charAt - 0: ", stringLow.charAt(0));
console.log("at - 3: ", stringLow.at(3));

console.log("\nconcat: ", stringUpp.concat(stringLow));

console.log("\nlower string:");
console.log("startWith - i: ", stringLow.startsWith("i"));
console.log("endsWith - k: ", stringLow.endsWith("k"));
console.log("\nupper string:");
console.log("startWith - i: ", stringUpp.startsWith("i"));
console.log("endsWith - k: ", stringUpp.endsWith("k"));

console.log("\ninclude - vek: ", stringLow.includes("vek"));
console.log("include: - hello: ", stringLow.includes("hello"));

console.log("\nrepeat: ", stringLow.repeat(3));

console.log("\nreplace: ", stringLow.replace("v", "i"));
console.log("replaceAll: ", stringLow.replaceAll("v", "i"));

console.log("\nsearch: ", stringLow.search("e"));

console.log("\nslice: ", stringLow.slice(0, 3));

console.log("\nsubstring : ", stringLow.substring(0, 3));
console.log("substring : ", stringLow.substring(3));

console.log("\nTrim Functionality: ");
console.log("Normal:", stringSpace);
console.log("trim:", stringSpace.trim());
console.log("trim start:", stringSpace.trimStart());
console.log("trim end:", stringSpace.trimEnd());
