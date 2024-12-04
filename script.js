const name = document.getElementById('name');
const mail = document.getElementById('mail');
const pass = document.getElementById('pass');
const cpass = document.getElementById('cpass');
const gen = document.getElementById('gen');
const mnum = document.getElementById('mnum');
const btn = document.getElementById('btn');
const form = document.getElementById('form');
const otpInput = document.getElementById('check');
const otpbox = document.getElementById('otpbox');
let generatedOtp = '';

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
const mobilePattern = /^[0-9]{10}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (name.value.length < 3 || name.value.length > 16) {
        alert('Username must be between 3 and 16 characters long.');
        return;
    }

    if (pass.value !== cpass.value) {
        alert('Passwords do not match!');
        return;
    }

    if (!passwordPattern.test(pass.value)) {
        alert('Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long.');
        return;
    }

    if (!mobilePattern.test(mnum.value)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }

    if (name.value === "" || mail.value === "" || mnum.value === "" || gen.value === "Select gender" || !document.querySelector('input[type="checkbox"]:checked')) {
        alert('Please fill all the required fields!');
        return;
    }

    const otpLength = 6;
    generatedOtp = '';
    for (let i = 0; i < otpLength; i++) {
        generatedOtp += Math.floor(Math.random() * 10);
    }

    alert('Your OTP is: ' + generatedOtp);

    otpbox.style.display = 'block';
});

otpbox.addEventListener("submit", (e) => {
    e.preventDefault();

    if (otpInput.value === generatedOtp) {
        // Store the user data in localStorage
        localStorage.setItem('username', name.value);
        localStorage.setItem('password', pass.value);
        
        alert('Your registration is successful!');
        window.location.href = 'login.html'; // Redirect to the login page
    } else {
        alert('Incorrect OTP. Please try again.');
    }
});
