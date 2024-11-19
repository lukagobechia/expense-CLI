
const sortByDateAsc = (expenses) => {
  expenses.sort((a, b) => new Date(a.date) - new Date(b.date));
  return expenses;
};

const sortByDateDesc = (expenses) => {
  expenses.sort((a, b) => new Date(b.date) - new Date(a.date));
  return expenses;
};

export { sortByDateAsc, sortByDateDesc };
