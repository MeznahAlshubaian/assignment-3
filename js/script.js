// function: for expanding the description
function toggleDescription(btn) {
    const desc = btn.previousElementSibling; // this will give us the long description
    // if the class is hidden --> long description
    if (desc.classList.contains("hidden")) {
        desc.classList.remove("hidden");
        btn.textContent = "Read Less";
        // if the class is not hidden --> short description
    } else {
        desc.classList.add("hidden");
        btn.textContent = "Read More";
    }
}

// function: for the greeting
function updateGreeting() {
    const greetingEl = document.getElementById("greeting");
    const hours = new Date().getHours();
    let greeting;
    if(hours < 12) greeting = "Good Morning, Visitor!";
    else if(hours < 18) greeting = "Good Afternoon, Visitor!";
    else greeting = "Good Evening, Visitor!";

    greetingEl.textContent = greeting;
}
updateGreeting();

// function: for filtering the projects
function filterProjects(category) {
    const projects = document.querySelectorAll('.projectDesc');
    projects.forEach(proj => {
        if (category === 'all' || proj.dataset.category === category) {
            proj.style.display = 'block';
        } else {
            proj.style.display = 'none';
        }
    });
}
const filterButtons = document.querySelectorAll('.filter-buttons button');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active to clicked button
        button.classList.add('active');
        const category = button.dataset.filter;
        filterProjects(category);
    });
});

// function: for validating the contact form input
function submitForm(event) {
    event.preventDefault();

    const form = document.getElementById("contactForm");
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const status = document.getElementById("formStatus");

    if (status.fadeTimeout) clearTimeout(status.fadeTimeout);
    let msg = "";
    let color = "";
    if (!name || !email || !message) {
        msg = "Please fill in all fields!";
        color = "#b85c5c";
    } else {
        msg = "Thank you! Your message has been received.";
        color = "#5c936d";
        form.reset();
    }

    status.textContent = msg;
    status.style.color = color;
    status.style.opacity = 0;
    status.style.transition = "opacity 0.5s ease";
    setTimeout(() => status.style.opacity = 1, 10);

    status.fadeTimeout = setTimeout(() => {
        status.style.opacity = 0;
    }, 4000);
}

// function: dark / light mode
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    const btn = document.getElementById('modeToggle');
    btn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem("mode", isDark ? "dark" : "light");
}
// saving the mode
document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("mode");

    if (savedMode === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("modeToggle").textContent = "☀️";
    }
});

// timer
let seconds = 0;
setInterval(() => {
    seconds++;
    document.getElementById("timer").textContent =
        "Time on site: " + seconds + " seconds";
}, 1000);

// fade-in animation
const fadeEls = document.querySelectorAll(".fade-in");
function fadeScroll() {
    fadeEls.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", fadeScroll);
window.addEventListener("load", fadeScroll);

// function for fetching from gitHub
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

        const repos = await response.json();
        status.textContent = "";
        repos.slice(0, 6).forEach(repo => {
            const div = document.createElement("div");
            div.classList.add("repo-card");
            div.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description available."}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;
            container.appendChild(div);
        });
    } catch (error) {
        status.textContent = "Error loading repositories.";
    }
}
document.addEventListener("DOMContentLoaded", loadGitHubRepos);

//Function for sorting projects
function sortProjects(order) {
    const grid = document.querySelector(".project-grid");
    const projects = Array.from(grid.children);

    projects.sort((a, b) => {
        const titleA = a.querySelector("h3").textContent.toLowerCase();
        const titleB = b.querySelector("h3").textContent.toLowerCase();

        if (order === "az") {
            return titleA.localeCompare(titleB);
        } else {
            return titleB.localeCompare(titleA);
        }
    });

    // Re-append the sorted items
    projects.forEach(project => grid.appendChild(project));
}
