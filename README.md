# SpendWise - Interactive Budget Tracker

SpendWise is a simple budget tracking dashboard built with **HTML, CSS, and JavaScript**.

This week's project focused on making the SpendWise dashboard interactive and dynamic.

## Features

* Set a monthly budget.
* Add new expenses.
* Select an expense category.
* Calculate total expenses automatically.
* Calculate the remaining balance.
* Display recent transactions.
* Show a budget status message.
* Update the dashboard when the user interacts with it.

## JavaScript Concepts Used

### 1. Conditionals

Conditionals are used to check the user's budget status.

The application checks whether the remaining balance is:

* Greater than zero — the user is within the budget.
* Equal to zero — the user has used the entire budget.
* Less than zero — the user is over the budget.

### 2. Arrays

An array is used to store expense records.

Each expense contains:

* Expense name
* Category
* Amount

Example:

```javascript
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
```

New expenses are added to the array when the user clicks **Add Expense**.

### 3. Loops

A `for` loop is used to go through the expenses array.

The loop is used to:

* Calculate the total expenses.
* Display all expenses in Recent Activity.

### 4. DOM Manipulation

JavaScript is used to update the webpage without refreshing it.

The project uses DOM methods such as:

* `getElementById()`
* `textContent`
* `createElement()`
* `appendChild()`

These methods update the dashboard with the latest budget and expense information.

### 5. Event Listeners

Event listeners allow the application to respond to user actions.

SpendWise uses events for:

* Clicking the **+ Add Expense** button.
* Changing the monthly budget.

When the user adds an expense, JavaScript updates the expense array and refreshes the dashboard.

## How the Application Works

The basic flow is:

```text
User enters expense
        ↓
JavaScript receives the input
        ↓
Expense is added to the array
        ↓
Loop processes the expenses
        ↓
Total and balance are calculated
        ↓
DOM is updated
        ↓
Dashboard displays the new information
```

## Challenges and Solutions

### Challenge 1: Making the dashboard dynamic

The original dashboard contained mostly hardcoded information.

**Solution:**
JavaScript was used to calculate totals and update the dashboard automatically.

### Challenge 2: Displaying new expenses

New expenses needed to appear on the webpage after being added.

**Solution:**
The expense was added to the array and DOM manipulation was used to display it in Recent Activity.

### Challenge 3: Checking the budget status

The application needed to know whether the user was within or over their budget.

**Solution:**
Conditional statements were used to compare the budget with total expenses.

## Project Files

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Technologies Used

* HTML5
* CSS3
* JavaScript

## Conclusion

SpendWise was improved from a static dashboard into an interactive budget tracker. JavaScript conditionals, arrays, loops, DOM manipulation, functions, and event listeners were used to make the application respond to user actions and update the dashboard dynamically.
