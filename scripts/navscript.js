// script.js

function submitForm(inputId, engine) {
  // Get the input value
  var inputValue = document.getElementById(inputId).value;

  // Formulate the search URL based on the selected search engine
  var searchUrl = (engine === 'bing') ? 'https://www.bing.com/search?q=' : 'https://www.google.com/search?q=';

  // Concatenate the search URL with the input value
  searchUrl += encodeURIComponent(inputValue);

  // Open the search results in a new tab
  window.open(searchUrl, '_blank');
}

function handleEnter(event) {
  // Handle keydown event (if needed)
}
