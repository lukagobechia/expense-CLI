import { readFile } from "./readFile.js";
import { writeFile } from "./writeFile.js";

const update = async (id, options) => {
  try {
    const filePath = "expense.json";
    const expenses = await readFile(filePath);
    const index = expenses.findIndex((el) => el.id === Number(id));
    if (index === -1) {
      console.log(`The expanse with the ID ${id} has not been found`);
      return;
    }
    const { updateCategory, updatePrice, updatePaymentMethod } = options;

    const updatedExpanse = { ...expenses[index] };

    if (updateCategory) {
      updatedExpanse.category = String(updateCategory);
    }
    if (updatePrice) {
      updatedExpanse.price = Number(updatePrice);
    }
    if (updatePaymentMethod) {
      updatedExpanse.paymentMethod = updatePaymentMethod;
    }
    expenses[index] = updatedExpanse;
    await writeFile(filePath, expenses);
    console.log(`The expense with ID ${id} has been updated`);
  } catch (e) {
    console.log("Error updating expense: ", e.message);
  }
};

export { update };
