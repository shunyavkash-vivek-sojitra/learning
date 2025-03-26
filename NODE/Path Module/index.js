const path = require("path");
const fs = require("fs");

const useFile = "./files/test.txt";

// Get the current directory name
console.log("📁 Directory Name:", path.dirname(__filename));

// Get the current file name
console.log("\n📄 File Name:", path.basename(__filename));

// Get the file extension
console.log("\n📎 File Extension:", path.extname(__filename));

// Parse the file (into an object)
const parsedPath = path.parse(__filename);
console.log("\n📜 Parsed Path:", parsedPath);

// Format a path from the parsed (object to URL)
const formattedPath = path.format(parsedPath);
console.log("\n🛠️  Formatted Path:", formattedPath);

// Join multiple path
const joinedPath = path.join(__dirname, useFile);
console.log("\n🔗 Joined Path:", joinedPath);

// Resolve to an absolute path
const absolutePath = path.resolve("files", useFile);
console.log("\n🌎 Absolute Path:", absolutePath);

// Normalize an incorrect path
const messyPath = `files-Set//subfolder/../${useFile}`;
console.log("\n🧹 Normalized Path:", path.normalize(messyPath));

// Check the path is absolute or not
console.log("\n✅ Is Absolute Path:", path.isAbsolute(joinedPath));

// Find the relative path between two locations
const relativePath = path.relative(
  "/Users/imac/Documents/Vivek_Sojitra/Learning/NODE/Path Module",
  "/Users/imac/Documents/Vivek_Sojitra/Learning/NODE/Path Module/files/test.txt"
);
console.log("\n🔄 Relative Path:", relativePath);

// Read the sample file using a path method
fs.readFile(joinedPath, "utf8", (err, data) => {
  if (err) {
    console.error("\n❌ Error reading file:", err);
  } else {
    console.log("\n📖 File Content:", data);
  }
});
