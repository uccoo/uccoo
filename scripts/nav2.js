 function loadContent(contentPage) {
            // 使用Ajax或其他方式加载内容页面并替换主内容区域
            // 例如，可以使用fetch API:
            fetch(contentPage)
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content').innerHTML = data;
                })
                .catch(error => console.error('Error loading content:', error));
        }
		

        // Function to load content
 
 