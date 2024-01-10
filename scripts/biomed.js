/* biomed.js */

function handleEnter(event) {
    if (event.key === "Enter") {
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

   