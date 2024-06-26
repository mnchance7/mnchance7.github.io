document.addEventListener("DOMContentLoaded", function() {
    loadMenu("components/mainmenu.json", "main-menu-container", "menuItems"); // Specify "menuItems" for the main menu
    // Load submenu directly since its JSON structure is an array of objects
    loadMenu("components/submenu.json", "sub-menu-container", null);  document.getElementById("toggleCssBtn").addEventListener("click", toggleStylesheets);


    // Load main menu and footer links by specifying their respective keys since their JSON structure has nested objects

    loadMenu("components/footer.json", "footer-links-container", "footerLinks", true); // Specify "footerLinks" for footer links
});

// Revised loadMenu function to accommodate optional key for nested objects
function loadMenu(jsonFile, containerId, key, isFooter = false) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            const menuContainer = document.getElementById(containerId);
            const items = key ? data[key] : data; 
            items.forEach(item => {
                const menuItem = document.createElement("a");
                menuItem.textContent = item.name;
                menuItem.href = item.url;
                menuContainer.appendChild(menuItem);
                if (items.indexOf(item) !== items.length - 1) {
                    menuContainer.appendChild(document.createTextNode(" 🌲 "));
                }
            });
            if (isFooter) {
                loadFooterContent(data);
            }
        })
        .catch(error => console.error(`Error fetching ${jsonFile}:`, error));
}

function loadFooterContent(data) {
    const footerContainer = document.getElementById("footer-links-container");
    const pageBuiltBy = document.createElement("p");
    pageBuiltBy.innerHTML = data.pageBuiltByHTML; // Ensure your JSON structure includes this key
    footerContainer.appendChild(pageBuiltBy);
    
    data.validationLinks.forEach(link => {
        const linkElement = document.createElement("a");
        linkElement.href = link.url;
        const image = document.createElement("img");
        image.src = link.imageSrc;
        image.alt = link.altText;
        linkElement.appendChild(image);
        footerContainer.appendChild(linkElement);
    });
}

function updateValidationLinks() {
    document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + encodeURIComponent(location.href));
    document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + encodeURIComponent(location.href));
    document.getElementById("validation_link_disability").setAttribute("href", "https://wave.webaim.org/report#/" + encodeURIComponent(location.href));
}
function validateHTML() {
    window.open('https://validator.w3.org/nu/?doc=' + encodeURIComponent(window.location.href), '_blank');
}

function validateCSS() {
    window.open('https://jigsaw.w3.org/css-validator/validator?uri=' + encodeURIComponent(window.location.href), '_blank');
}

function validateAIM() {
    window.open('https://wave.webaim.org/report#/' + encodeURIComponent(window.location.href), '_blank');
}

function toggleStylesheets() {
    document.querySelectorAll('link[rel="stylesheet"]').forEach(e => e.disabled = !e.disabled);
}