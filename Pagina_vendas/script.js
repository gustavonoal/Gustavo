document.addEventListener('DOMContentLoaded', function() {
    // Scroll suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Animação ao rolar para cards
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card:not(.additional-feature)');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight * 0.85;
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Configuração inicial dos cards animados
    document.querySelectorAll('.feature-card:not(.additional-feature)').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Função genérica para criar e abrir o modal (para cards de features e steps)
    function openModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'custom-modal';
        modal.innerHTML = `
            <div class="custom-modal-content">
                <span class="custom-modal-close">&times;</span>
                <h3>${title}</h3>
                ${content}
            </div>
        `;
        document.body.appendChild(modal);

        setTimeout(() => {
            modal.classList.add('open');
        }, 10);

        const closeModal = () => {
            modal.classList.remove('open');
            setTimeout(() => {
                modal.remove();
            }, 300);
        };

        modal.querySelector('.custom-modal-close').onclick = closeModal;
        modal.onclick = (e) => {
            if (e.target === modal) {
                closeModal();
            }
        };
    }

    // Adiciona evento de clique para os cards da seção "O Que Você Vai Aprender"
    document.querySelectorAll('.feature-card').forEach(card => {
        const detailedContent = card.querySelector('.detailed-content');
        if (detailedContent) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function() {
                const title = this.querySelector('h3').innerText;
                const content = this.querySelector('.detailed-content').innerHTML;
                openModal(title, content);
            });
        }
    });

    // Adiciona evento de clique para os containers da seção "Como Funciona o Curso"
    document.querySelectorAll('.step-container').forEach(step => {
        const detailedContent = step.querySelector('.detailed-content');
        if (detailedContent) {
            step.style.cursor = 'pointer';
            step.addEventListener('click', function() {
                const title = this.querySelector('h3').innerText;
                const content = this.querySelector('.detailed-content').innerHTML;
                openModal(title, content);
            });
        }
    });

    // Efeito hover nos cards de preço
    document.querySelectorAll('.pricing-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.1)';
            }
        });
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = '';
                this.style.boxShadow = '';
            } else {
                this.style.transform = 'translateY(-20px)';
            }
        });
    });

    // Lógica para o Toggle Theme
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Lógica para o Modal de Contato com número de celular aleatório
    const contactModal = document.getElementById('contact-modal');
    const openContactButtons = document.querySelectorAll('.open-contact-modal-button');
    const closeContactModalButton = contactModal.querySelector('.custom-modal-close');
    const phoneNumberElement = document.getElementById('random-phone-number');
    const copyButton = contactModal.querySelector('.copy-button');

    function generateRandomPhoneNumber() {
        // Gera um número de 11 dígitos, como se fosse um celular com DDD (XX) XXXXX-XXXX
        let ddd = Math.floor(Math.random() * (99 - 11 + 1) + 11);
        let part1 = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
        let part2 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
        return `(${ddd}) ${part1}-${part2}`;
    }

    function openContactModal() {
        const randomNumber = generateRandomPhoneNumber();
        phoneNumberElement.textContent = randomNumber;
        contactModal.classList.add('open');

        // Adiciona um link para o WhatsApp no número
        const cleanNumber = randomNumber.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        phoneNumberElement.onclick = () => {
            window.open(`https://wa.me/55${cleanNumber}`, '_blank');
        };

        // Lógica de copiar o número
        copyButton.onclick = () => {
            navigator.clipboard.writeText(cleanNumber).then(() => {
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Copiado!';
                setTimeout(() => {
                    copyButton.textContent = originalText;
                }, 2000);
            }).catch(err => {
                console.error('Falha ao copiar o número:', err);
            });
        };
    }

    function closeContactModal() {
        contactModal.classList.remove('open');
    }

    openContactButtons.forEach(button => {
        button.addEventListener('click', openContactModal);
    });

    closeContactModalButton.addEventListener('click', closeContactModal);

    window.addEventListener('click', (event) => {
        if (event.target === contactModal) {
            closeContactModal();
        }
    });
});