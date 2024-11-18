import { readFile } from "./readFile.js";

const sortByPrice = async (options) => {
  const expenses = await readFile("expense.json");

  const { asc, desc } = options;

  if (asc) {
    expenses.sort((a, b) => a.price - b.price);
    console.log(expenses);
  }
  if (desc) {
    expenses.sort((a, b) => b.price - a.price);
    console.log(expenses);
  }
};

export { sortByPrice };
