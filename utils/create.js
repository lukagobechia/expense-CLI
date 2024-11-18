import { readFile } from "./readFile.js";
import { writeFile } from "./writeFile.js";

const create = async (catrogry, price, paymentMethod) => {
  try {
    const filePath = "./expense.json";
    const expenses = await readFile(filePath);
    const lastId = expenses[expenses.length - 1]?.id || 0;
    const currentDate = new Date();

    const newExpense = {
      id: lastId + 1,
      category: catrogry,
      price: Number(price),
      paymentMethod: paymentMethod,
      date: currentDate.toISOString(),
    };

    if (price > 10) {
      expenses.push(newExpense);
    } else {
      console.log("Minimal expense is 10$");
    }
    await writeFile(filePath, expenses);
  } catch (e) {
    console.log("Error adding expense: ", e.message);
  }
};

export { create };
