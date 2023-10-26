document.querySelector('#signup form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Thank you for signing up with ${email}!`);
        // Add code to handle form submission here (e.g., send data to server)
    } else {
        alert('Please enter a valid email address.');
    }
});

document.querySelector('#login form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        alert(`Welcome, ${username}!`);
        // Add code to handle login here (e.g., authenticate user)
    } else {
        alert('Please enter both username and password.');
    }
});
