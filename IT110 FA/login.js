document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const errorContainer = document.querySelector('.error-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Reset previous error messages
        errorContainer.innerHTML = '';

        try {
            // Validate email
            const email = emailInput.value.trim();
            if (!email) {
                throw new Error('Email is required');
            }
            if (!isValidEmail(email)) {
                throw new Error('Invalid email format');
            }

            // Validate password
            const password = passwordInput.value.trim();
            if (!password) {
                throw new Error('Password is required');
            }
            if (password.length < 8) {
                throw new Error('Password must be at least 8 characters long');
            }

            // Redirect to another webpage upon successful login
            window.location.href = 'https://getuikit.com'; // Replace with your desired URL
        } catch (error) {
            // Handle errors and display in the console
            console.error(error);

            // Display errors in the HTML
            const errorElement = document.createElement('div');
            errorElement.classList.add('uk-alert', 'uk-alert-danger');
            errorElement.textContent = error.message;
            errorContainer.appendChild(errorElement);
        } finally {
            // You can perform cleanup or additional actions here if needed
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
});
