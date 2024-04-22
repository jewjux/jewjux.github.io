function toggleTheme() {
    // Access the <body> element of the page
    const bodyElement = document.body;
    
    // Toggle the 'dark-mode' class on the <body>
    bodyElement.classList.toggle('dark-mode');
}

var themeToggleButton = document.getElementById('toggleButton');

themeToggleButton.onclick = toggleTheme;