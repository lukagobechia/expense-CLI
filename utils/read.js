import { readFile } from "./readFile.js";
import { sortByDateAsc, sortByDateDesc } from "./sortByDate.js";

const read = async (options) => {
  try {
    const filePath = "expense.json";
    const expenses = await readFile(filePath);
    const { asc, desc } = options;
    if (asc) {
      console.log(sortByDateAsc(expenses));
    }
    if (desc) {
      console.log(sortByDateDesc(expenses));
    }
    console.log(expenses);
  } catch (e) {
    console.log("Error getting expanses: ", e.message);
  }
};

export { read };
