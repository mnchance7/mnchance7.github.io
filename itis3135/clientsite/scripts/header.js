document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)'; // Enlarges the link
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)'; // Returns to normal size
    });
});