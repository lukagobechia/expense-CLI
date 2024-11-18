import { readFile } from "./readFile.js";
import { writeFile } from "./writeFile.js";
const remove = async (id) => {
  try {
    const filePath = "expense.json";
    const expenses = await readFile(filePath);
    const index = expenses.findIndex((el) => el.id === Number(id));
    if (index === -1) {
      console.log("The expanse cannot be found");
      return;
    }
    expenses.splice(index, 1);
    await writeFile(filePath, expenses);
    console.log(`The expense wiht ID  ${id} has been deleted`);
  } catch (e) {
    console.log("Error delting expense:", e.message);
  }
};
export { remove };
