// function validateRegisterForm() {
//     const referrerName = document.getElementById('referrer-name').value;
//     const password = document.getElementById('password').value;
//     const rePassword = document.getElementById('re-password').value;
//     const email = document.getElementById('email').value;
//     const cellNumber = document.getElementById('cell-number').value;
//     const accountName = document.getElementById('account-name').value;
//     const bankName = document.getElementById('bank-name').value;
//     const accountNumber = document.getElementById('account-number').value;
//     const accountType = document.getElementById('account-type').value;

//     if (!referrerName || !password || !rePassword || !email || !cellNumber || !accountName || !bankName || !accountNumber || !accountType) {
//         alert("All fields are required!");
//         return false;
//     }

//     if (password !== rePassword) {
//         alert("Passwords do not match!");
//         return false;
//     }

//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailRegex.test(email)) {
//         alert("Please enter a valid email address.");
//         return false;
//     }

//     const phoneRegex = /^[0-9]{10}$/;
//     if (!phoneRegex.test(cellNumber)) {
//         alert("Please enter a valid 10-digit phone number.");
//         return false;
//     }

//     const accountNumberRegex = /^[0-9]{9,18}$/;
//     if (!accountNumberRegex.test(accountNumber)) {
//         alert("Please enter a valid account number.");
//         return false;
//     }

//     return true;
// }


// function validateSignInForm() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     if (!email || !password) {
//         alert("Please fill in all fields.");
//         return false;
//     }

//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailRegex.test(email)) {
//         alert("Please enter a valid email address.");
//         return false;
//     }

//     return true;
// }


// function forgotPassword() {
//     const email = prompt("Please enter your email address to find your password:");
//     if (email) {
//         alert(`A password reset link has been sent to ${email}.`);
//     } else {
//         alert("Please enter a valid email address.");
//     }
// }


// function forgotReferrerName() {
//     const email = prompt("Please enter your email address to find your referrer name:");
//     if (email) {
//         alert(`The referrer name associated with ${email} has been sent to your email.`);
//     } else {
//         alert("Please enter a valid email address.");
//     }
// }


// document.querySelector('.signup-box input[type="button"]').addEventListener('click', function () {
//     if (validateRegisterForm()) {
//         alert("Registration successful!");
//     }
// });

// document.querySelector('.login-box input[type="button"]').addEventListener('click', function () {
//     if (validateSignInForm()) {
//         alert("Sign-in successful!");
//     }
// });


// document.querySelector('.forgot-section .action-button').addEventListener('click', function () {
//     forgotPassword();
// });

// document.querySelectorAll('.forgot-section .action-button')[1].addEventListener('click', function () {
//     forgotReferrerName();
// });


// document.getElementById("referral-form").addEventListener("submit", function (e) {
//     e.preventDefault();
//     alert("Referral form submitted successfully!");
// });

// // Highlight the current active navigation link
// document.querySelectorAll('nav a').forEach(link => {
//     if (link.href === window.location.href) {
//         link.classList.add('active');
//     }
// });


document.getElementById("referral-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const id = document.getElementById("id").value;
    const clientName = document.getElementById("client-name").value;
    const clientCell = document.getElementById("client-cell").value;
    const clientEmail = document.getElementById("client-email").value;
    const companyName = document.getElementById("company-name").value;
    const price = document.getElementById("price").value;
    const containers = document.getElementById("containers").value;
    const town = document.getElementById("town").value;
    const details = document.getElementById("details").value;

    // Create a referral object
    const referralData = {
        id,
        clientName,
        clientCell,
        clientEmail,
        companyName,
        price,
        containers,
        town,
        details,
        date: new Date().toLocaleDateString(), // Add submission date
    };

    // Store the referral data in local storage
    let referrals = JSON.parse(localStorage.getItem("referrals")) || [];
    referrals.push(referralData);
    localStorage.setItem("referrals", JSON.stringify(referrals));

    alert("Referral submitted successfully!");

    // Reset the form
    this.reset();
});

