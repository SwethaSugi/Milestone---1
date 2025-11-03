document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page refresh

    // Get input values
    const username = document.getElementById("username").value.trim(); 
    const password = document.getElementById("password").value.trim();

    // Simple validation (example credentials)
    const validUsername = "Swetha";
    const validPassword = "Swetha@123";

    if (username === validUsername && password === validPassword) {
        // Redirect to home page if valid
        window.location.href = "home.html";
    } else {
        // Show popup message if invalid
        alert("Username or Password incorrect!");
    }
});
