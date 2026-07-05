// ============================================================
//  ДАННЫЕ
// ============================================================

const CHARACTERS = {
    luciel: {
        id: 'luciel',
        name: 'Люциэль',
        avatar: '🖤',
        age: 24,
        personality: 'Холодный, таинственный, немного саркастичный',
        dialogues: [
            'Ты снова здесь? Не могу сказать, что рад...',
            'Ты странная. Мне это нравится.',
            'Я ждал тебя. Не говори никому.',
            'Ты думаешь, я простой? Ошибаешься.',
            'Почему ты так на меня смотришь? ...Ладно, продолжай.'
        ],
        love: 0,
        maxLove: 100
    },
    alex: {
        id: 'alex',
        name: 'Алекс',
        avatar: '💙',
        age: 22,
        personality: 'Добрый, заботливый, солнечный',
        dialogues: [
            'Привет! Как твой день?',
            'Ты выглядишь прекрасно сегодня!',
            'Я так скучал по тебе!',
            'Хочешь, сходим в кино?',
            'Ты моё вдохновение...'
        ],
        love: 0,
        maxLove: 100
    },
    kai: {
        id: 'kai',
        name: 'Кай',
        avatar: '🔥',
        age: 23,
        personality: 'Страстный, дерзкий, уверенный',
        dialogues: [
            'Эй, красотка! Готова к приключениям?',
            'Ты просто огонь!',
            'Со мной тебе будет весело, обещаю.',
            'Ты смелая. Это сексуально.',
            'Забудь о других. Только я.'
        ],
        love: 0,
        maxLove: 100
    }
};

const GACHA_POOL = {
    R: [
        { id: 'r1', name: 'Обычное свидание', emoji: '☕', description: 'Прогулка в парке' },
        { id: 'r2', name: 'Кофе вдвоем', emoji: '🍵', description: 'Уютное кафе' },
        { id: 'r3', name: 'Совместный просмотр', emoji: '🎬', description: 'Домашний кинотеатр' },
        { id: 'r4', name: 'Прогулка под луной', emoji: '🌙', description: 'Ночной город' }
    ],
    SR: [
        { id: 'sr1', name: 'Романтический ужин', emoji: '🍷', description: 'Ресторан с видом' },
        { id: 'sr2', name: 'Поездка на море', emoji: '🌊', description: 'Закат на пляже' },
        { id: 'sr3', name: 'Тайное послание', emoji: '✉️', description: 'Записка в книге' }
    ],
    SSR: [
        { id: 'ssr1', name: 'Звездный танец', emoji: '🌠', description: 'Танец под звездами' },
        { id: 'ssr2', name: 'Вечная клятва', emoji: '💍', description: 'Особенный момент' },
        { id: 'ssr3', name: 'Судьбоносная встреча', emoji: '✨', description: 'Всё меняется' }
    ]
};

// ============================================================
//  СОСТОЯНИЕ ИГРЫ
// ============================================================

let gameState = {
    playerName: 'Игрок',
    diamonds: 100,
    level: 1,
    exp: 0,
    currentChar: 'luciel',
    characters: JSON.parse(JSON.stringify(CHARACTERS)),
    collectedCards: [],
    battle: {
        enemyHp: 30,
        maxEnemyHp: 30,
        playerHp: 20,
        maxPlayerHp: 20,
        isDefending: false
    },
    chatHistory: []
};

// ============================================================
//  СОХРАНЕНИЕ / ЗАГРУЗКА
// ============================================================

function saveGame() {
    try {
        localStorage.setItem('loveEchoesSave', JSON.stringify(gameState));
    } catch (e) {
        console.warn('Не удалось сохранить:', e);
    }
}

function loadGame() {
    try {
        const saved = localStorage.getItem('loveEchoesSave');
        if (saved) {
            const parsed = JSON.parse(saved);
            gameState = parsed;
            // Восстанавливаем дефолтные диалоги для персонажей
            for (const charId of Object.keys(gameState.characters)) {
                if (CHARACTERS[charId]) {
                    gameState.characters[charId].dialogues = CHARACTERS[charId].dialogues;
                }
            }
            return true;
        }
    } catch (e) {
        console.warn('Не удалось загрузить сохранение:', e);
    }
    return false;
}

// ============================================================
//  UI ОБНОВЛЕНИЯ
// ============================================================

function updateUI() {
    document.getElementById('diamondDisplay').textContent = `💎 ${gameState.diamonds}`;
    document.getElementById('levelDisplay').textContent = `⭐ LVL ${gameState.level}`;
    document.getElementById('playerNameDisplay').textContent = gameState.playerName;
    document.getElementById('settingsName').value = gameState.playerName;
    document.getElementById('collectionCount').textContent = gameState.collectedCards.length;
    
    // Обновление HP в бою
    const enemyPercent = (gameState.battle.enemyHp / gameState.battle.maxEnemyHp) * 100;
    const playerPercent = (gameState.battle.playerHp / gameState.battle.maxPlayerHp) * 100;
    document.getElementById('enemyHpBar').style.width = Math.max(0, enemyPercent) + '%';
    document.getElementById('playerHpBar').style.width = Math.max(0, playerPercent) + '%';
    document.getElementById('enemyHpText').textContent = `${Math.max(0, gameState.battle.enemyHp)}/${gameState.battle.maxEnemyHp}`;
    document.getElementById('playerHpText').textContent = `${Math.max(0, gameState.battle.playerHp)}/${gameState.battle.maxPlayerHp}`;
    
    updateCharactersGrid();
    saveGame();
}

