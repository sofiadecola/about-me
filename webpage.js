document.addEventListener("DOMContentLoaded", function () {
    const greetingElement = document.getElementById("greeting");
    const currentHour = new Date().getHours();

    let greetingText;
    
    if (currentHour < 12) {
        greetingText = "Good Morning from Sofia!";
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon from Sofia!";
    } else {
        greetingText = "Good Evening from Sofia!";
    }
    greetingElement.innerText = greetingText;

    const toggleWorkButton = document.getElementById("toggle-work");
    const workContent = document.getElementById("work-content");

    toggleWorkButton.addEventListener("click", function () {
        if (workContent.style.display === "none") {
            workContent.style.display = "block";
            toggleWorkButton.innerText = "Hide Work Experience";
        } else {
            workContent.style.display = "none";
            toggleWorkButton.innerText = "Show Work Experience";
        }
    });

   
    const toggleImageButton = document.getElementById("toggle-about-img");
    const aboutImage = document.getElementById("about-img");

    toggleImageButton.addEventListener("click", function () {
        if (aboutImage.style.display === "none") {
            aboutImage.style.display = "block";
            toggleImageButton.innerText = "Bye Mocha <3";
        } else {
            aboutImage.style.display = "none";
            toggleImageButton.innerText = "Show Mocha! <3";
        }
    });
});
