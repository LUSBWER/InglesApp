document.addEventListener('DOMContentLoaded', () => {

    // --- ESTRUCTURA DE DATOS (Versión Completa y Corregida) ---
    const vocabulary = {
        'Comida': {
            icon: '🍔',
            modules: {
                1: [{ en: 'apple', es: 'manzana' }, { en: 'banana', es: 'plátano' }, { en: 'orange', es: 'naranja' }, { en: 'grape', es: 'uva' }, { en: 'strawberry', es: 'fresa' }],
                2: [{ en: 'carrot', es: 'zanahoria' }, { en: 'potato', es: 'patata' }, { en: 'tomato', es: 'tomate' }, { en: 'lettuce', es: 'lechuga' }, { en: 'onion', es: 'cebolla' }],
                3: [{ en: 'chicken', es: 'pollo' }, { en: 'beef', es: 'carne de res' }, { en: 'pork', es: 'cerdo' }, { en: 'fish', es: 'pescado' }, { en: 'rice', es: 'arroz' }],
                4: [{ en: 'bread', es: 'pan' }, { en: 'cheese', es: 'queso' }, { en: 'egg', es: 'huevo' }, { en: 'milk', es: 'leche' }, { en: 'water', es: 'agua' }],
                5: [{ en: 'juice', es: 'zumo' }, { en: 'coffee', es: 'café' }, { en: 'tea', es: 'té' }, { en: 'sugar', es: 'azúcar' }, { en: 'salt', es: 'sal' }]
            }
        },
        'Animales': {
            icon: '🐾',
            modules: {
                1: [{ en: 'dog', es: 'perro' }, { en: 'cat', es: 'gato' }, { en: 'bird', es: 'pájaro' }, { en: 'horse', es: 'caballo' }, { en: 'cow', es: 'vaca' }],
                2: [{ en: 'lion', es: 'león' }, { en: 'tiger', es: 'tigre' }, { en: 'bear', es: 'oso' }, { en: 'elephant', es: 'elefante' }, { en: 'monkey', es: 'mono' }],
                3: [{ en: 'snake', es: 'serpiente' }, { en: 'frog', es: 'rana' }, { en: 'fish', es: 'pez' }, { en: 'shark', es: 'tiburón' }, { en: 'spider', es: 'araña' }]
            }
        },
        'Ropa': {
            icon: '👕',
            modules: {
                1: [{ en: 'shirt', es: 'camisa' }, { en: 'pants', es: 'pantalones' }, { en: 'shoes', es: 'zapatos' }, { en: 'hat', es: 'sombrero' }, { en: 'socks', es: 'calcetines' }],
                2: [{ en: 'jacket', es: 'chaqueta' }, { en: 'dress', es: 'vestido' }, { en: 'skirt', es: 'falda' }, { en: 'coat', es: 'abrigo' }, { en: 'gloves', es: 'guantes' }],
                3: [{ en: 'scarf', es: 'bufanda' }, { en: 'boots', es: 'botas' }, { en: 'sweater', es: 'suéter' }, { en: 'tie', es: 'corbata' }, { en: 'belt', es: 'cinturón' }]
            }
        },
        'Casa y Hogar': {
            icon: '🏠',
            modules: {
                1: [{ en: 'house', es: 'casa' }, { en: 'table', es: 'mesa' }, { en: 'chair', es: 'silla' }, { en: 'bed', es: 'cama' }, { en: 'sofa', es: 'sofá' }],
                2: [{ en: 'kitchen', es: 'cocina' }, { en: 'bathroom', es: 'baño' }, { en: 'bedroom', es: 'dormitorio' }, { en: 'window', es: 'ventana' }, { en: 'door', es: 'puerta' }],
                3: [{ en: 'refrigerator', es: 'nevera' }, { en: 'oven', es: 'horno' }, { en: 'microwave', es: 'microondas' }, { en: 'lamp', es: 'lámpara' }, { en: 'rug', es: 'alfombra' }]
            }
        },
        'Objetos Comunes': {
            icon: '🛠️',
            modules: {
                1: [{ en: 'pen', es: 'bolígrafo' }, { en: 'pencil', es: 'lápiz' }, { en: 'book', es: 'libro' }, { en: 'computer', es: 'ordenador' }, { en: 'phone', es: 'teléfono' }],
                2: [{ en: 'key', es: 'llave' }, { en: 'wallet', es: 'cartera' }, { en: 'glasses', es: 'gafas' }, { en: 'watch', es: 'reloj' }, { en: 'bag', es: 'bolso' }],
                3: [{ en: 'scissors', es: 'tijeras' }, { en: 'glue', es: 'pegamento' }, { en: 'notebook', es: 'cuaderno' }, { en: 'ruler', es: 'regla' }, { en: 'eraser', es: 'goma de borrar' }]
            }
        },
        'Familia y Personas': {
            icon: '👨‍👩‍👧‍👦',
            modules: {
                1: [{ en: 'mother', es: 'madre' }, { en: 'father', es: 'padre' }, { en: 'sister', es: 'hermana' }, { en: 'brother', es: 'hermano' }, { en: 'baby', es: 'bebé' }],
                2: [{ en: 'son', es: 'hijo' }, { en: 'daughter', es: 'hija' }, { en: 'grandmother', es: 'abuela' }, { en: 'grandfather', es: 'abuelo' }, { en: 'friend', es: 'amigo/a' }],
                3: [{ en: 'doctor', es: 'médico/a' }, { en: 'teacher', es: 'profesor/a' }, { en: 'student', es: 'estudiante' }, { en: 'engineer', es: 'ingeniero/a' }, { en: 'lawyer', es: 'abogado/a' }]
            }
        },
        'Tiempo y Fechas': {
            icon: '🕒',
            modules: {
                1: [{ en: 'day', es: 'día' }, { en: 'month', es: 'mes' }, { en: 'year', es: 'año' }, { en: 'hour', es: 'hora' }, { en: 'minute', es: 'minuto' }],
                2: [{ en: 'monday', es: 'lunes' }, { en: 'tuesday', es: 'martes' }, { en: 'wednesday', es: 'miércoles' }, { en: 'thursday', es: 'jueves' }, { en: 'friday', es: 'viernes' }],
                3: [{ en: 'saturday', es: 'sábado' }, { en: 'sunday', es: 'domingo' }, { en: 'week', es: 'semana' }, { en: 'today', es: 'hoy' }, { en: 'tomorrow', es: 'mañana' }]
            }
        },
        'Medios de Transporte': {
            icon: '🚗',
            modules: {
                1: [{ en: 'car', es: 'coche' }, { en: 'bus', es: 'autobús' }, { en: 'airplane', es: 'avión' }, { en: 'train', es: 'tren' }, { en: 'boat', es: 'barco' }],
                2: [{ en: 'bicycle', es: 'bicicleta' }, { en: 'motorcycle', es: 'motocicleta' }, { en: 'subway', es: 'metro' }, { en: 'taxi', es: 'taxi' }, { en: 'truck', es: 'camión' }],
                3: [{ en: 'wheel', es: 'rueda' }, { en: 'engine', es: 'motor' }, { en: 'road', es: 'carretera' }, { en: 'station', es: 'estación' }, { en: 'airport', es: 'aeropuerto' }]
            }
        },
        'Entretenimiento y Música': {
            icon: '🎵',
            modules: {
                1: [{ en: 'music', es: 'música' }, { en: 'movie', es: 'película' }, { en: 'game', es: 'juego' }, { en: 'guitar', es: 'guitarra' }, { en: 'piano', es: 'piano' }],
                2: [{ en: 'song', es: 'canción' }, { en: 'artist', es: 'artista' }, { en: 'to dance', es: 'bailar' }, { en: 'to sing', es: 'cantar' }, { en: 'concert', es: 'concierto' }],
                3: [{ en: 'rock', es: 'rock' }, { en: 'pop', es: 'pop' }, { en: 'jazz', es: 'jazz' }, { en: 'classical', es: 'clásica' }, { en: 'electronic', es: 'electrónica' }]
            }
        },
        'Clima y Naturaleza': {
            icon: '🌦️',
            modules: {
                1: [{ en: 'sun', es: 'sol' }, { en: 'rain', es: 'lluvia' }, { en: 'snow', es: 'nieve' }, { en: 'wind', es: 'viento' }, { en: 'sky', es: 'cielo' }],
                2: [{ en: 'cloud', es: 'nube' }, { en: 'storm', es: 'tormenta' }, { en: 'hot', es: 'caliente' }, { en: 'cold', es: 'frío' }, { en: 'fog', es: 'niebla' }],
                3: [{ en: 'tree', es: 'árbol' }, { en: 'flower', es: 'flor' }, { en: 'river', es: 'río' }, { en: 'mountain', es: 'montaña' }, { en: 'beach', es: 'playa' }]
            }
        },
        'Salud y Cuerpo Humano': {
            icon: '🏥',
            modules: {
                1: [{ en: 'head', es: 'cabeza' }, { en: 'arm', es: 'brazo' }, { en: 'leg', es: 'pierna' }, { en: 'hand', es: 'mano' }, { en: 'foot', es: 'pie' }],
                2: [{ en: 'eye', es: 'ojo' }, { en: 'ear', es: 'oreja' }, { en: 'nose', es: 'nariz' }, { en: 'mouth', es: 'boca' }, { en: 'hair', es: 'pelo' }],
                3: [{ en: 'heart', es: 'corazón' }, { en: 'brain', es: 'cerebro' }, { en: 'stomach', es: 'estómago' }, { en: 'fever', es: 'fiebre' }, { en: 'cough', es: 'tos' }]
            }
        },
        'Compras y Dinero': {
            icon: '🛒',
            modules: {
                1: [{ en: 'store', es: 'tienda' }, { en: 'price', es: 'precio' }, { en: 'money', es: 'dinero' }, { en: 'to pay', es: 'pagar' }, { en: 'to sell', es: 'vender' }],
                2: [{ en: 'to buy', es: 'comprar' }, { en: 'cheap', es: 'barato' }, { en: 'expensive', es: 'caro' }, { en: 'cash', es: 'efectivo' }, { en: 'credit card', es: 'tarjeta de crédito' }],
                3: [{ en: 'market', es: 'mercado' }, { en: 'mall', es: 'centro comercial' }, { en: 'receipt', es: 'recibo' }, { en: 'discount', es: 'descuento' }, { en: 'customer', es: 'cliente' }]
            }
        },
        'Preposiciones y Direcciones': {
            icon: '📍',
            modules: {
                1: [{ en: 'near', es: 'cerca' }, { en: 'far', es: 'lejos' }, { en: 'on', es: 'sobre' }, { en: 'under', es: 'debajo' }, { en: 'in', es: 'en/dentro' }],
                2: [{ en: 'next to', es: 'al lado de' }, { en: 'between', es: 'entre' }, { en: 'behind', es: 'detrás' }, { en: 'in front of', es: 'delante de' }, { en: 'above', es: 'por encima' }],
                3: [{ en: 'left', es: 'izquierda' }, { en: 'right', es: 'derecha' }, { en: 'straight', es: 'recto' }, { en: 'turn', es: 'girar' }, { en: 'corner', es: 'esquina' }]
            }
        },
        'Lugares': {
            icon: '🏙️',
            modules: {
                1: [{ en: 'city', es: 'ciudad' }, { en: 'town', es: 'pueblo' }, { en: 'village', es: 'aldea' }, { en: 'country', es: 'país' }, { en: 'world', es: 'mundo' }],
                2: [{ en: 'beach', es: 'playa' }, { en: 'forest', es: 'bosque' }, { en: 'mountain', es: 'montaña' }, { en: 'river', es: 'río' }, { en: 'lake', es: 'lago' }],
                3: [{ en: 'school', es: 'escuela' }, { en: 'hospital', es: 'hospital' }, { en: 'bank', es: 'banco' }, { en: 'office', es: 'oficina' }, { en: 'park', es: 'parque' }]
            }
        }
    };

    // --- ESTADO DE LA APLICACIÓN ---
    let currentState = {
        category: null,
        module: null,
        wordsForModule: [],
        isGlobalMode: false
    };
    let userProgress = JSON.parse(localStorage.getItem('userProgress')) || {};

    // --- ELEMENTOS DEL DOM ---
    const views = document.querySelectorAll('.view');
    const mainMenu = document.getElementById('main-menu');
    const moduleMenu = document.getElementById('module-menu');
    const moduleView = document.getElementById('module-view');
    const categoryTitle = document.getElementById('category-title');
    const moduleList = document.getElementById('module-list');
    const moduleTitle = document.getElementById('module-title');
    const moduleContent = document.getElementById('module-content');
    const backToModulesBtn = document.getElementById('back-to-modules-btn');

    // --- FUNCIONES DE LÓGICA PRINCIPAL ---

    function saveProgress() {
        localStorage.setItem('userProgress', JSON.stringify(userProgress));
    }

    window.showView = (viewId) => {
        views.forEach(view => view.classList.remove('active'));
        document.getElementById(viewId).classList.add('active');
    };

    function selectCategory(category) {
        currentState.isGlobalMode = false;
        currentState.category = category;
        renderModuleMenu(category);
        showView('module-menu');
    }

    function selectModule(category, moduleNum) {
        currentState.category = category;
        currentState.module = moduleNum;
        moduleTitle.textContent = `${category} - Módulo ${moduleNum}`;
        
        let words = [...vocabulary[category].modules[moduleNum]];
        if (moduleNum > 1) {
            words.push(...getRandomWords(vocabulary[category].modules[moduleNum - 1], 3));
        }
        if (moduleNum > 2) {
            words.push(...getRandomWords(vocabulary[category].modules[moduleNum - 2], 2));
        }
        currentState.wordsForModule = shuffleArray(words);

        renderModuleActions();
        showView('module-view');
    }

    // --- FUNCIONES DE RENDERIZADO ---

    function renderMainMenu() {
        mainMenu.innerHTML = '';
        for (const category in vocabulary) {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `<div class="icon">${vocabulary[category].icon}</div><div class="name">${category}</div>`;
            card.onclick = () => selectCategory(category);
            mainMenu.appendChild(card);
        }
    }

    function renderModuleMenu(category) {
        categoryTitle.textContent = category;
        moduleList.innerHTML = '';
        const categoryData = vocabulary[category];
        if (!userProgress[category]) userProgress[category] = {};
        const progress = userProgress[category];
        // let unlocked = true; // Eliminamos el control de bloqueo

        for (const moduleNum in categoryData.modules) {
            const card = document.createElement('div');
            card.className = 'module-card';
            const isCompleted = progress[moduleNum] && progress[moduleNum].completed;

            // Siempre desbloqueado
            card.classList.add('unlocked');
            card.innerHTML = `<div>Módulo ${moduleNum}</div><div class="status">${isCompleted ? '✅' : '▶️'}</div>`;
            card.onclick = () => selectModule(category, moduleNum);
            
            moduleList.appendChild(card);
            // unlocked = isCompleted; // Ya no es necesario
        }
        updateProgressBar(category);
    }

    function updateProgressBar(category) {
        const progress = userProgress[category] || {};
        const totalModules = Object.keys(vocabulary[category].modules).length;
        const completedModules = Object.values(progress).filter(m => m.completed).length;
        const percentage = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;
        const progressBar = document.getElementById('category-progress-bar');
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${Math.round(percentage)}%`;
    }

    function renderModuleActions() {
        const isGlobal = currentState.isGlobalMode;
        moduleContent.innerHTML = `
            <div class="actions">
                <button onclick="renderWordList()">Aprender Palabras</button>
                <button onclick="startPractice()">Práctica Rápida</button>
                <button onclick="startQuiz()">Cuestionario</button>
                ${!isGlobal ? '<button onclick="startModuleTest()" class="btn-test">Prueba Final</button>' : ''}
            </div>
            <div id="module-activity-content"></div>
        `;
    }

    window.renderWordList = () => {
        const activityContent = document.getElementById('module-activity-content');
        let listHtml = '<ul class="word-list">';
        currentState.wordsForModule.forEach(word => {
            listHtml += `
                <li class="word-item">
                    <div><span class="word">${word.en}</span> → <span class="translation">${word.es}</span></div>
                    <button class="audio-btn" onclick="speak('${word.en}')">🔊</button>
                </li>`;
        });
        listHtml += '</ul>';
        activityContent.innerHTML = listHtml;
    }

    window.startPractice = () => {
        const activityContent = document.getElementById('module-activity-content');
        let currentIndex = 0;
        function renderFlashcard() {
            const word = currentState.wordsForModule[currentIndex];
            activityContent.innerHTML = `
                <div class="flashcard-container">
                    <div class="flashcard" onclick="this.querySelector('.flashcard-inner').classList.toggle('flipped')">
                         <div class="flashcard-inner">
                            <div class="card-face card-front">${word.en}</div>
                            <div class="card-face card-back">${word.es}</div>
                        </div>
                    </div>
                    <div class="flashcard-nav">
                        <button id="prev-card">Anterior</button>
                        <span>${currentIndex + 1} / ${currentState.wordsForModule.length}</span>
                        <button id="next-card">Siguiente</button>
                    </div>
                </div>
            `;
            document.getElementById('prev-card').onclick = () => {
                if (currentIndex > 0) { currentIndex--; renderFlashcard(); }
            };
            document.getElementById('next-card').onclick = () => {
                if (currentIndex < currentState.wordsForModule.length - 1) { currentIndex++; renderFlashcard(); }
            };
        }
        renderFlashcard();
    }

    window.startQuiz = () => {
        const activityContent = document.getElementById('module-activity-content');
        const questions = generateQuizQuestions(currentState.wordsForModule);
        
        let quizHtml = '<div class="quiz-container">';
        questions.forEach((q, index) => {
            quizHtml += `<div class="question" id="question-${index}"><p>${index + 1}. ${q.prompt}</p>`;
            if (q.type === 'mc') {
                q.options.forEach(option => { quizHtml += `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label><br>`; });
            } else {
                quizHtml += `<input type="text" name="q${index}" autocomplete="off">`;
            }
            quizHtml += `</div>`;
        });
        quizHtml += `<button id="submit-quiz">Corregir</button></div>`;
        activityContent.innerHTML = quizHtml;

        document.getElementById('submit-quiz').onclick = () => {
            let score = 0;
            questions.forEach((q, index) => {
                const questionEl = document.getElementById(`question-${index}`);
                questionEl.style.border = '2px solid #d9534f';
                const input = document.querySelector(`[name="q${index}"]:checked, [name="q${index}"][type="text"]`);
                if (input && input.value.trim().toLowerCase() === q.answer.toLowerCase()) {
                    score++;
                    questionEl.style.border = '2px solid #5cb85c';
                }
            });
            alert(`Tu puntuación: ${score} / ${questions.length}`);
        };
    }

    function generateQuizQuestions(words) {
        const questions = [];
        words.forEach(word => {
            const type = Math.random() < 0.5 ? 'mc' : (Math.random() < 0.5 ? 'en-es' : 'es-en');
            if (type === 'mc') {
                let options = [word.es];
                while (options.length < 4) {
                    const randomWord = words[Math.floor(Math.random() * words.length)].es;
                    if (!options.includes(randomWord)) options.push(randomWord);
                }
                questions.push({ type: 'mc', prompt: `¿Cuál es la traducción de "<strong>${word.en}</strong>"?`, options: shuffleArray(options), answer: word.es });
            } else if (type === 'en-es') {
                questions.push({ type: 'fill', prompt: `Escribe la traducción al español de "<strong>${word.en}</strong>":`, answer: word.es });
            } else {
                questions.push({ type: 'fill', prompt: `Escribe la traducción al inglés de "<strong>${word.es}</strong>":`, answer: word.en });
            }
        });
        return shuffleArray(questions);
    }

    window.startModuleTest = (words = currentState.wordsForModule, title = `Prueba Final - Módulo ${currentState.module}`) => {
        const modal = document.getElementById('test-modal');
        const testTitle = document.getElementById('test-title');
        const questionContainer = document.getElementById('test-question-container');
        const testControls = document.getElementById('test-controls');
        const testResult = document.getElementById('test-result');
        const closeBtn = modal.querySelector('.close-btn');

        testTitle.textContent = title;
        testResult.innerHTML = '';
        const questions = generateQuizQuestions(words);

        let testHtml = '';
        questions.forEach((q, index) => {
            testHtml += `<div class="question" id="test-q-${index}"><p>${index + 1}. ${q.prompt}</p>`;
            if (q.type === 'mc') {
                q.options.forEach(option => { testHtml += `<label><input type="radio" name="test-q${index}" value="${option}"> ${option}</label><br>`; });
            } else { testHtml += `<input type="text" name="test-q${index}" autocomplete="off">`; }
            testHtml += `</div>`;
        });
        questionContainer.innerHTML = testHtml;
        testControls.innerHTML = '<button id="test-submit-btn">Evaluar</button>';
        modal.style.display = 'block';

        closeBtn.onclick = () => modal.style.display = 'none';
        window.onclick = (event) => { if (event.target == modal) modal.style.display = 'none'; }

        document.getElementById('test-submit-btn').onclick = () => {
            let score = 0;
            questions.forEach((q, index) => {
                const questionEl = document.getElementById(`test-q-${index}`);
                const input = questionContainer.querySelector(`[name="test-q${index}"]:checked, [name="test-q${index}"][type="text"]`);
                questionEl.style.border = '2px solid #d9534f';
                if (input && input.value.trim().toLowerCase() === q.answer.toLowerCase()) {
                    score++;
                    questionEl.style.border = '2px solid #5cb85c';
                }
            });

            const percentage = Math.round((score / questions.length) * 100);
            testResult.innerHTML = `Tu puntuación: <span class="${percentage >= 80 ? 'pass' : 'fail'}">${percentage}%</span>`;

            if (!currentState.isGlobalMode) {
                if (percentage >= 80) {
                    testResult.innerHTML += '<br>¡Módulo superado! 🎉';
                    if (!userProgress[currentState.category]) userProgress[currentState.category] = {};
                    userProgress[currentState.category][currentState.module] = { completed: true, score: percentage };
                    saveProgress();
                    testControls.innerHTML = `<button onclick="document.getElementById('test-modal').style.display='none'; renderModuleMenu(currentState.category);">Cerrar</button>`;
                } else {
                    testResult.innerHTML += '<br>Necesitas 80% para aprobar. ¡Sigue practicando!';
                    testControls.innerHTML = `<button id="retry-test-btn">Reintentar</button> <button onclick="document.getElementById('test-modal').style.display='none'">Cerrar</button>`;
                    document.getElementById('retry-test-btn').onclick = () => window.startModuleTest(words, title);
                }
            } else {
                 testControls.innerHTML = `<button onclick="document.getElementById('test-modal').style.display='none'">Cerrar</button>`;
            }
        };
    }

    // --- FUNCIONES DE UTILIDAD Y MODOS EXTRA ---
    function getAllLearnedWords() {
        const learnedWords = [];
        for (const category in userProgress) {
            if (category === 'stats' || !vocabulary[category]) continue;
            for (const moduleNum in userProgress[category]) {
                if (userProgress[category][moduleNum].completed) {
                    learnedWords.push(...vocabulary[category].modules[moduleNum]);
                }
            }
        }
        return shuffleArray(learnedWords).filter((v,i,a)=>a.findIndex(t=>(t.en === v.en))===i);
    }

    // LÓGICA DE VOZ CON RESPONSIVEVOICE.JS
    window.speak = function(text) {
        // Comprueba si responsiveVoice está cargado y listo
        console.log("Intentando reproducir con ResponsiveVoice.js...");
        if (typeof responsiveVoice !== 'undefined' && responsiveVoice.speak) {
            console.log("ResponsiveVoice.js está cargado. Reproduciendo...");
            responsiveVoice.speak(text, "US English Female", {rate: 0.9});
        } else {
            console.error("ResponsiveVoice.js no está cargado o no está disponible.");
            alert("El servicio de voz no está disponible. Por favor, comprueba tu conexión a internet y recarga la página.");
        }
    }

    function getRandomWords(wordArray, count) {
        return shuffleArray([...wordArray]).slice(0, count);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    // --- INICIO DE LA APLICACIÓN ---
    function init() {
        // Cargar tema guardado
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }

        // Botones de navegación
        document.querySelector('#module-menu .back-btn').onclick = () => showView('main-menu');
        backToModulesBtn.onclick = () => {
            if(currentState.isGlobalMode) showView('main-menu');
            else selectCategory(currentState.category);
        };

        // Botón de tema
        document.getElementById('theme-toggle-btn').onclick = () => {
            document.body.classList.toggle('dark-theme');
            const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
        };

        document.getElementById('quick-review-btn').onclick = () => {
            const learnedWords = getAllLearnedWords();
            if (learnedWords.length < 1) {
                alert('¡Necesitas completar al menos un módulo para usar el repaso rápido!');
                return;
            }
            const reviewWords = getRandomWords(learnedWords, 10);
            currentState.isGlobalMode = true;
            window.startModuleTest(reviewWords, 'Repaso Rápido (10 preguntas)');
        };

        document.getElementById('random-mode-btn').onclick = () => {
            const learnedWords = getAllLearnedWords();
            if (learnedWords.length < 1) {
                alert('¡Necesitas completar al menos un módulo para usar el modo aleatorio!');
                return;
            }
            currentState.isGlobalMode = true;
            currentState.wordsForModule = learnedWords;
            moduleTitle.textContent = 'Modo Aleatorio Global';
            renderModuleActions();
            showView('module-view');
        };

        renderMainMenu();
    }

    init();

    // --- START: VOCABULARY EXPLORER ADDITION ---

    // --- DOM Elements for Explorer ---
    const explorerBtn = document.getElementById('explorer-btn');
    const wordInput = document.getElementById('word-input');
    const searchWordBtn = document.getElementById('search-word-btn');
    const wordExpansionResults = document.getElementById('word-expansion-results');
    const step23Container = document.getElementById('step-2-3-container');
    const contextCreationArea = document.getElementById('context-creation-area');
    const saveCardBtn = document.getElementById('save-card-btn');
    const reviewCardsBtn = document.getElementById('review-cards-btn');
    const reviewArea = document.getElementById('review-area');

    // --- Event Listeners for Explorer ---
    explorerBtn.addEventListener('click', () => {
        showView('vocabulary-explorer-view');
    });

    searchWordBtn.addEventListener('click', () => {
        const word = wordInput.value.trim();
        if (word) {
            fetchWordData(word);
        }
    });

    wordInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchWordBtn.click();
        }
    });

    saveCardBtn.addEventListener('click', () => {
        const wordForms = contextCreationArea.querySelectorAll('.word-form-group');
        let cards = JSON.parse(localStorage.getItem('explorerFlashcards')) || [];
        
        wordForms.forEach(form => {
            const word = form.dataset.word;
            const sentence = form.querySelector('input').value.trim();
            const explanation = form.querySelector('textarea').value.trim();

            if (sentence && explanation) {
                if (!cards.some(card => card.word === word)) {
                    cards.push({ word, sentence, explanation });
                }
            }
        });

        localStorage.setItem('explorerFlashcards', JSON.stringify(cards));
        alert('¡Tarjeta(s) guardada(s) con éxito!');
        step23Container.classList.add('d-none');
    });

    reviewCardsBtn.addEventListener('click', () => {
        renderReviewCards();
    });


    // --- Functions for Explorer ---

    async function fetchWordData(word) {
        wordExpansionResults.innerHTML = '<div class="text-center">Cargando...</div>';
        step23Container.classList.add('d-none');
        contextCreationArea.innerHTML = '';
        reviewArea.classList.add('d-none');

        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            displayWordData(data);
        } catch (error) {
            console.error("Error fetching word data:", error);
            wordExpansionResults.innerHTML = `<div class="alert alert-danger">No se pudo encontrar la palabra. Intenta con otra.</div>`;
        }
    }

    async function displayWordData(data) {
        wordExpansionResults.innerHTML = '';
        const wordData = data[0];

        if (!wordData) {
            wordExpansionResults.innerHTML = `<div class="alert alert-danger">No se encontraron resultados.</div>`;
            return;
        }

        const phoneticText = wordData.phonetics.find(p => p.text)?.text || '';
        const audioElement = wordData.phonetics.find(p => p.audio)?.audio;

        let html = `<h3>${wordData.word} <span class="phonetic">${phoneticText}</span>`;
        if (audioElement) {
            html += ` <button class="audio-btn" onclick="new Audio('${audioElement}').play()">🔊</button>`;
        }
        html += `</h3>`;

        const wordsToLearn = new Set([wordData.word]);

        wordData.meanings.forEach((meaning, meaningIndex) => {
            html += `<div class="meaning-block">`;
            html += `<h4>${meaning.partOfSpeech}</h4>`;
            html += `<ul>`;
            meaning.definitions.forEach((def, defIndex) => {
                html += `<li>`;
                html += `<span>${def.definition}</span>`;
                html += ` <button class="translate-btn" onclick="translateExplorerText(this, '${def.definition}')">Traducir</button>`;
                html += `<div class="translation-result"></div>`;

                if (def.example) {
                    html += `<div class="example"><em>Ej: "${def.example}"</em>`;
                    html += ` <button class="translate-btn" onclick="translateExplorerText(this, '${def.example}')">Traducir</button>`;
                    html += `<div class="translation-result"></div></div>`;
                }
                html += `</li>`;
            });
            html += `</ul>`;
            html += `</div>`;
        });

        wordExpansionResults.innerHTML = html;
        
        generateContextPrompts(wordsToLearn);
        step23Container.classList.remove('d-none');
    }

    function generateContextPrompts(wordsSet) {
        contextCreationArea.innerHTML = '';
        
        wordsSet.forEach(word => {
            const promptHtml = `
            <div class="word-form-group" data-word="${word}">
                <label>1. Crea una frase personal con "<strong>${word}</strong>":</label>
                <input type="text" placeholder="Escribe tu frase aquí...">
                <label>2. Explica "<strong>${word}</strong>" de forma sencilla:</label>
                <textarea rows="2" placeholder="Imagina que se lo explicas a un niño..."></textarea>
            </div>
            `;
            contextCreationArea.innerHTML += promptHtml;
        });
    }

    window.translateExplorerText = async function(button, text) {
        const targetDiv = button.nextElementSibling;
        targetDiv.innerHTML = '<em>Traduciendo...</em>';
        button.disabled = true;

        try {
            const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=${encodeURIComponent(text)}`;
            const response = await fetch(url);
            if (!response.ok) throw new Error('Translation API failed');
            
            const translationData = await response.json();
            const translatedText = translationData[0].map(chunk => chunk[0]).join('');
            targetDiv.innerHTML = `<strong class="text-success">${translatedText}</strong>`;
        } catch (error) {
            console.error('Translation error:', error);
            targetDiv.innerHTML = '<em class="text-danger">Falló la traducción.</em>';
            button.disabled = false;
        }
    }

    function renderReviewCards() {
        const cards = JSON.parse(localStorage.getItem('explorerFlashcards')) || [];
        reviewArea.classList.add('d-none');
        reviewArea.innerHTML = '<h3>Mis Tarjetas Guardadas</h3>';

        if (cards.length === 0) {
            reviewArea.innerHTML += '<p>Aún no has guardado ninguna tarjeta.</p>';
            return;
        }

        const cardGrid = document.createElement('div');
        cardGrid.className = 'review-grid';

        cards.forEach((card, index) => {
            const cardEl = document.createElement('div');
            cardEl.className = 'review-card';
            cardEl.innerHTML = `
                <h4>${card.word}</h4>
                <p><strong>Tu frase:</strong> ${card.sentence}</p>
                <p><strong>Tu explicación:</strong> ${card.explanation}</p>
                <button onclick="removeExplorerCard(${index})">Eliminar</button>
            `;
            cardGrid.appendChild(cardEl);
        });

        reviewArea.appendChild(cardGrid);
    }

    window.removeExplorerCard = (index) => {
        let cards = JSON.parse(localStorage.getItem('explorerFlashcards')) || [];
        cards.splice(index, 1);
        localStorage.setItem('explorerFlashcards', JSON.stringify(cards));
        renderReviewCards();
    }

    // --- END: VOCABULARY EXPLORER ADDITION ---

});
