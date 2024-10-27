// mainapp/static/js/scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('darkModeToggle');

    // Check for saved user preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
    }

    toggle.addEventListener('change', function () {
        if (toggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});
