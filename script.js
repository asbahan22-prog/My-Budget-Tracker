// ========================================
// SPENDWISE - JAVASCRIPT FOUNDATION
// ========================================

// 1. Store application data

let budget = 0;
let expense = 0;
let remainingBalance = 0;


// 2. Function to calculate remaining balance

function calculateBalance(budget, expense) {
    return budget - expense;
}


// 3. Collect user input

let userBudget = prompt("Enter your budget in KSh:");
let userExpense = prompt("Enter your total expenses in KSh:");


// 4. Convert user input into numbers

budget = Number(userBudget);
expense = Number(userExpense);


// 5. Perform the calculation

remainingBalance = calculateBalance(budget, expense);


// 6. Display results in the browser console

console.log("===== SpendWise Budget Summary =====");
console.log("Budget: KSh " + budget);
console.log("Expenses: KSh " + expense);
console.log("Remaining Balance: KSh " + remainingBalance);