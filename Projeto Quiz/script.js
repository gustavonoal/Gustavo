const questionsData = { 
    easy: [
        {
            image: 'img/Urso.jpg',
            question: 'Que animal é este?',
            answers: [
                { text: 'Jacaré', correct: false },
                { text: 'Urso', correct: true },
                { text: 'Águia', correct: false },
                { text: 'Tubarão', correct: false }
            ]
        },
        {
            image: 'img/Cristo Redentor.jpg',
            question: 'Onde fica a estátua do Cristo Redentor?',
            answers: [
                { text: 'Bahia', correct: false },
                { text: 'Mato Grosso', correct: false },
                { text: 'Porto Alegre', correct: false },
                { text: 'Rio de Janeiro', correct: true }
            ]
        },
        {
            image: 'img/Cachorro.jpg',
            question: 'Qual é o animal doméstico mais comum no mundo?',
            answers: [
                { text: 'Gato', correct: false },
                { text: 'Cachorro', correct: true },
                { text: 'Pássaro', correct: false },
                { text: 'Peixe', correct: false }
            ]
        },
        {
            image: 'img/Paris.jpg',
            question: 'Em que cidade se localiza a Torre Eiffel?',
            answers: [
                { text: 'Londres', correct: false },
                { text: 'Roma', correct: false },
                { text: 'Berlim', correct: false },
                { text: 'Paris', correct: true }
            ]
        },
        {
            image: 'img/Grêmio.jpg',
            question: 'A qual time pertence esta bandeira?',
            answers: [
                { text: 'Grêmio', correct: true },
                { text: 'Inter', correct: false },
                { text: 'Flamengo', correct: false },
                { text: 'Santos', correct: false }
            ]
        }
    ],
    medium: [
        {
            image: 'img/Grêmio.jpg',
            question: 'A qual time pertence esta bandeira?',
            answers: [
                { text: 'Grêmio', correct: true },
                { text: 'Inter', correct: false },
                { text: 'Flamengo', correct: false },
                { text: 'Santos', correct: false }
            ]
        },
        {
            image: 'img/Monalisa.jpg', 
            question: 'Quem pintou a famosa obra "Mona Lisa"?',
            answers: [
                { text: 'Vincent van Gogh', correct: false },
                { text: 'Pablo Picasso', correct: false },
                { text: 'Leonardo da Vinci', correct: true },
                { text: 'Michelangelo', correct: false }
            ]
        },
        {
            image: 'img/Amazonas.jpg',
            question: 'Qual é a maior floresta tropical do mundo?',
            answers: [
                { text: 'Floresta Negra', correct: false },
                { text: 'Floresta Amazônica', correct: true },
                { text: 'Taiga', correct: false },
                { text: 'Cerrado', correct: false }
            ]
        },
        {
            image: 'img/Paris.jpg',
            question: 'Em que cidade se localiza a Torre Eiffel?',
            answers: [
                { text: 'Londres', correct: false },
                { text: 'Roma', correct: false },
                { text: 'Berlim', correct: false },
                { text: 'Paris', correct: true }
            ]
        },
        {
            image: 'img/Piramide.jpg', 
            question: 'Qual civilização antiga construiu as pirâmides de Gizé?',
            answers: [
                { text: 'Romanos', correct: false },
                { text: 'Egípcios', correct: true },
                { text: 'Gregos', correct: false },
                { text: 'Maias', correct: false }
            ]
        },
        {
            image: 'img/Jogos.jpg', 
            question: 'Qual o jogo mais vendido do mundo?',
            answers: [
                { text: 'GTA', correct: false },
                { text: 'Minecraft', correct: true },
                { text: 'Mario', correct: false },
                { text: 'Tetris', correct: false }
            ]
        },
        {
            image: 'img/DomQuixote.jpg', 
            question: 'Quem escreveu "Dom Quixote de la Mancha?',
            answers: [
                { text: 'Fernando Pessoa', correct: false },
                { text: 'Miguel de Cervantes', correct: true },
                { text: 'Machado de Assis', correct: false },
                { text: 'William Shakespeare', correct: false }
            ]
        },
        {
            image: 'img/Filme.jpg', 
            question: 'Qual o pior filme ja criado?',
            answers: [
                { text: 'Vingadores:Guerra Infinita', correct: false },
                { text: 'Elementos', correct: false },
                { text: 'Manos: The Hands of Fate', correct: true },
                { text: 'Velozes e Furiosos 3', correct: false }
            ]
        },
        {
            image: 'img/Musica.jpg', 
            question: 'Qual o gênero de música mais ouvido do Brasil?',
            answers: [
                { text: 'Gospel', correct: false },
                { text: 'Sertanejo', correct: true },
                { text: 'Rock', correct: false },
                { text: 'Rap', correct: false }
            ]
        },
        {
            image: 'img/Newton.jpg',
            question: 'Quem formulou a Lei da Gravitação Universal?',
            answers: [
                { text: 'Albert Einstein', correct: false },
                { text: 'Isaac Newton', correct: true },
                { text: 'Galileu Galilei', correct: false },
                { text: 'Nikola Tesla', correct: false }
            ]
        }
    ],
    hard: [
        {
            image: 'img/Piramide.jpg', 
            question: 'Qual civilização antiga construiu as pirâmides de Gizé?',
            answers: [
                { text: 'Romanos', correct: false },
                { text: 'Egípcios', correct: true },
                { text: 'Gregos', correct: false },
                { text: 'Maias', correct: false }
            ]
        },
        {
            image: 'img/Cristo Redentor.jpg',
            question: 'Onde fica a estátua do Cristo Redentor?',
            answers: [
                { text: 'Bahia', correct: false },
                { text: 'Mato Grosso', correct: false },
                { text: 'Porto Alegre', correct: false },
                { text: 'Rio de Janeiro', correct: true }
            ]
        },
        {
            image: 'img/PrimeiraGuerra.jpg',
            question: 'Em que ano começou a Primeira Guerra Mundial?',
            answers: [
                { text: '1905', correct: false },
                { text: '1914', correct: true },
                { text: '1939', correct: false },
                { text: '1945', correct: false }
            ]
        },
        {
            image: 'img/Dali.jpg',
            question: 'Quem é o autor da obra surrealista "A Persistência da Memória"?',
            answers: [
                { text: 'Pablo Picasso', correct: false },
                { text: 'Salvador Dalí', correct: true },
                { text: 'René Magritte', correct: false },
                { text: 'Frida Kahlo', correct: false }
            ]
        },
        {
            image: 'img/DNA.jpg',
            question: 'Qual é o nome da estrutura em dupla hélice que carrega a informação genética?',
            answers: [
                { text: 'RNA', correct: false },
                { text: 'Proteína', correct: false },
                { text: 'DNA', correct: true },
                { text: 'Célula', correct: false }
            ]
        },
        {
            image: 'img/Einstein.jpg',
            question: 'Qual cientista desenvolveu a Teoria da Relatividade?',
            answers: [
                { text: 'Isaac Newton', correct: false },
                { text: 'Niels Bohr', correct: false },
                { text: 'Marie Curie', correct: false },
                { text: 'Albert Einstein', correct: true }
            ]
        },
        {
            image: 'img/CapitalAustralia.jpg',
            question: 'Qual é a capital da Austrália?',
            answers: [
                { text: 'Sydney', correct: false },
                { text: 'Melbourne', correct: false },
                { text: 'Canberra', correct: true },
                { text: 'Brisbane', correct: false }
            ]
        },
        {
            image: 'img/japones.jpg',
            question: 'Qual obra é considerada o primeiro romance moderno da literatura japonesa?',
            answers: [
                { text: 'O Livro do Travesseiro', correct: false },
                { text: 'O Conto de Genji', correct: true },
                { text: 'Makura no Sōshi', correct: false },
                { text: 'Contos de Ise', correct: false }
            ]
        },
        {
            image: 'img/moleculas.jpg',
            question: 'Qual dessas moléculas é uma cetona?',
            answers: [
                { text: 'Metanol', correct: false },
                { text: 'Etanoato de etila', correct: false },
                { text: 'Butanona', correct: true },
                { text: 'Ácido acético', correct: false }
            ]
        },
        {
            image: 'img/NavioFantasma.jpg',
            question: 'Qual compositor é conhecido por compor a ópera O Navio Fantasma?',
            answers: [
                { text: 'Ludwig van Beethoven', correct: false },
                { text: 'Giuseppe Verdi', correct: false },
                { text: 'Giacomo Puccini', correct: false },
                { text: 'Richard Wagner', correct: true }
            ]
        },
        {
            image: 'img/Telomero.jpg',
            question: 'O que são os telômeros e qual sua principal função?',
            answers: [
                { text: 'Células especializadas em combater infecções', correct: false },
                { text: 'Enzimas que regulam a digestão', correct: false },
                { text: 'Extremidades dos cromossomos que protegem o DNA', correct: true },
                { text: ' Proteínas que transportam oxigênio', correct: false }
            ]
        },
         {
            image: 'img/SistemaSolar.jpg',
            question: 'Qual planeta do Sistema Solar possui o maior número de luas conhecidas ?',
            answers: [
                { text: 'Saturno', correct: true },
                { text: 'Netuno', correct: false },
                { text: 'Venus', correct: false },
                { text: 'Urano', correct: false }
            ]
        },
        {
            image: 'img/DeliciasTerranas.jpg',
            question: 'Qual artista pintou O Jardim das Delícias Terrenas?',
            answers: [
                { text: 'Caravaggio', correct: false },
                { text: 'Pieter Bruegel', correct: false },
                { text: 'Hieronymus Bosch', correct: true },
                { text: 'Sandro Botticelli', correct: false }
            ]
        },
        {
            image: 'img/NPCompleto.jpg',
            question: 'Na teoria da computação, o que significa dizer que um problema é "NP-completo"?',
            answers: [
                { text: 'Ele pode ser resolvido em tempo polinomial', correct: false },
                { text: 'Ele não pode ser resolvido por nenhuma máquina de Turing', correct: false },
                { text: 'Ele pode ser resolvido apenas com inteligência artificial', correct: false },
                { text: ' É tão difícil quanto qualquer problema em NP, e ainda está em NP', correct: true }
            ]
        },
        {
            image: 'img/VelocidadeLuz.jpg',
            question: 'Qual a velocidade aproximada da luz no vácuo?',
            answers: [
                { text: '150.000 km/s', correct: false },
                { text: '299.792 km/s', correct: true },
                { text: '350.000 km/s', correct: false }, 
                { text: '500.000 km/s', correct: false }
            ]
        }

    ]
};

