const expenses = [
  { name: "Lunch", category: "Food", amount: 12 },
  { name: "Coffee", category: "Food", amount: 5 },
  { name: "Bus Ticket", category: "Transport", amount: 4 },
  { name: "Uber", category: "Transport", amount: 18 },
  { name: "Movie", category: "Entertainment", amount: 15 },
  { name: "Netflix", category: "Entertainment", amount: 10 }
];

console.log("===== All Expenses =====");

expenses.forEach(exp => {
  console.log(`${exp.name} | ${exp.category} | $${exp.amount}`);
});

const expensesWithTax = expenses.map(exp => {
  return {
    name: exp.name,
    category: exp.category,
    amount: exp.amount * 1.15
  };
});

console.log("\n===== Expenses With Tax (15%) =====");
expensesWithTax.forEach(exp => {
  console.log(`${exp.name} | ${exp.category} | $${exp.amount.toFixed(2)}`);
});


const foodExpenses = expenses.filter(exp => exp.category === "Food");

console.log("\n===== Food Expenses =====");
foodExpenses.forEach(exp => {
  console.log(`${exp.name} | ${exp.category} | $${exp.amount}`);
});

const totalSpent = expenses.reduce((total, exp) => {
  return total + exp.amount;
}, 0);

console.log("\nTotal Spent: $" + totalSpent);

const totalFoodSpent = foodExpenses.reduce((total, exp) => {
  return total + exp.amount;
}, 0);

console.log("Total Food Spent: $" + totalFoodSpent);


