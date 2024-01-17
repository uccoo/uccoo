
function handleEnter(event) {
    // Handle Enter key press
}

function searchBing() {
    // Handle Bing search
}

function searchBaidu() {
    // Handle Baidu search
}

function searchGoogle() {
    // Handle Google search
}

function searchPerplexity() {
    // Handle Perplexity search
}


 function handleEnter(event) {
            if (event.key === "Enter") {
                // 如果按下的是回车键，则执行 Bing 搜索
                searchBing();
            }
        }

    function searchBing() {
        window.open("https://www.bing.com/search?q=" + encodeURIComponent(document.querySelector('input').value), "_blank");
    }

    function searchGoogle() {
        window.open("https://www.google.com/search?q=" + encodeURIComponent(document.querySelector('input').value), "_blank");
    }

    function searchBaidu() {
        window.open("https://www.baidu.com/s?wd=" + encodeURIComponent(document.querySelector('input').value), "_blank");
    }
	function searchPerplexity() {
    window.open("https://www.perplexity.ai/search?q=" + encodeURIComponent(document.querySelector('input').value), "_blank");
    }