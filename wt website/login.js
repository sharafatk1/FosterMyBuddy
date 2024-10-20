document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessageDiv = document.getElementById('error-message');

    // Clear previous error messages
    errorMessageDiv.textContent = '';

    // Password criteria
    const passwordCriteria = {
        length: password.length >= 8, // At least 8 characters
        uppercase: /[A-Z]/.test(password), // At least one uppercase letter
        lowercase: /[a-z]/.test(password), // At least one lowercase letter
        number: /\d/.test(password), // At least one number
        specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password) // At least one special character
    };

    // Check if password meets criteria
    const errors = [];
    if (!passwordCriteria.length) errors.push("at least 8 characters");
    if (!passwordCriteria.uppercase) errors.push("at least one uppercase letter");
    if (!passwordCriteria.lowercase) errors.push("at least one lowercase letter");
    if (!passwordCriteria.number) errors.push("at least one number");
    if (!passwordCriteria.specialChar) errors.push("at least one special character");

    // Show error messages
    if (errors.length > 0) {
        errorMessageDiv.textContent = "Password must contain: " + errors.join(", ") + ".";
        return; // Stop further execution
    }

    // If the password is valid, log the values (or handle the login)
    console.log("Username:", username);
    console.log("Password:", password);

    // Redirect to the same page after successful login
    window.location.href = "login.html"; // Adjust if the page name is different
});
