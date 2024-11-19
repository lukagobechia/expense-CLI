import { readFile } from "./readFile.js";

const getById = async (id) => {
  try {
    const expenses = await readFile("expense.json");

    const found = expenses.find((el) => el.id === Number(id));
    
    if (!found) {
      console.log(`The expense with ID ${id} could not be found`);
      return;
    }

    console.log(found);
  } catch (e) {
    console.log("Error getting expense by id: ", e.message);
  }
};

export { getById };
