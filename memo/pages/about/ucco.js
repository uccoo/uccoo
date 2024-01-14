
    var users = [
        { username: "yin", password: "1010" },
        { username: "test", password: "1010" },
        // Add more users as needed
    ];

    function login() {
        var usernameInput = document.getElementById("username").value;
        var passwordInput = document.getElementById("password").value;

        var isValidUser = users.some(function(user) {
            return user.username === usernameInput && user.password === passwordInput;
        });

        if (isValidUser) {
            document.getElementById("loginForm").style.display = "none";
            document.getElementById("content").style.display = "block";
        } else {
            alert("Incorrect username or password. Please try again.");
        }
    }
