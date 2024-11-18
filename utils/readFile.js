import fs from "fs/promises";

const readFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (e) {
    console.log("Error reading file: ", e.message);
  }
};

export { readFile };
