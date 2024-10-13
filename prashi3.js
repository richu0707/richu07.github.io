// Smooth scroll to "About Us" section when "Learn More" is clicked
document.getElementById('learn-more-btn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'  // Smooth scrolling
    });
});
