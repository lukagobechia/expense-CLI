import { readFile } from "./readFile.js";
import { sortByDateAsc, sortByDateDesc } from "./sortByDate.js";

const read = async (options) => {
  try {
    const filePath = "expense.json";
    const expenses = await readFile(filePath);
    const { asc, desc } = options;

    if (asc && desc) {
      console.log("specify either ascending or descending order");
      return;
    }
    let sortedExpenses;

    if (asc) {
      sortedExpenses = sortByDateAsc(expenses);
    } else if (desc) {
      sortedExpenses = sortByDateDesc(expenses);
    } else {
      sortedExpenses = expenses; // unsorted
    }
    console.log(sortedExpenses);
  } catch (e) {
    console.log("Error getting expanses: ", e.message);
  }
};

export { read };
