document.addEventListener("DOMContentLoaded", function() {
    let textElement = document.getElementById("animated-text");

    function flickerEffect() {
        textElement.style.visibility = (textElement.style.visibility === "visible") ? "hidden" : "visible";
    }

    setInterval(flickerEffect, 1000);
});
