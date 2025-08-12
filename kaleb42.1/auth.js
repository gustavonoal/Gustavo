document.addEventListener('DOMContentLoaded', () => {

    const elements = {
        showLoginBtn: document.getElementById('show-login-btn'),
        showRegisterBtn: document.getElementById('show-register-btn'),
        loginForm: document.getElementById('login-form'),
        registerForm: document.getElementById('register-form'),
        loginMessage: document.getElementById('login-message'),
        registerMessage: document.getElementById('register-message'),
        loginUsernameInput: document.getElementById('login-username'),
        loginPasswordInput: document.getElementById('login-password'),
        registerUsernameInput: document.getElementById('register-username'),
        registerPasswordInput: document.getElementById('register-password'),
        registerEmailInput: document.getElementById('register-email')
    };

    const displayMessage = (element, message, type) => {
        if (!element) return;
        element.textContent = message;
        element.className = `message ${type}`;
        element.style.display = 'block';
        setTimeout(() => {
            element.textContent = '';
            element.className = 'message';
            element.style.display = 'none';
        }, 3000);
    };

    const getUsers = () => JSON.parse(localStorage.getItem('users')) || [];
    const saveUsers = (users) => localStorage.setItem('users', JSON.stringify(users));
    const setAuthToken = (token) => localStorage.setItem('authToken', token);
    const getAuthToken = () => localStorage.getItem('authToken');
    const isAuthenticated = () => getAuthToken() !== null;

    if (isAuthenticated()) {
        window.location.href = 'dashboard.html';
        return;
    }

    elements.showRegisterBtn.addEventListener('click', () => {
        elements.loginForm.classList.add('hidden');
        elements.registerForm.classList.remove('hidden');
        elements.showLoginBtn.classList.remove('active');
        elements.showRegisterBtn.classList.add('active');
        displayMessage(elements.loginMessage, '', '');
    });

    elements.showLoginBtn.addEventListener('click', () => {
        elements.registerForm.classList.add('hidden');
        elements.loginForm.classList.remove('hidden');
        elements.showRegisterBtn.classList.remove('active');
        elements.showLoginBtn.classList.add('active');
        displayMessage(elements.registerMessage, '', '');
    });

    elements.registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const { value: username } = elements.registerUsernameInput;
        const { value: password } = elements.registerPasswordInput;
        const { value: email } = elements.registerEmailInput;

        if (!username.trim() || !password.trim() || !email.trim()) {
            displayMessage(elements.registerMessage, 'Por favor, preencha todos os campos.', 'error');
            return;
        }

        const users = getUsers();
        if (users.some(user => user.username === username.trim())) {
            displayMessage(elements.registerMessage, 'Nome de usuário já existe.', 'error');
            return;
        }
        if (users.some(user => user.email === email.trim())) {
            displayMessage(elements.registerMessage, 'Email já cadastrado.', 'error');
            return;
        }

        const newUser = { username: username.trim(), password: password.trim(), email: email.trim() };
        users.push(newUser);
        saveUsers(users);

        displayMessage(elements.registerMessage, 'Solicitação enviada! Redirecionando para login...', 'success');
        elements.registerForm.reset();
        setTimeout(() => elements.showLoginBtn.click(), 2000);
    });

    elements.loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const { value: username } = elements.loginUsernameInput;
        const { value: password } = elements.loginPasswordInput;

        if (!username.trim() || !password.trim()) {
            displayMessage(elements.loginMessage, 'Por favor, preencha nome de usuário e senha.', 'error');
            return;
        }

        const users = getUsers();
        const user = users.find(u => u.username === username.trim() && u.password === password.trim());

        if (user) {
            const token = btoa(user.username + ':' + Date.now());
            setAuthToken(token);
            displayMessage(elements.loginMessage, 'Acesso bem-sucedido! Redirecionando...', 'success');
            setTimeout(() => window.location.href = 'dashboard.html', 1000);
        } else {
            displayMessage(elements.loginMessage, 'Nome de usuário ou senha incorretos.', 'error');
        }
    });
});