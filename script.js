

document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully.");

    

    // Contact Me Button → Redirects to WhatsApp
    document.querySelector(".contact").addEventListener("click", function () {
        const phoneNumber = "919421917247"; // Remove +
        const message = "Hello, I would like to connect!";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        console.log("Redirecting to:", whatsappURL);
        window.location.href = whatsappURL;
    });

    // Resume Button → Opens Resume in a New Tab
    document.getElementById("resume-btn").addEventListener("click", function (event) {
        event.preventDefault();
        const resumeURL = "Resume.pdf"; // Make sure Resume.pdf is in the right location
        console.log("Opening resume:", resumeURL);
        window.open(resumeURL, "_blank");
    });

    // Function to Open Modal (For Experience & Education)
    function openModal(modalId) {
        let modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "flex";
            modal.classList.add("show");
            console.log(`Opened modal: ${modalId}`);
        } else {
            console.log(`Modal not found: ${modalId}`);
        }
    }

    // Function to Close Modal
    function closeModal(modal) {
        modal.style.display = "none";
        modal.classList.remove("show");
        console.log(`Closed modal: ${modal.id}`);
    }

    // Open Experience Modal
    document.getElementById("experience-btn").addEventListener("click", function (event) {
        event.preventDefault();
        openModal("experience-modal");
    });

    // Open Education Modal
    document.getElementById("education-btn").addEventListener("click", function (event) {
        event.preventDefault();
        openModal("education-modal");
    });

    // Close Modals on Clicking "X"
    document.querySelectorAll(".close").forEach(button => {
        button.addEventListener("click", function () {
            let modal = this.closest(".modal");
            if (modal) {
                closeModal(modal);
            }
        });
    });

    // Close Modal when Clicking Outside the Content
    window.addEventListener("click", function (event) {
        document.querySelectorAll(".modal").forEach(modal => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Scroll to Projects Section on Click
    document.getElementById("projects-btn").addEventListener("click", function (event) {
        event.preventDefault();
        let projectsSection = document.getElementById("projects");
        if (projectsSection) {
            console.log("Scrolling to Projects Section");
            projectsSection.scrollIntoView({ behavior: "smooth" });
        } else {
            console.log("Projects section not found");
        }
    });

    // Hire Me Button → Opens Email Client
    document.querySelector(".btn-1").addEventListener("click", function () {
        const email = "2709soham@gmail.com";
        const subject = "Job Opportunity";
        const body = "Hello Soham, I would like to discuss a job opportunity with you.";
        const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        console.log("Redirecting to email:", mailtoURL);
        window.location.href = mailtoURL;
    });
});

// Scroll to Home Section on Clicking About Me
document.querySelector(".navbar a:nth-child(2)").addEventListener("click", function (event) {
    event.preventDefault();
    
    let homeSection = document.querySelector(".home");

    if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });

        // Optional: Add a class to indicate it's active (for styling)
        document.querySelectorAll(".navbar a").forEach(link => link.classList.remove("active"));
        this.classList.add("active");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Scroll to Home Section on Clicking "About Me"
    document.querySelector(".navbar a:nth-child(2)").addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(".home").scrollIntoView({ behavior: "smooth" });
    });

    // Open Contact Modal when "Contact" in list is clicked
    document.querySelector(".list li:nth-child(3) a").addEventListener("click", function (event) {
        event.preventDefault();
        openModal("contact-modal");
    });

    // Function to Open Modal
    function openModal(modalId) {
        let modal = document.getElementById(modalId);
        modal.style.display = "flex";
        modal.classList.add("show");
    }

    // Function to Close Modal
    function closeModal(modalId) {
        let modal = document.getElementById(modalId);
        modal.style.display = "none";
        modal.classList.remove("show");
    }

    // Close Modals on Clicking "X"
    document.querySelectorAll(".close").forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".modal").style.display = "none";
        });
    });

    // Close Modal when Clicking Outside the Content
    window.onclick = function (event) {
        let modals = document.querySelectorAll(".modal");
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    };
});

document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", function () {
        let answer = this.nextElementSibling;
        let span = this.querySelector("span");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            span.textContent = "+";
        } else {
            answer.style.display = "block";
            span.textContent = "-";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Function to Open Modal
    function openModal(modalId) {
        let modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "flex";
        }
    }

    // Function to Close Modal
    function closeModal(modalId) {
        let modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "none";
        }
    }

    // Open Privacy Policy Modal
    document.querySelector(".list li:nth-child(4) a").addEventListener("click", function (event) {
        event.preventDefault();
        openModal("privacy-modal");
    });

    // Close Privacy Policy Modal when clicking "X"
    document.querySelector(".close-privacy").addEventListener("click", function () {
        closeModal("privacy-modal");
    });

    // Close Modal if Clicking Outside Content
    window.addEventListener("click", function (event) {
        let privacyModal = document.getElementById("privacy-modal");
        if (event.target === privacyModal) {
            closeModal("privacy-modal");
        }
    });

    // Handle Contact Form Submission
    document.getElementById("privacy-contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        let name = document.getElementById("privacy-name").value;
        let email = document.getElementById("privacy-email").value;
        let message = document.getElementById("privacy-message").value;

        // Simulate form submission (Replace this with backend integration)
        alert(`Thank you, ${name}! Your message has been received.`);

        // Clear form fields
        document.getElementById("privacy-name").value = "";
        document.getElementById("privacy-email").value = "";
        document.getElementById("privacy-message").value = "";

        // Close modal after submission
        closeModal("privacy-modal");
    });
});

document.getElementById("whatsapp-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Your WhatsApp number (replace with your actual number)
    let phoneNumber = "+919421917247";  

    // Create WhatsApp message format
    let whatsappMessage = `Hello, I am ${name}. My email is ${email}. Here is my message: ${message}`;

    // WhatsApp URL
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect to WhatsApp
    window.location.href = whatsappURL;
});

document.addEventListener("DOMContentLoaded", function () {
    // Modal elements
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
    const closeModalBtn = document.querySelector(".close");

    // Project Data (Replace with actual details)
    const projectDetails = {
        "project1": {
            title: "Project Name 1",
            image: "project1.jpg",
            description: "Detailed description of Project 1 goes here."
        },
        "project2": {
            title: "Project Name 2",
            image: "project2.jpg",
            description: "Detailed description of Project 2 goes here."
        },
        "project3": {
            title: "Project Name 3",
            image: "project3.jpg",
            description: "Detailed description of Project 3 goes here."
        }
    };

    // Open Modal on "View Project" Button Click
    document.querySelectorAll(".view-project").forEach(button => {
        button.addEventListener("click", function () {
            let projectKey = this.getAttribute("data-project");
            let project = projectDetails[projectKey];

            if (project) {
                modalTitle.textContent = project.title;
                modalImage.src = project.image;
                modalDescription.textContent = project.description;

                modal.style.display = "flex";
            }
        });
    });

    // Close Modal
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close Modal when Clicking Outside
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
