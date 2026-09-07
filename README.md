# SpendWise Budget Tracker

## Project Description

SpendWise is a budget tracking application that helps users manage their budget and expenses. The project uses HTML and CSS for the interface and JavaScript to process budget information, calculate expenses, and determine the remaining balance.

## JavaScript Concepts Implemented

The project demonstrates the following JavaScript concepts:

* Variables
* Data types
* User input
* Number conversion
* Arithmetic calculations
* Functions
* Console output

## Variables

Variables are used to store important budgeting information such as the user's budget, expenses, and remaining balance.

For example, the application stores the budget and expense values in variables before performing calculations.

## User Input

The application collects information from the user using JavaScript `prompt()`.

The user is asked to enter:

1. Their budget in Kenyan Shillings.
2. Their total expenses in Kenyan Shillings.

The input is then converted into numbers using `Number()` so that calculations can be performed.

## Budget Calculations

SpendWise calculates the remaining balance by subtracting total expenses from the budget.

**Remaining Balance = Budget - Expenses**

For example:

* Budget: KSh 10,000
* Expenses: KSh 3,500
* Remaining Balance: KSh 6,500

## Functions

A reusable `calculateBalance()` function is used to perform the budget calculation.

Functions help organize the JavaScript code and make the calculation reusable with different budget and expense values.

## Displaying Results

The calculated results are displayed in the browser console.

The console displays:

* Budget
* Expenses
* Remaining Balance

## Project Files

* `index.html` — Contains the SpendWise webpage structure.
* `style.css` — Contains the styling and layout.
* `script.js` — Contains the JavaScript logic.
* `README.md` — Contains information about the project and JavaScript implementation.
