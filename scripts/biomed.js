document.addEventListener("DOMContentLoaded", function () {
    var mainContentDiv = document.getElementById('main-content');

    // Fetch and insert the content
    fetch('main-content.html')
        .then(response => response.text())
        .then(html => {
            mainContentDiv.innerHTML = html;
        })
        .catch(error => console.error('Error loading content:', error));
});

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

function searchChatGPT() {
    // Handle ChatGPT search
}
