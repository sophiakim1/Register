function signup() {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password-confirm').value;

    // Password to be at least 8 characters, one uppercase, one lowercase, one digit, one symbol)
    const reg_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8}/;

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Check if all field is filled
    if (!firstname || !lastname || !username || !password) {
        alert('All fields are required');
        return;
    }

    // Check if the password meets the criteria
    if (!reg_password.test(password)) {
        alert('Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one digit, and one symbol.');
        return;
    }

    // Display this alert if all conditions are met
    alert('Sign up successful!');
}