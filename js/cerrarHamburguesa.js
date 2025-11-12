
document.addEventListener('click', (e) => {
    const esClickEnToggle = toggle.contains(e.target);
    const esClickEnMenu = menu.contains(e.target);

    if (!esClickEnToggle && !esClickEnMenu) {
        menu.classList.remove('active');
    }
});
