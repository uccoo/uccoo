

var users = [
    { username: "yin", password: CryptoJS.MD5("1010").toString() },
    { username: "test", password: CryptoJS.MD5("1010").toString() },
    // Add more users as needed
];

function login() {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = CryptoJS.MD5(document.getElementById("password").value).toString(); // 对密码进行哈希处理

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