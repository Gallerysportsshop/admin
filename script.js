const uname = document.querySelector('#uname');
const pass = document.querySelector('#pass');
const btnContainer = document.querySelector('.btn-container');
const btn = document.querySelector('#login-btn');
const form = document.querySelector('form');
const msg = document.querySelector('.msg');
btn.disabled = true;

function shiftButton() {
    showMsg();
    const positions = ['shift-left', 'shift-top', 'shift-right', 'shift-bottom'];
    const currentPosition = positions.find(dir => btn.classList.contains(dir));
    const nextPosition = positions[(positions.indexOf(currentPosition) + 1) % positions.length];
    btn.classList.remove(currentPosition);
    btn.classList.add(nextPosition);
}

function showMsg() {
    const isEmpty = uname.value === '' || pass.value === '';
    btn.classList.toggle('no-shift', !isEmpty);

    if (isEmpty) {
        btn.disabled = true
        msg.style.color = 'rgb(218 49 49)';
        msg.innerText = 'Please fill the input fields before proceeding';
    } else {
        msg.innerText = 'Great! Now you can proceed';
        msg.style.color = '#92ff92';
        btn.disabled = false;
        btn.classList.add('no-shift')
    }
}

btnContainer.addEventListener('mouseover', shiftButton);
btn.addEventListener('mouseover', shiftButton);
form.addEventListener('input', showMsg)
btn.addEventListener('touchstart', shiftButton);











document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("uname");
    const passwordInput = document.getElementById("pass");
    const loginBtn = document.getElementById("login-btn");
    const messageBox = document.querySelector(".msg");
    const icon = document.querySelector(".icon");
    const signupBtn = document.querySelector(".signup a");
    const forgotPassBtn = document.querySelector(".action a");

    // Users with images
    const users = {
        "ifti": { password: "2213", image: "ifti.jpg" },
        "whahed": { password: "001", image: "whahed.jpg" }
    };

    // Handle login button click
    loginBtn.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (users[username] && users[username].password === password) {
            // Show profile picture
            icon.classList.remove("fa", "fa-user");
            icon.style.backgroundImage = `url(${users[username].image})`;
            icon.style.backgroundSize = "cover";
            icon.style.backgroundPosition = "center";

            // Show login success message
            messageBox.textContent = "Login Successful!";
            messageBox.style.color = "green";

            let count = 3;
            const countdown = setInterval(() => {
                messageBox.textContent = `Logging into your dashboard in ${count}...`;
                count--;

                if (count < 0) {
                    clearInterval(countdown);
                    window.location.href = "dashboard.html"; // Redirect to dashboard
                }
            }, 1000);
        } else {
            // Reset profile picture
            icon.classList.add("fa", "fa-user");
            icon.style.backgroundImage = "none";

            // Show error message
            messageBox.textContent = users[username] ? "Password is incorrect!" : "User not found!";
            messageBox.style.color = "red";
        }
    });

    // Sign-Up Pop-up
    signupBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const fullName = prompt("Enter Full Name:");
        if (!fullName) return;

        const newUsername = prompt("Enter Username:");
        if (!newUsername) return;

        const newPassword = prompt("Enter Password:");
        if (!newPassword) return;

        // Send WhatsApp Message
        sendWhatsAppMessage(`Hi, I am ${fullName}, I want to set my username as ${newUsername} to login to your portal and password as ${newPassword}. Please update me while it is done.`);
    });

    // Forgot Password Pop-up
    forgotPassBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const username = prompt("Enter your username:");
        if (!username) return;

        const newPassword = prompt("Enter new password:");
        if (!newPassword) return;

        // Send WhatsApp Message
        sendWhatsAppMessage(`Hi, I am ${username}, I want to change my password to ${newPassword}. Please update me while it is done.`);
    });

    // Function to send WhatsApp messages
    function sendWhatsAppMessage(message) {
        const phoneNumber = "+8801753557125";
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank"); // Open WhatsApp link
    }
});



