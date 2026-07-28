function login(username, password) {
    return username === "admin" && password === "123";
}

// Browser logic
if (typeof document !== "undefined") {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const message = document.getElementById("message");

        if (login(username, password)) {
            message.textContent = "Login successful!";
            message.style.color = "green";
        } else {
            message.textContent = "Invalid username or password.";
            message.style.color = "red";
        }
    });
}

// Export for Jest
if (typeof module !== "undefined") {
    module.exports = { login };
}
