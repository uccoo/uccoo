document.addEventListener("DOMContentLoaded", function () {
     // 默认加载第二个PDF文件
      var secondLink = document.getElementById('fileList').querySelectorAll('a')[1].href;
      document.getElementById('pdfViewer').src = secondLink;
    });

    function openPasswordPrompt(pdfPath) {
      var password = prompt("Please enter the password:");
      if (password === "1a") {
        document.getElementById('pdfViewer').src = pdfPath;
      } else {
        alert("Incorrect password. Access denied.");
      }
    }