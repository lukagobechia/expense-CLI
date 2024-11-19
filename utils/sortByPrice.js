import { readFile } from "./readFile.js";

const sortByPrice = async (options) => {
  try {
    const expenses = await readFile("expense.json");

    const { asc, desc } = options;

    if (asc && desc) {
      console.log("specify either ascending or descending order");
      return;
    }

    if (asc) {
      expenses.sort((a, b) => a.price - b.price);
      console.log(expenses);
    } else if (desc) {
      expenses.sort((a, b) => b.price - a.price);
      console.log(expenses);
    } else {
      console.log(
        "specify a sorting order: '--asc' for ascending or '--desc' for descending."
      );
      return;
    }
  } catch (e) {
    console.log("Error sorting by proces: ", e.message);
  }
};

export { sortByPrice };
