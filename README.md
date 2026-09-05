# SpendWise Dashboard Shell

SpendWise is a responsive personal finance dashboard built as part of a CSS layout challenge. The project continues the existing Budget Tracker and focuses on creating a modern dashboard interface using CSS Grid, Flexbox, CSS custom properties, responsive design, and micro-interactions.

## Features

* Responsive sidebar navigation
* Dashboard header with user information
* Financial summary cards
* Six spending category cards
* Recent transactions section
* CSS Grid for the overall dashboard layout
* Flexbox for the sidebar, header, and dashboard cards
* CSS custom properties for the theme
* Responsive single-column layout below 768px
* Hover and keyboard focus micro-interactions
* Dark theme using `prefers-color-scheme: dark`

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* Google Fonts

## Project Files

* `index.html` – Contains the structure of the SpendWise dashboard, including the sidebar, header, summary cards, category cards, and recent activity.
* `style.css` – Contains the visual design, Grid and Flexbox layouts, theme variables, responsive styles, animations, and dark theme.

## Dashboard Categories

The dashboard includes six financial categories:

* Food
* Transport
* Rent
* Entertainment
* Savings
* Utilities

## Responsive Design

The dashboard uses a media query below 768px. On smaller screens, the layout changes to a single-column structure and the category cards stack vertically.

The responsive layout can be verified using the browser's DevTools Device Toolbar.

## Micro-interactions

Dashboard category cards include subtle hover and keyboard focus effects using:

* `transform`
* `box-shadow`
* `transition`

The animations are completed within 200ms.

## Dark Theme

A dark theme is included as a stretch goal using:

```css
@media (prefers-color-scheme: dark)
```

The dark theme is created by overriding the CSS custom properties.

## Purpose

The purpose of this project is to demonstrate how modern CSS layout techniques such as Grid and Flexbox can be used to create a clean, responsive dashboard interface without adding JavaScript functionality.
