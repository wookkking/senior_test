# Project Blueprint

## Overview

This project is a modern web application built using framework-less technologies, including Web Components, modern CSS, and ES Modules. The goal is to create a visually appealing, interactive, and accessible user experience following the guidelines in `GEMINI.md`.

## Design and Features

### v1.3: Dark/Light Mode Theme

*   **Theme Switcher:** A `<theme-switcher>` web component is added to the main navigation, allowing users to toggle between light and dark modes.
*   **Automatic Theme Detection:** The application automatically detects the user's system preference (`prefers-color-scheme`) for the initial theme.
*   **Persistence:** The user's selected theme is saved in `localStorage` to persist across sessions.
*   **CSS Variables:** The stylesheet is refactored to use CSS custom properties for colors, enabling easy theming.

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

### Request: "다크모드와 화이트모드를 추가해서 git으로 push해줘." (Add dark mode and white mode and push to git.)

**Interpretation:** The user wants to add a theme-switching capability (dark and light modes) to the application.

**Steps:**

1.  **Update `blueprint.md`:** Document the new dark mode feature and implementation plan.
2.  **Create `<theme-switcher>` Component:** Build a reusable web component in `theme-switcher.js` to handle theme toggling.
3.  **Update `main.js`:** Import the new `theme-switcher.js` module.
4.  **Integrate Switcher into Navigation:** Modify `navigation.js` to include the `<theme-switcher>` component in the main navigation bar.
5.  **Refactor `style.css` for Theming:**
    *   Define color palettes for both light and dark themes using CSS variables.
    *   Apply a `[data-theme="dark"]` selector to switch between themes.
    *   Update component styles to use the new color variables.
6.  **Git Push:** Commit all changes and push them to the GitHub repository.
