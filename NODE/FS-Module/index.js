const fs = require("fs").promises;

const string = "Hello Dude! How Are You? hy";
const filePath = "./file.txt";
// ==================================================== Create File
const fileGen = async () => {
  try {
    await fs.writeFile(filePath, string + " ");
    console.log("New file created succesfully.");
  } catch (error) {
    console.log("🚨 Error creating new file!");
  }
};

// fileGen();

// ==================================================== Read File
const fileRead = async () => {
  try {
    const fetchedFile = await fs.readFile(filePath, "utf8");
    console.log("Reading file successfully.");
    console.log("file.txt:", fetchedFile);
  } catch (error) {
    console.log("🚨 Error reading file!");
  }
};

// fileRead();

// ==================================================== Append File
const fileAppend = async () => {
  try {
    await fs.appendFile(filePath, string + " ");
    console.log("Append file successfully.");
    console.log("Last appended texts:", string);
  } catch (error) {
    console.log("🚨 Error reading file!");
  }
};

fileAppend();

// ==================================================== Delete File
const fileDelete = async () => {
  try {
    await fs.unlink(filePath);
    console.log("File deleted successfully.");
  } catch (error) {
    console.log("🚨 Error deleting file!");
  }
};

// fileDelete();

// ==================================================== Watch File
const fileWatch = () => {
  try {
    fs.watch(filePath, (eventType, filename) => {
      if (filename) {
        console.log(`⚡ File "${filename}" modified with event: ${eventType}`);
      }
    });
  } catch (error) {
    console.log("🚨 Error watching file!", error);
  }
};

// fileWatch();

// ==================================================== Make Directory
const createDir = () => {
  try {
    fs.mkdir("./Temp", { recursive: true });
    console.log("Folder created successfully.");
  } catch (error) {
    console.log("🚨 Error creating folder!", error);
  }
};

// createDir();

// ==================================================== Read Directory
const readDir = () => {
  try {
    fs.readdir("./Temp", { recursive: true });
    console.log("Folder reading successfully.");
  } catch (error) {
    console.log("🚨 Error reading folder!", error);
  }
};

// readDir();

// ==================================================== Remove Directory
const removeDir = () => {
  try {
    fs.rm("./Temp", { recursive: true });
    console.log("Folder removed successfully.");
  } catch (error) {
    console.log("🚨 Error removing folder!", error);
  }
};

// removeDir();

// ==================================================== Copy File to Another
const fileCopy = () => {
  try {
    fs.copyFile("./file.txt", "./copy.txt");
    console.log("File copied successfully.");
  } catch (error) {
    console.log("🚨 Error duplicating file!", error);
  }
};

fileCopy();

// You can use the below methods for large projects:
    // createWriteStream()
    // createReadStream()
