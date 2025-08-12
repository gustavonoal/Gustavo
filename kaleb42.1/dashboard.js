document.addEventListener('DOMContentLoaded', () => {

    const elements = {
        dashboardUsernameSpan: document.getElementById('dashboard-username'),
        dashboardEmailSpan: document.getElementById('dashboard-email'),
        logoutBtn: document.getElementById('logout-btn'),
        projectModal: document.getElementById('project-modal'),
        projectImage: document.getElementById('project-image'),
        closeModalBtn: document.querySelector('.close-btn'),
        projectLinks: document.querySelectorAll('.dashboard-options ul li a')
    };

    const getUsers = () => JSON.parse(localStorage.getItem('users')) || [];
    const getAuthToken = () => localStorage.getItem('authToken');
    const removeAuthToken = () => localStorage.removeItem('authToken');

    const getLoggedInUser = () => {
        const token = getAuthToken();
        if (!token) return null;
        try {
            const [username] = atob(token).split(':');
            const users = getUsers();
            return users.find(u => u.username === username);
        } catch (e) {
            console.error("Erro ao decodificar token:", e);
            removeAuthToken();
            return null;
        }
    };

    const initDashboard = () => {
        const loggedInUser = getLoggedInUser();
        if (loggedInUser) {
            elements.dashboardUsernameSpan.textContent = loggedInUser.username;
            elements.dashboardEmailSpan.textContent = loggedInUser.email;
        } else {
            window.location.href = 'index.html';
        }
    };

    if (elements.logoutBtn) {
        elements.logoutBtn.addEventListener('click', () => {
            removeAuthToken();
            window.location.href = 'index.html';
        });
    }

    elements.projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const linkText = e.target.closest('a').textContent.trim();
            const imageUrl = projectImages[linkText];
            
            if (imageUrl) {
                elements.projectImage.src = imageUrl;
                elements.projectModal.classList.remove('hidden');
            }
        });
    });

    elements.closeModalBtn.addEventListener('click', () => {
        elements.projectModal.classList.add('hidden');
    });

    elements.projectModal.addEventListener('click', (e) => {
        if (e.target.id === 'project-modal') {
            elements.projectModal.classList.add('hidden');
        }
    });

    initDashboard();
});