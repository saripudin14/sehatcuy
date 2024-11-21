//nav
const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
    
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });


// Daftar
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (validateName(name) && validateEmail(email) && validatePassword(password, confirmPassword)) {
        alert('Sign up successful!');
    }
});

function validateName(name) {
    if (name.trim() === "") {
        alert("Name cannot be empty.");
        return false;
    }
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(String(email).toLowerCase())) {
        alert("Please enter a valid email.");
        return false;
    }
    return true;
}

function validatePassword(password, confirmPassword) {
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

// kontak
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (validateName(name) && validateEmail(email) && validateSubject(subject) && validateMessage(message)) {
        // Perform the action (e.g., send the data to the server)
        alert('Your message has been sent successfully!');
        // Optionally, reset the form
        document.getElementById('contactForm').reset();
    }
});

function validateName(name) {
    if (name.trim() === "") {
        alert("Name cannot be empty.");
        return false;
    }
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(String(email).toLowerCase())) {
        alert("Please enter a valid email.");
        return false;
    }
    return true;
}

function validateSubject(subject) {
    if (subject.trim() === "") {
        alert("Subject cannot be empty.");
        return false;
    }
    return true;
}

function validateMessage(message) {
    if (message.trim() === "") {
        alert("Message cannot be empty.");
        return false;
    }
    return true;
}