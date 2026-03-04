# Project Blueprint

## Overview

This project is a modern web application built using framework-less technologies, including Web Components, modern CSS, and ES Modules. The goal is to create a visually appealing, interactive, and accessible user experience following the guidelines in `GEMINI.md`.

## Design and Features

### v1.2: Multi-page Application & Navigation

*   **Page Structure:** The application is structured into a main page (`index.html`) acting as a gallery or list, and a detail page (`detail.html`) to show more information about a specific item.
*   **Consistent Navigation:** A `<main-navigation>` web component has been created and added to all pages to ensure a consistent look, feel, and user experience.
*   **Data-driven Content:** The main page displays multiple user profiles. The detail page dynamically displays content based on a URL query parameter (`?user=...`), although the data is currently hardcoded in the script.
*   **Layout:** The main page uses a responsive grid layout to display profile cards.

### v1.1: Enhanced Visuals and New Component

*   **Design Improvements:** Applied a more visually appealing design using textures, shadows, colors, and fonts as per `GEMINI.md`.
*   **`<user-profile-card>` Web Component:** Introduced a new web component to display user profiles, utilizing `<slot>` for content projection.
*   **Enhanced Styling:** Added styles for the new component and improved the overall page design.

### Initial Version (v1.0)

*   **Core Structure:** `index.html`, `style.css`, `main.js`.
*   **Components:** `<simple-greeting>`.
*   **Styling:** Basic modern CSS.

## Current Plan

### Request: "code1이 메인 페이지고 나머지가 상세페이지라고 이해하면 됨. 일관성있게 만들어줘." (Understand that code1 is the main page and the rest are detail pages. Make it consistent.)

**Interpretation:** The user wants to structure the application with a main page (like a list or gallery) and detail pages, ensuring a consistent design and navigation across them.

**Steps:**

1.  **Update `blueprint.md`:** Reflect the new multi-page architecture plan.
2.  **Create `<main-navigation>` Component:** Build a reusable navigation component in `navigation.js`.
3.  **Update `main.js`:** Import the new navigation component.
4.  **Refactor `index.html` as Main Page:**
    *   Incorporate the `<main-navigation>`.
    *   Create a grid of several `<user-profile-card>` components.
    *   Link each card to a detail page with a unique identifier (e.g., `detail.html?user=1`).
5.  **Create `detail.html` as Detail Page:**
    *   Create the new HTML file.
    *   Incorporate the `<main-navigation>`.
    *   Add a script to read the user ID from the URL and display the corresponding user's data.
6.  **Enhance `style.css`:** Add styles for the navigation, page layouts, and ensure visual consistency.
7.  **Review and Verify:** Check that navigation between the main and detail pages works and the layout is consistent.
