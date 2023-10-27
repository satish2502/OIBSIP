document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("gender").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const confirmpassword = document.getElementById("registerPassword").value;
    
    // Implementing registration logic here (e.g., add the user to a database).
    // After registration, redirect to login page.
    window.location.href = "login.html";
});
