document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href');
            const section = document.querySelector(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Toggle Mobile Navigation
    const toggleButton = document.querySelector('.toggle-button');
    const navLinksContainer = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });

    // Form Validation
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        let isValid = true;

        [name, email, message].forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
