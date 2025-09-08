document.addEventListener('DOMContentLoaded', () => {
    const recipeTitleEl = document.getElementById('recipe-title');
    const recipeDescriptionEl = document.getElementById('recipe-description');
    const ingredientsListEl = document.getElementById('ingredients-list');
    const stepNumberEl = document.getElementById('step-number');
    const stepImageEl = document.getElementById('step-image');
    const stepTextEl = document.getElementById('step-text');
    const timerDisplayEl = document.getElementById('timer-display');
    const timerMinutesEl = document.getElementById('timer-minutes');
    const timerSecondsEl = document.getElementById('timer-seconds');
    const stepCompletedCheckbox = document.getElementById('step-completed-checkbox');
    const prevStepBtn = document.getElementById('prev-step-btn');
    const nextStepBtn = document.getElementById('next-step-btn');
    const restartRecipeBtn = document.getElementById('restart-recipe-btn');
    const messageBox = document.getElementById('message-box');
    const messageText = document.getElementById('message-text');
    const closeMessageBtn = document.getElementById('close-message-btn');

    // Exemplo de receita
    const recipe = {
        name: 'Bolo de Chocolate Simples',
        description: 'Um bolo de chocolate simples e delicioso para qualquer ocasião.',
        ingredients: [
            '2 xícaras de farinha de trigo',
            '1 xícara de açúcar',
            '1 xícara de leite',
            '1/2 xícara de óleo',
            '3 ovos',
            '1 xícara de chocolate em pó',
            '1 colher de sopa de fermento em pó',
            '1 pitada de sal',
            'Margarina para untar',
            'Farinha para polvilhar'
        ],
        steps: [
            {
                text: 'Pré-aqueça o forno a 180°C e unte uma forma com margarina e farinha.',
                image: 'img/passo 1.jpg',
                timer: 0
            },
            {
                text: 'Em uma tigela, misture os ingredientes secos: farinha, açúcar, chocolate em pó e sal.',
                image: 'img/passo 2.jpg',
                timer: 60
            },
            {
                text: 'Adicione os ovos, o leite e o óleo. Misture bem até obter uma massa homogênea.',
                image: 'img/passo 3.jpg',
                timer: 60
            },
            {
                text: 'Acrescente o fermento e mexa delicadamente.',
                image: 'img/passo 4.jpg',
                timer: 60
            },
            {
                text: 'Despeje a massa na forma e leve ao forno por aproximadamente 40 minutos.',
                image: 'img/passo 5.jpg',
                timer: 5  // só como exemplo, normalmente seria 2400s (40min)
            }
        ]
    };

    let currentStepIndex = 0;
    let timerInterval = null;
    let timerRemaining = 0;

    function showMessage(message) {
        messageText.textContent = message;
        messageBox.style.display = 'flex';
    }

    function hideMessage() {
        messageBox.style.display = 'none';
    }

    function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return {
            minutes: minutes.toString().padStart(2, '0'),
            seconds: seconds.toString().padStart(2, '0')
        };
    }

    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }

    function startStepTimer(durationInSeconds) {
        stopTimer();
        timerRemaining = durationInSeconds;
        timerDisplayEl.style.display = 'block';

        const updateDisplay = () => {
            const { minutes, seconds } = formatTime(timerRemaining);
            timerMinutesEl.textContent = minutes;
            timerSecondsEl.textContent = seconds;
        };

        updateDisplay();

        timerInterval = setInterval(() => {
            timerRemaining--;
            updateDisplay();

            if (timerRemaining <= 0) {
                stopTimer();
                showMessage('⏰ Tempo esgotado para este passo!');
                timerDisplayEl.style.display = 'none';
            }
        }, 1000);
    }

    function displayStep(index) {
        stopTimer();
        const step = recipe.steps[index];
        stepNumberEl.textContent = `Passo ${index + 1} de ${recipe.steps.length}`;
        stepTextEl.textContent = step.text;

        if (step.image) {
            stepImageEl.src = step.image;
            stepImageEl.style.display = 'block';
        } else {
            stepImageEl.style.display = 'none';
        }

        if (step.timer && step.timer > 0) {
            startStepTimer(step.timer);
        } else {
            timerDisplayEl.style.display = 'none';
        }

        stepCompletedCheckbox.checked = false;
        stepCompletedCheckbox.disabled = false;

        prevStepBtn.disabled = index === 0;

        if (index === recipe.steps.length - 1) {
            nextStepBtn.textContent = 'Finalizar Receita';
        } else {
            nextStepBtn.textContent = 'Próximo';
        }
    }

    function handleNextStep() {
        if (currentStepIndex < recipe.steps.length - 1) {
            currentStepIndex++;
            displayStep(currentStepIndex);
        } else {
            showMessage('🎉 Parabéns! Você concluiu a receita. Bom apetite!');
            nextStepBtn.disabled = true;
            stepCompletedCheckbox.disabled = true;
            stopTimer();
        }
    }

    function handlePreviousStep() {
        if (currentStepIndex > 0) {
            currentStepIndex--;
            displayStep(currentStepIndex);
        }
    }

    function handleStepCompletedCheckbox() {
        if (stepCompletedCheckbox.checked) {
            showMessage(`✅ Passo ${currentStepIndex + 1} marcado como concluído!`);
            timerDisplayEl.style.display = 'none';
            stopTimer();
        } else {
            showMessage(`Passo ${currentStepIndex + 1} desmarcado.`);
        }
    }

    function restartRecipe() {
        if (confirm('Tem certeza que deseja reiniciar a receita do início?')) {
            currentStepIndex = 0;
            displayStep(currentStepIndex);
            showMessage('🔄 Receita reiniciada!');
            nextStepBtn.disabled = false;
        }
    }

    function initializeRecipe() {
        recipeTitleEl.textContent = recipe.name;
        recipeDescriptionEl.textContent = recipe.description;

        ingredientsListEl.innerHTML = '';
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsListEl.appendChild(li);
        });

        displayStep(currentStepIndex);
    }

    // Eventos
    prevStepBtn.addEventListener('click', handlePreviousStep);
    nextStepBtn.addEventListener('click', handleNextStep);
    stepCompletedCheckbox.addEventListener('change', handleStepCompletedCheckbox);
    restartRecipeBtn.addEventListener('click', restartRecipe);
    closeMessageBtn.addEventListener('click', hideMessage);

    messageBox.addEventListener('click', (e) => {
        if (e.target === messageBox) {
            hideMessage();
        }
    });

    // Inicialização
    initializeRecipe();
});
