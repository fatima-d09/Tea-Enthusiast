document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        // Prevent form submission for demonstration
        event.preventDefault();

        // Basic validation for demonstration purposes
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
        } else {
            // Here you would typically send the form data to a server
            alert('Thank you for contacting us!');
        }
    });
});
