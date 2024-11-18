import fs from "fs/promises";

const writeFile = async (filePath, data) => {
  try {
    fs.writeFile(filePath, JSON.stringify(data, null, 2));
  } catch (e) {
    console.log("Error writing file: ", e.message);
  }
};

export { writeFile };
