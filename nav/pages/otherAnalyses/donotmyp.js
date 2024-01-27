function attemptLogin() {
      var usernameInput = document.getElementById('username');
      var passwordInput = document.getElementById('password');

      var username = usernameInput.value;
      var password = passwordInput.value;

      // Check if the username and password are correct
      if (username === "yin" && password === "1010") {
        isLoggedIn = true;

        // Hide the login container
        document.getElementById('loginContainer').style.display = 'none';

        // If the user is logged in, load the default PDF
        var secondLink = document.getElementById('fileList').querySelectorAll('a')[1].href;
        document.getElementById('pdfViewer').src = secondLink;
      } else {
        alert("Invalid username or password. Please try again.");
      }
    }