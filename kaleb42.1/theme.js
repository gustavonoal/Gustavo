document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const lightIcon = document.querySelector('.light-icon');
    const darkIcon = document.querySelector('.dark-icon');
    const body = document.body;

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            lightIcon.classList.add('hidden');
            darkIcon.classList.remove('hidden');
        } else {
            body.classList.remove('dark-theme');
            darkIcon.classList.add('hidden');
            lightIcon.classList.remove('hidden');
        }
    };

    const saveThemePreference = (theme) => {
        localStorage.setItem('theme', theme);
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    themeToggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            applyTheme('light');
            saveThemePreference('light');
        } else {
            applyTheme('dark');
            saveThemePreference('dark');
        }
    });
});