# Technical Documentation

This document provides a detailed explanation of the technical structure behind my portfolio.

## 1. HTML (`index.html`)
The HTML file contains the main structure of the portfolio:
- **Header:** Displays name, tagline, navigation links, greeting, and theme toggle button.
- **Main Sections:**
    - About: Introduction and personal description.
    - Projects:  Displays categorized projects with expandable details.
    - GitHub repositories: shows latest academic assignments.
    - Skills: List of my skills.
    - Contact:  Contact form with validation messages.
- **Footer:** Includes my name.

---

### Dynamic Elements:
- Greeting message updates automatically (Good Morning!, Good Afternoon!, or Good Evening!).
- The “Read More” button toggles project descriptions.
- Theme toggle button switches between light and dark mode (saved preference).
- Smooth fade-in animation while scrolling.
- A timer that displays how long the visitor has spent on the site.
- projects filter by category using interactive buttons.
- projects sorting from a --> z and from z --> a.

---

## 2. CSS (`styles.css`)
- Defines the visual layout, including colors, fonts, and alignment.
- Adds responsive design for smaller screens.
- Implements **dark mode** and **light mode**:
    - Changes background, text, and button colors.
    - Removes any hard-to-read text to lighter colors in the dark mode.

---

## 3. JavaScript (`script.js`)
### Functions:
1. **`toggleDescription(btn)`**
    - Expands or hides the long project description.
    - Changes button text between “Read More” and “Read Less”.

2. **`submitForm(event)`**
    - Prevents page reload on form submission.
    - Checks if all fields are filled.
    - Displays success or error messages.
    - Resets the form after successful submission.
    - fades out the status message smoothly.

3. **`updateGreeting()`**
    - Checks the current time.
    - Displays a suitable greeting message in the header.

4. **`filterProjects(category)`**
    - Filters projects based on their category ("Web", "CPU/Hardware","all").
    - Hides non-matching projects.

5. **`toggleMode()`**
    - Toggles between light mode and dark mode.
    - Switches the button icon between 🌙 and ☀️.
    - saves the selected mode in LocalStorage.

6. **`loadGitHubRepos()`**
    - Fetches the public repositories from my gitHub account .
    - creates clean and styled repository cards.
    - Handles errors when cannot be opened.

7. **`sortProjects()`**
    - Sorts projects alphabetically from az or from za.
    - No reloading of the page required.

---

## 4. Overall Key Features
Greeting: Time-based message displayed in header.
Theme Toggle: Switch between light/dark mode and save it in the local storage.
Filtering: Buttons to show only selected project categories.
Read More: Expand/collapse long descriptions.
Contact Form/Validation: feedback messages.
animation: smooth scroll animations.
API integration: fetch gitHub repositories.
Timer: counts time spent on site.

##  5. Technologies Used
- **HTML**:  For overall structure and.
- **CSS**: For styling and responsive layout.
- **JavaScript**: For interactive and dynamic behaviour and advanced functionalities.