// mainapp/static/js/scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const harrisonFordToggle = document.getElementById('harrisonFordToggle');

    // Check for saved user preferences
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    if (localStorage.getItem('harrison-ford-theme') === 'enabled') {
        document.body.classList.add('harrison-ford-theme');
        harrisonFordToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', function () {
        if (darkModeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });

    harrisonFordToggle.addEventListener('change', function () {
        if (harrisonFordToggle.checked) {
            document.body.classList.add('harrison-ford-theme');
            localStorage.setItem('harrison-ford-theme', 'enabled');
        } else {
            document.body.classList.remove('harrison-ford-theme');
            localStorage.setItem('harrison-ford-theme', 'disabled');
        }
    });
});

