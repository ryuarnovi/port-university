$(document).ready(function() {
    $('#navbar-toggle').click(function() {
        $('#navbar-menu').toggleClass('hidden');
    });
    $('.dropdown-toggle').click(function() {
        $('#dropdown-menu').toggleClass('hidden');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const table = document.querySelector('.table');
    table.style.opacity = 1; // Set opacity to 1 to trigger the animation
    table.style.transform = 'translateY(0)'; // Reset transform to trigger slide-in
});