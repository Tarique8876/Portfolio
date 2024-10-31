// Select the contact form
const form = document.querySelector('form');

// Event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission

    // Gather form data
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    // Simple validation check (can be expanded as needed)
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Display confirmation message 
    alert(`Thank you, ${name}! Your message has been sent successfully.`);

    form.reset();
});
