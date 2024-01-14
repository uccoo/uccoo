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
		
// script.js

function loadContent(url) {
    var iframe = document.getElementById("contentFrame");
    
    iframe.src = url;

    // 返回 false 阻止默认事件和冒泡
    return false;
}

        // Function to load content

 