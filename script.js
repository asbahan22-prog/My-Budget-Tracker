// ========================================
// SPENDWISE - INTERACTIVE JAVASCRIPT
// ========================================

// 1. APPLICATION DATA

let budget = 10000;

let expenses = [
    {
        name: "Food",
        category: "Food",
        amount: 500
    },
    {
        name: "Transport",
        category: "Transport",
        amount: 300
    }
];


// ========================================
// 2. GET HTML ELEMENTS
// ========================================

const budgetInput = document.getElementById("budgetInput");
const expenseNameInput = document.getElementById("expenseName");
const expenseCategoryInput = document.getElementById("expenseCategory");
const expenseAmountInput = document.getElementById("expenseAmount");

const addExpenseButton = document.getElementById("addExpenseBtn");

const expenseList = document.getElementById("expenseList");

const totalIncomeElement = document.getElementById("totalIncome");
const totalExpensesElement = document.getElementById("totalExpenses");
const balanceElement = document.getElementById("balance");

const budgetMessage = document.getElementById("budgetMessage");


// ========================================
// 3. CALCULATE TOTAL EXPENSES
// ========================================

function calculateTotalExpenses() {

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


// ========================================
// 4. CALCULATE REMAINING BALANCE
// ========================================

function calculateBalance() {

    const totalExpenses = calculateTotalExpenses();

    return budget - totalExpenses;
}


// ========================================
// 5. CHECK BUDGET STATUS
// ========================================

function checkBudgetStatus(balance) {

    if (balance > 0) {

        budgetMessage.textContent =
            "You are within your budget.";

    } else if (balance === 0) {

        budgetMessage.textContent =
            "You have used your entire budget.";

    } else {

        budgetMessage.textContent =
            "You are over your budget.";
    }
}


// ========================================
// 6. DISPLAY EXPENSES
// ========================================

function displayExpenses() {

    expenseList.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];

        const listItem = document.createElement("li");

        listItem.textContent =
            `${expense.name} - ${expense.category} - KSh ${expense.amount}`;

        expenseList.appendChild(listItem);
    }
}


// ========================================
// 7. UPDATE DASHBOARD
// ========================================

function updateDashboard() {

    const totalExpenses = calculateTotalExpenses();

    const balance = calculateBalance();

    totalIncomeElement.textContent =
        `KSh ${budget.toLocaleString()}`;

    totalExpensesElement.textContent =
        `KSh ${totalExpenses.toLocaleString()}`;

    balanceElement.textContent =
        `KSh ${balance.toLocaleString()}`;

    checkBudgetStatus(balance);

    displayExpenses();
}


// ========================================
// 8. ADD NEW EXPENSE
// ========================================

function addExpense() {

    const name = expenseNameInput.value.trim();

    const category = expenseCategoryInput.value.trim();

    const amount = Number(expenseAmountInput.value);

    if (name === "" || category === "" || amount <= 0) {

        alert("Please enter a valid expense.");

        return;
    }

    const newExpense = {
        name: name,
        category: category,
        amount: amount
    };

    expenses.push(newExpense);

    expenseNameInput.value = "";
    expenseCategoryInput.value = "";
    expenseAmountInput.value = "";

    updateDashboard();
}


// ========================================
// 9. HANDLE USER INTERACTION
// ========================================

addExpenseButton.addEventListener("click", addExpense);


// ========================================
// 10. BUDGET INPUT
// ========================================

budgetInput.addEventListener("change", function () {

    const newBudget = Number(budgetInput.value);

    if (newBudget >= 0) {

        budget = newBudget;

        updateDashboard();

    } else {

        alert("Please enter a valid budget.");
    }
});


// ========================================
// 11. INITIAL DASHBOARD DISPLAY
// ========================================

budgetInput.value = budget;

updateDashboard();