function toggleSubMenu(dropdown) {
    const subMenu = dropdown.querySelector('.sub-menu');
    const dropdownIcon = dropdown.querySelector('.dropdown-icon');
    const isSubMenuVisible = subMenu.style.display === 'flex';
    
    // Check if the click is on the dropdown icon
    if (event.target.classList.contains('dropdown-icon')) {
        subMenu.style.display = isSubMenuVisible ? 'none' : 'flex';
        dropdownIcon.style.transform = isSubMenuVisible ? 'rotate(0deg)' : 'rotate(180deg)';
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('sidebar-collapsed');
}

function loadContent(content) {
    const viewer = document.getElementById('viewer');

    // Simulate asynchronous content loading (you can replace this with actual AJAX requests)
    setTimeout(() => {
        viewer.innerHTML = `<h1>${content}</h1>`;
    }, 500);
}
function loadContent(contentName) {
    // Use AJAX or any other method to load content asynchronously
    // For simplicity, a placeholder content is used here
    const placeholderContent = `<h1>${contentName}</h1><p>This is the content for ${contentName}.</p>`;
    document.getElementById('main-content').innerHTML = placeholderContent;
}
