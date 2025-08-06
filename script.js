document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully.");

    document.getElementById("resume-btn").addEventListener("click", function (event) {
        event.preventDefault();
        window.open("Resume.pdf", "_blank");
    });
});