function updateCharactersGrid() {
    const grid = document.getElementById('charactersGrid');
    grid.innerHTML = '';
    for (const charId of Object.keys(gameState.characters)) {
        const char = gameState.characters[charId];
        const card = document.createElement('div');
        card.className = 'character-card';
        const lovePercent = (char.love / char.maxLove) * 100;
        card.innerHTML = `
            <span class="char-avatar">${char.avatar}</span>
            <div class="char-name">${char.name}</div>
            <div class="char-love">❤️ ${char.love}/${char.maxLove}</div>
            <div class="love-fill"><div class="love-fill-inner" style="width:${lovePercent}%"></div></div>
            <div style="font-size:0.7rem;opacity:0.4;margin-top:4px;">${char.personality}</div>
        `;
        grid.appendChild(card);
    }
}

// ============================================================
//  ЧАТ
// ============================================================

function getCharResponses(charId) {
    const char = gameState.characters[charId];
    return char.dialogues || ['...', 'Ммм?', 'Продолжай.'];
}

function addMessage(text, isBot = true, sender = null) {
    const chatWindow = document.getElementById('chatWindow');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${isBot ? 'bot' : 'player'}`;
    
    const char = gameState.characters[gameState.currentChar];
    const senderName = isBot ? (char ? char.avatar + ' ' + char.name : '💬 Бот') : 'Вы';
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    msgDiv.innerHTML = `
        <span class="sender">${senderName}</span>
        ${text}
        <span class="time">${time}</span>
    `;
    chatWindow.appendChild(msgDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    
    // Сообщение игрока
    addMessage(text, false);
    gameState.chatHistory.push({ role: 'player', text });
    
    // Ответ бота
    const charId = gameState.currentChar;
    const responses = getCharResponses(charId);
    const response = responses[Math.floor(Math.random() * responses.length)];
    
    setTimeout(() => {
        addMessage(response, true);
        gameState.chatHistory.push({ role: 'bot', text: response });
        
        // Начисляем любовь (иногда)
        if (Math.random() < 0.3) {
            const char = gameState.characters[charId];
            char.love = Math.min(char.love + 1, char.maxLove);
            addMessage(`❤️ +1 любви к ${char.name}!`, true);
            updateUI();
        }
        
        // Иногда даём алмазы
        if (Math.random() < 0.05) {
            gameState.diamonds += 5;
            addMessage('💎 +5 алмазов за активность!', true);
            updateUI();
        }
    }, 400 + Math.random() * 600);
}

// ============================================================
//  ГАЧА
// ============================================================

function pullGacha() {
    if (gameState.diamonds < 50) {
        const resultDiv = document.getElementById('gachaResult');
        document.getElementById('gachaCardInfo').textContent = '❌ Не хватает алмазов!';
        document.getElementById('gachaCardInfo').className = '';
        return;
    }
    
    gameState.diamonds -= 50;
    updateUI();
    
    // Анимация
    const slot = document.querySelector('.card-placeholder');
    slot.classList.remove('flip');
    void slot.offsetWidth;
    slot.classList.add('flip');
    
    // Рандом
    const roll = Math.random() * 100;
    let rarity, pool;
    if (roll < 50) { rarity = 'R'; pool = GACHA_POOL.R; }
    else if (roll < 85) { rarity = 'SR'; pool = GACHA_POOL.SR; }
    else { rarity = 'SSR'; pool = GACHA_POOL.SSR; }
    
    const card = pool[Math.floor(Math.random() * pool.length)];
    gameState.collectedCards.push(card.id);
    
    // Показываем результат
    setTimeout(() => {
        const info = document.getElementById('gachaCardInfo');
        const emoji = rarity === 'R' ? '📘' : rarity === 'SR' ? '📗' : '🌟';
        info.textContent = `${emoji} ${card.emoji} ${card.name} (${rarity})`;
        info.className = `card-info ${rarity.toLowerCase()}`;
        
        if (rarity === 'SSR') {
            // Бонус за SSR
            const char = gameState.characters[gameState.currentChar];
            char.love = Math.min(char.love + 5, char.maxLove);
            info.textContent += ' ❤️ +5 любви!';
            updateUI();
        }
        
        slot.textContent = card.emoji;
        updateUI();
    }, 600);
}

// ============================================================
//  БОЙ
// ============================================================

function battleLog(msg) {
    document.getElementById('battleLog').textContent = msg;
}

function resetBattle() {
    gameState.battle.enemyHp = gameState.battle.maxEnemyHp;
    gameState.battle.playerHp = gameState.battle.maxPlayerHp;
    gameState.battle.isDefending = false;
    battleLog('⚔️ Новый бой!');
    updateUI();
}

function battleAttack() {
    if (gameState.battle.playerHp <= 0 || gameState.battle.enemyHp <= 0) {
        resetBattle();
        return;
    }
    
    const damage = Math.floor(Math.random() * 6) + 5;
    gameState.battle.enemyHp -= damage;
    gameState.battle.enemyHp = Math.max(0, gameState.battle.enemyHp);
    battleLog(`⚔️ Вы нанесли ${damage} урона!`);
    updateUI();
    
    if (gameState.battle.enemyHp <= 0) {
        battleLog('🎉 ПОБЕДА! +10 💎 +3 любви!');
        gameState.diamonds += 10;
        const char = gameState.characters[gameState.currentChar];
        char.love = Math.min(char.love + 3, char.maxLove);
        updateUI();
        setTimeout(resetBattle, 1200);
        return;
    }
    
    setTimeout(enemyTurn, 600);
}

function battleDefend() {
    if (gameState.battle.playerHp <= 0 || gameState.battle.enemyHp <= 0) {
        resetBattle();
        return;
    }
    gameState.battle.isDefending = true;
    battleLog('🛡️ Вы защищаетесь!');
    setTimeout(enemyTurn, 400);
}

function battleHeal() {
    if (gameState.diamonds < 10) {
        battleLog('❌ Не хватает алмазов для лечения!');
        return;
    }
    if (gameState.battle.playerHp <= 0 || gameState.battle.enemyHp <= 0) {
        resetBattle();
        return;
    }
    gameState.diamonds -= 10;
    gameState.battle.playerHp = Math.min(gameState.battle.playerHp + 10, gameState.battle.maxPlayerHp);
    battleLog('💚 +10 HP восстановлено!');
    updateUI();
    setTimeout(enemyTurn, 500);
}

function enemyTurn() {
    if (gameState.battle.playerHp <= 0 || gameState.battle.enemyHp <= 0) {
        return;
    }
    
    let damage = Math.floor(Math.random() * 4) + 3;
    if (gameState.battle.isDefending) {
        damage = Math.floor(damage / 2);
        battleLog(`🛡️ Защита снизила урон до ${damage}!`);
        gameState.battle.isDefending = false;
    } else {
        battleLog(`💢 Враг нанёс ${damage} урона!`);
    }
    
    gameState.battle.playerHp -= damage;
    gameState.battle.playerHp = Math.max(0, gameState.battle.playerHp);
    updateUI();
    
    if (gameState.battle.playerHp <= 0) {
        battleLog('💀 ВЫ ПРОИГРАЛИ... Попробуйте снова!');
        setTimeout(resetBattle, 1500);
    } else {
        battleLog('⏳ Ваш ход...');
    }
}

// ============================================================
//  НАВИГАЦИЯ
// ============================================================

let currentTab = 'chat';

function switchTab(tabId) {
    currentTab = tabId;
    
    // Обновляем кнопки
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    
    // Обновляем панели
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `tab-${tabId}`);
    });
    
    // Если переключились на бой — обновляем UI
    if (tabId === 'battle') updateUI();
    if (tabId === 'characters') updateCharactersGrid();
}

function startGame() {
    document.getElementById('menu-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    
    // Загружаем приветствие в чат
    const char = gameState.characters[gameState.currentChar];
    addMessage(`Привет! Я ${char.name}. ${char.dialogues[0]}`, true);
    updateUI();
}

function showSettings() {
    document.getElementById('settings-modal').classList.add('active');
    document.getElementById('settingsName').value = gameState.playerName;
}

function closeSettings() {
    const name = document.getElementById('settingsName').value.trim();
    if (name) {
        gameState.playerName = name;
        updateUI();
    }
    document.getElementById('settings-modal').classList.remove('active');
}

// ============================================================
//  ИНИЦИАЛИЗАЦИЯ
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    // Загружаем сохранение
    loadGame();
    
    // Вкладки
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchTab(this.dataset.tab);
        });
    });
    
    // Выбор персонажа в чате
    document.querySelectorAll('.char-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.char-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            gameState.currentChar = this.dataset.char;
            
            // Очищаем чат
            document.getElementById('chatWindow').innerHTML = '';
            
            // Приветствие
            const char = gameState.characters[gameState.currentChar];
            addMessage(`💬 ${char.name}: ${char.dialogues[0]}`, true);
        });
    });
    
    // Отправка сообщения
    document.getElementById('sendBtn').addEventListener('click', sendMessage);
    document.getElementById('messageInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sendMessage();
    });
    
    // Закрытие настроек по клику вне
    document.getElementById('settings-modal').addEventListener('click', function(e) {
        if (e.target === this) closeSettings();
    });
    
    // Обновляем UI
    updateUI();
    updateCharactersGrid();
    
    console.log('✦ Echoes of Love загружена!');
    console.log(`💎 ${gameState.diamonds} алмазов, ${gameState.collectedCards.length} карт`);
});