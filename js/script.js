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
// function: for the contact form
function submitForm(event){
    event.preventDefault();
    // message to be shown
    document.getElementById("formStatus").textContent = "Thank you! Your message has been received.";
    document.getElementById("contactForm").reset(); // clear contact form
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
            proj.style.display = 'block';  // show
        }
        else {
            proj.style.display = 'none';   // hide
        }
    });
}
// function: for validating the contact form input
function submitForm(event){
    event.preventDefault();
    const form = document.getElementById("contactForm");
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const status = document.getElementById("formStatus");

    if(!name || !email || !message){
        status.textContent = "Please fill in all fields!";
        status.style.color = "red";
        status.style.opacity = 0;
        status.style.transition = "opacity 0.5s";
        setTimeout(() => status.style.opacity = 1, 10);
        return;
    }

    status.textContent = "Thank you! Your message has been received.";
    status.style.color = "green";
    status.style.opacity = 0;
    setTimeout(() => status.style.opacity = 1, 10);

    form.reset();
}
// function: dark / light mode
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('modeToggle');
    btn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}