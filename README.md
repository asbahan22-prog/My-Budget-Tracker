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




# My Budget Tracker

My Budget Tracker is a simple web application for recording and viewing personal expenses. It was built using HTML5 and CSS3 as part of a web development project.

## Features

* Add Expense form
* Expense table with categories and dates
* Consistent color palette
* Google Fonts for improved typography
* Styled form inputs and buttons
* Alternating table rows
* Card-style sections using the CSS Box Model
* Responsive layout for smaller screens

## Technologies Used

* HTML5
* CSS3
* Google Fonts

## Project Files

* `index.html` – Contains the structure and content of the Budget Tracker.
* `style.css` – Contains the visual design, colors, typography, form and table styling, and Box Model layout.

## Expense Form Fields

* **Expense Name** – Enter the name or description of the expense, such as Groceries.
* **Amount** – Enter the amount spent in Kenyan Shillings (KSh).
* **Category** – Select a category such as Food, Transport, Rent, Entertainment, or Other.
* **Add Expense Button** – Used to submit the expense information.

## Purpose

The goal of this project is to create a clean, professional, and user-friendly Budget Tracker while demonstrating effective use of CSS styling and the CSS Box Model.
