// ================= THEME SWITCHING =================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");

    } else {

        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-fill");

    }
});


// ================= PROJECT FILTER =================

// Array of project objects
const projects = [
    {
        name: "Veda Herbal Garden",
        category: "Web Development"
    },
    {
        name: "CodeAlpha",
        category: "Python Development"
    }
    
];

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectItems =
    document.querySelectorAll(".project-item");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter =
            button.getAttribute("data-filter");


        // Change active button
        filterButtons.forEach(btn => {

            btn.classList.remove("btn-primary");
            btn.classList.add("btn-outline-primary");

        });

        button.classList.remove("btn-outline-primary");
        button.classList.add("btn-primary");


        // Filter projects
        projectItems.forEach(project => {

            const category =
                project.getAttribute("data-category");

            if (filter === "all" || category === filter) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


// ================= FORM VALIDATION =================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // Get values
    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    // Error elements
    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const subjectError =
        document.getElementById("subjectError");

    const messageError =
        document.getElementById("messageError");

    const successMessage =
        document.getElementById("successMessage");


    // Clear old messages

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    successMessage.classList.add("d-none");


    let valid = true;


    // Name validation

    if (name === "") {

        nameError.textContent =
            "Please enter your name.";

        valid = false;

    } else if (name.length < 3) {

        nameError.textContent =
            "Name must contain at least 3 characters.";

        valid = false;

    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        valid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        valid = false;

    }


    // Subject validation

    if (subject === "") {

        subjectError.textContent =
            "Please enter a subject.";

        valid = false;

    }


    // Message validation

    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        valid = false;

    } else if (message.length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        valid = false;

    }


    // Successful submission

    if (valid) {

        successMessage.textContent =
            `Thank you, ${name}! Your message has been submitted successfully.`;

        successMessage.classList.remove("d-none");

        contactForm.reset();

    }

});


// ================= BACK TO TOP =================

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================= CURRENT YEAR =================

const currentYear =
    document.getElementById("currentYear");

currentYear.textContent =
    new Date().getFullYear();
