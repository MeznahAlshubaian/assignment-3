
# AI Usage Report
This report documents how AI tools were used (chatGPT by OpenAI) responsibly and effectively during the creation of the portfolio.

## Purpose of AI Use
AI (ChatGPT) was used as a **learning assistant** to:
- Suggest improvements for the structure of HTML, CSS, and JavaScript files.
- Help suggesting advanced functionalities that would suit my portfolio such as:
    - The **Dark/Light mode toggle** button with saved preference.
    - The **time-based greeting** message.
    - The **GitHub API integration** to display latest repositories.
    - The **timer** to count the time spent on the website.
- Provide debugging and fixing errors.

---

## Tools Used
- **ChatGPT / OpenAI**: Code suggestions, help debugging, explanations

---
## Example of AI-Suggested Code
### Saving dark/light mode using localStorage
AI suggested enhancing the theme toggle by saving the user’s preference so the mode stays the same even after page reload.
**AI-Suggested code:**
```javascript
document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
        document.body.classList.add("dark-mode");
    }
});
```

- I integrated this code in **script.js** and connected it with my existing toggleMode() function.
- added the logic to update the button icon automatically when the dar mode loads.
- Modified background and text colors for better readability in dark mode.

**A small snippet of the toggleMode() function:**
```javascript
  localStorage.setItem("mode", isDark ? "dark" : "light");
```

### GitHub API integration
AI helped me fetch my GitHub repositories and display them dynamically on the page.
**AI-Suggested code:**
```javascript
const response = await fetch(`https://api.github.com/users/${username}/repos`);
const repos = await response.json();
```

- I integrated this code in **script.js** and built a function around it (loadGitHupRepos()).
- Limited the display to the first 6 repositories.
- Styled each repository in a card component.
- Added status messages and error handling for failed requests

**A small snippet of the loadGitHupRepos() function:**
```javascript
  async function loadGitHubRepos() {
    const username = "MeznahAlshubaian";
    const status = document.getElementById("githubStatus");
    const container = document.getElementById("githubRepos");

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);

        if (!response.ok) {
            status.textContent = "Failed to load repos.";
            return;
        }
```
---

## Benefits
- Reduced time spent writing long codes.
- Faster debugging compared to searching manually.
- Improved understanding of JavaScript best practices.
- Enhance code structure and organization.

## Challenges
- Adjusting AI-generated code to match the existing structure.
- Balancing AI suggestions with my own design style. 

## Learning Outcomes
Using AI in this assignment helped me in many ways such as:
- I gained a deeper understanding of HTML, CSS, and JavaScript structure through reviewing and editing its suggestions.
- I learned how to start and plan an outline before starting to write the official code.
- It helped in strengthening my problem-solving skills by comparing multiple solutions and simplifying them.

## Using AI Responsibly
- AI suggestions were not copied without modifications, I reviewed, simplified, and made sure I understand each part clearly.
- AI was treated as a support tool and it did not replace my own coding and learning experience.
- I also ensured that the assignment remained consistent with my current understanding and with the requirements given.