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

    // User credentials and images
    const users = {
        "ifti": { password: "2213", image: "ifti.png" },
        "whahed": { password: "001", image: "whahed.jpg" }
    };

    // Function to update the profile icon
    function updateProfileIcon() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (users[username] && users[username].password === password) {
            // Remove FontAwesome icon and set background image
            icon.classList.remove("fa", "fa-user");
            icon.style.backgroundImage = `url(${users[username].image})`;
            icon.style.backgroundSize = "cover";
            icon.style.backgroundPosition = "center";
        } else {
            // Reset to default icon if password is incorrect or username is wrong
            icon.classList.add("fa", "fa-user");
            icon.style.backgroundImage = "none";
        }
    }

    // Update the profile icon when username and password fields change
    usernameInput.addEventListener("input", updateProfileIcon);
    passwordInput.addEventListener("input", updateProfileIcon);

    // Login button event listener
    loginBtn.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (users[username]) {
            if (users[username].password === password) {
                messageBox.textContent = "Login successful!";
                messageBox.style.color = "green";
            } else {
                messageBox.textContent = "Password is incorrect!";
                messageBox.style.color = "red";
            }
        } else {
            messageBox.textContent = username && password ? 
                "Username and password are incorrect!" : "User not found!";
            messageBox.style.color = "red";
        }
    });
});
