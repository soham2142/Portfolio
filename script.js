document.addEventListener("DOMContentLoaded", function () {
    // Contact Me Button → Redirects to WhatsApp
    document.querySelector(".contact").addEventListener("click", function () {
        const phoneNumber = "+919421917247"; // Replace with your WhatsApp number
        const message = "Hello, I would like to connect!";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappURL;
    });

    // Resume Button → Opens Resume in a New Tab
    document.querySelector(".navbar a[href='#resume']").addEventListener("click", function (event) {
        event.preventDefault();
        const resumeURL = "Resume.pdf"; // Change this to your actual resume file path
        window.open(resumeURL, "_blank");
    });

    // Function to Open Modal
    function openModal(modalId) {
        let modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "flex";
            modal.classList.add("show");
        }
    }

    // Function to Close Modal
    function closeModal(modalId) {
        let modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "none";
            modal.classList.remove("show");
        }
    }

    // Open Experience Modal
    document.querySelector(".navbar a[href='#experience']").addEventListener("click", function (event) {
        event.preventDefault();
        openModal("experience-modal");
    });

    // Open Education Modal
    document.querySelector(".navbar a[href='#education']").addEventListener("click", function (event) {
        event.preventDefault();
        openModal("education-modal");
    });

    // Close Modals on Clicking "X"
    document.querySelectorAll(".close").forEach(button => {
        button.addEventListener("click", function () {
            this.parentElement.parentElement.style.display = "none";
        });
    });

    // Close Modal when Clicking Outside the Content
    window.onclick = function (event) {
        document.querySelectorAll(".modal").forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    };

    // Scroll to Projects Section on Click
    document.querySelector(".navbar a[href='#projects']").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    });

    // Hire Me Button → Opens Email Client
    document.querySelector(".btn-1").addEventListener("click", function () {
        const email = "2709soham@gmail.com";
        const subject = "Job Opportunity";
        const body = "Hello Soham, I would like to discuss a job opportunity with you.";
        const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoURL;
    });
});
