document.getElementById('signup-group').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    if (password !== confirmPassword) {
        message.textContent = 'Passwords do not match.';
        message.style.color = 'red';
    } else {
        window.location.href = 'submit_signup.html';

        // Here you can add any additional actions to be performed on successful form submission
        // For example, sending the form data to the server:
        // this.submit();

        // Simulating successful submission (for demonstration purposes):
        setTimeout(() => {
            message.textContent = '';
            document.getElementById('signup-group').reset();
        }, 2000);
    }
});