const questionImage = document.getElementById('question-image');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const scoreDisplay = document.getElementById('score');
const totalQuestionsDisplay = document.getElementById('total-questions');
const restartButton = document.getElementById('restart-button');
const difficultySelection = document.getElementById('difficulty-selection');
const difficultyButtons = document.querySelectorAll('.difficulty-button');
const quizQuestionContainer = document.getElementById('question-container');
const toggleTheme = document.getElementById('toggleTheme');
const questionNumberDisplay = document.getElementById('question-number');

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
const transitionDelay = 1000;

function startGame(difficulty) {
    selectedQuestions = shuffleArray(questionsData[difficulty]); 
    currentQuestionIndex = 0;
    score = 0;
    
    difficultySelection.style.display = 'none';
    quizQuestionContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    showQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}

function showQuestion() {
    resetState();
    let currentQuestion = selectedQuestions[currentQuestionIndex];
    questionImage.src = currentQuestion.image;
    questionText.innerHTML = currentQuestion.question;
     questionNumberDisplay.textContent = `Pergunta ${currentQuestionIndex + 1} de ${selectedQuestions.length}`;

    const shuffledAnswers = shuffleArray([...currentQuestion.answers]);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
    if (isCorrect) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, transitionDelay);
}

function showResults() {
    quizQuestionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreDisplay.innerHTML = score;
    totalQuestionsDisplay.innerHTML = selectedQuestions.length;
}

difficultyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const difficulty = button.dataset.difficulty;
        startGame(difficulty);
    });
});

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙"; 
});

restartButton.addEventListener('click', () => {
    resultContainer.style.display = 'none';
    difficultySelection.style.display = 'block';
});
