function publishBlog() {
  var blogContent = document.getElementById('editorTextarea').value;

  // 使用 AJAX 发送博客内容到服务器
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'save_blog.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      alert('Blog published!');
    }
  };

  var data = JSON.stringify({ content: blogContent });
  xhr.send(data);
}
