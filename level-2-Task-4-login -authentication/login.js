document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    // Implement authentication logic here (e.g., check against a predefined user list).
    // If successful, redirect to secured.html.
    window.location.href = "secured.html";
});
