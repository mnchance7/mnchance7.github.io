document.addEventListener("DOMContentLoaded", function() {
    // Load menus
    loadMenu("mainmenu.json", "main-menu-container"); // Load main menu
    loadMenu("submenu.json", "sub-menu-container"); // Load submenu
    loadMenu("footerlinks.json", "footer-links-container"); // Load footer links

    // Update validation links to current page
    updateValidationLinks();

    function loadMenu(jsonFile, containerId) {
        fetch(jsonFile)
            .then(response => response.json())
            .then(data => {
                const menuContainer = document.getElementById(containerId);
                data.forEach(item => {
                    const menuItem = document.createElement("a");
                    menuItem.textContent = item.name;
                    menuItem.href = item.url;
                    menuContainer.appendChild(menuItem);
                    menuContainer.appendChild(document.createTextNode(" 🌲 ")); // Add separator
                });
            })
            .catch(error => console.error(`Error fetching ${jsonFile}:`, error));
    }

    function updateValidationLinks() {
        document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + encodeURIComponent(location.href));
        document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + encodeURIComponent(location.href));
        document.getElementById("validation_link_disability").setAttribute("href", "https://wave.webaim.org/report#/" + encodeURIComponent(location.href));
    }
});

function toggleStylesheets() {
    document.querySelectorAll('link[rel="stylesheet"]').forEach(e => e.disabled = !e.disabled);
}