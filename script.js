// JavaScript file (script.js)
document.addEventListener("DOMContentLoaded", function() {

    const likeButtons = document.querySelectorAll(".like-btn");
    likeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            button.style.display = "dislike";
            button.nextElementSibling.style.display = "inline-block"; // Display the corresponding Dislike button
        });
    });

    const dislikeButtons = document.querySelectorAll(".dislike-btn");
    dislikeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            button.style.display = "none";
            button.previousElementSibling.style.display = "inline-block"; // Display the corresponding Like button
        });
    });
});

