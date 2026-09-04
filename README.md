# My Budget Tracker

## Project Description


My Budget Tracker is a simple web page designed to help users keep track of their expenses. It was built using HTML and CSS based on the Budget Tracker project from Week 1.

This week's project adds an expense table, an improved expense form, multimedia content, an interactive instructions section, and advanced CSS selectors.

## Technologies Used

* HTML5
* CSS3

## Project Features

### 1. Expense Table

The project contains an expense table using proper HTML table elements:

* `<table>`
* `<thead>`
* `<tbody>`
* `<tr>`
* `<th>`
* `<td>`

The table contains four columns:

* Name
* Amount
* Category
* Date

It also includes five sample expense records.

The table is styled with borders, padding, a colored header, alternating row colors, and a hover effect.

### 2. Add Expense Form

The Add Expense section contains a proper `<form>` element.

It includes:

* Expense name input
* Amount input
* Category dropdown
* Add Expense button

The category dropdown contains five options:

* Food
* Transport
* Rent
* Entertainment
* Other

Each input has a clear and matching ID so that JavaScript can be added in future lessons.

### 3. Multimedia Content

A small budget tracker icon is displayed near the main heading using an `<img>` element.

A budgeting tips YouTube video is also embedded on the page using an `<iframe>`.

### 4. Interactive Elements

The project includes a collapsible "How to use this tracker" section using `<details>` and `<summary>`.

The table rows also have a hover effect, and the Add Expense button uses `cursor: pointer` to display the hand cursor.

### 5. Advanced CSS Selectors

The stylesheet demonstrates several advanced CSS selectors, including:

* Descendant selector: `.expenses-section td`
* Negation pseudo-class: `input:not([type="submit"])`
* Position pseudo-class: `tr:nth-child(even)`
* Focus pseudo-class: `input:focus`
* Hover pseudo-class: `tr:hover`

These selectors are used to visibly style different elements of the Budget Tracker.

## Project Structure

My-Budget-Tracker/
│
├── index.html
├── style.css
└── README.md


## Future Improvements

The Add Expense button is currently for demonstration purposes. JavaScript will be added in future lessons to allow users to enter expenses dynamically and update the expense table.

## Conclusion

This project demonstrates my understanding of HTML tables, forms, multimedia elements, interactive HTML elements, and advanced CSS selectors. It builds directly on the Budget Tracker project created in Week 1.
