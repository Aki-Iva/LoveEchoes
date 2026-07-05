// ============================================================
//  ДАННЫЕ ПЕРСОНАЖЕЙ С РАЗВЁРНУТЫМИ ДИАЛОГАМИ
// ============================================================

const CHARACTERS = {
    luciel: {
        id: 'luciel',
        name: 'Люциэль',
        avatar: '🖤',
        age: 24,
        title: 'Таинственный незнакомец',
        personality: 'Холодный, саркастичный, но за маской скрывает ранимую душу',
        bio: 'Он появился в городе год назад. Никто не знает, откуда он. Говорят, он видит то, чего не видят другие. Ты встретила его в библиотеке в полночь...',
        dialogues: [
            'Ты снова здесь? В этой библиотеке пахнет твоими мыслями.',
            'Я не верю в совпадения. Ты пришла сюда не случайно.',
            'Ты боишься темноты? Хорошо. Бойся. Это делает тебя живой.',
            'Иногда мне кажется, что я знал тебя в другой жизни...',
            'Не подходи близко. Я могу причинить тебе боль.',
            'Ты странная. Ты смотришь на меня так, будто видишь что-то... настоящее.',
            'Я не умею любить. Но с тобой... я хочу попробовать.'
        ],
        love: 0,
        maxLove: 100,
        level: 1,
        exp: 0,
        maxExp: 50,
        stats: { attack: 8, defense: 5, skill: 'Теневой удар' }
    },
    alex: {
        id: 'alex',
        name: 'Алекс',
        avatar: '💙',
        age: 22,
        title: 'Солнечный мечтатель',
        personality: 'Добрый, заботливый, всегда видит хорошее',
        bio: 'Сын известного художника. Вместо кистей он выбрал гитару. Его музыка лечит души. Он ищет ту, кто услышит его самую важную песню...',
        dialogues: [
            'Привет! Я как раз думал о тебе!',
            'Ты знаешь, что твоя улыбка светит ярче солнца?',
            'Я написал песню. Она о тебе. Хочешь послушать?',
            'Когда я с тобой, мир становится цветным.',
            'Ты веришь в любовь с первого взгляда? Я не верил. До сегодня.',
            'Моя мама всегда говорила: "Настоящая любовь приходит неожиданно". Она была права.',
            'Я хочу показывать тебе закаты каждый день.'
        ],
        love: 0,
        maxLove: 100,
        level: 1,
        exp: 0,
        maxExp: 50,
        stats: { attack: 6, defense: 8, skill: 'Исцеляющая мелодия' }
    },
    kai: {
        id: 'kai',
        name: 'Кай',
        avatar: '🔥',
        age: 23,
        title: 'Пламенный бунтарь',
        personality: 'Страстный, дерзкий, живёт на грани',
        bio: 'Лидер уличной банды, но с золотым сердцем. Он спас тебя от хулиганов, а потом исчез в ночи. Ты должна найти его и узнать, что скрывается за его дерзкой улыбкой...',
        dialogues: [
            'Эй, красотка! Я знал, что ты придёшь.',
            'Правила созданы, чтобы их нарушать. Идём со мной?',
            'Ты единственная, кто не боится моего огня.',
            'Я не обещаю тебе спокойной жизни. Но будет весело.',
            'Ты так мило краснеешь. Мне нравится выводить тебя из себя.',
            'Я не искал любовь. Она нашла меня. В твоём лице.',
            'Если кто-то посмеет тебя обидеть — я сожгу этот город.'
        ],
        love: 0,
        maxLove: 100,
        level: 1,
        exp: 0,
        maxExp: 50,
        stats: { attack: 10, defense: 3, skill: 'Взрывной заряд' }
    }
};

// ============================================================
//  МЕГА-БОЛЬШАЯ КОЛЛЕКЦИЯ КАРТ С ИСТОРИЯМИ
// ============================================================

const ALL_CARDS = {
    R: [
        { id: 'r1', name: 'Первая встреча', emoji: '🌅', rarity: 'R', story: 'Ты сидела в парке, читала книгу. Он подошёл и спросил: "Этот сюжет про нас?" Ты улыбнулась. С этого дня всё изменилось.' },
        { id: 'r2', name: 'Кофе вдвоём', emoji: '☕', rarity: 'R', story: 'Маленькое кафе на углу. Он заказал тебе капучино с сердечком на пенке. Ты покраснела. Он сделал вид, что не заметил.' },
        { id: 'r3', name: 'Прогулка под луной', emoji: '🌙', rarity: 'R', story: 'Ночной парк. Луна отражалась в его глазах. Он взял твою руку. Ты почувствовала, как бьётся твоё сердце.' },
        { id: 'r4', name: 'Случайная встреча', emoji: '🚉', rarity: 'R', story: 'На вокзале. Ты спешила, он стоял и смотрел на тебя. Вы встретились взглядами. Он улыбнулся. Ты опоздала на поезд.' },
        { id: 'r5', name: 'Общий секрет', emoji: '🔮', rarity: 'R', story: 'Вы шептались на лестнице. Никто не должен был знать. Теперь у вас есть общая тайна.' },
        { id: 'r6', name: 'Дождь', emoji: '🌧️', rarity: 'R', story: 'Лил дождь. Он отдал тебе свой зонт. Ты хотела отказаться, но он сказал: "Ты важнее".' },
        { id: 'r7', name: 'Записка', emoji: '📝', rarity: 'R', story: 'Ты нашла записку в книге. "Ты прекрасна. Не забывай об этом." Без подписи. Но ты знаешь, от кого.' },
        { id: 'r8', name: 'Улыбка', emoji: '😊', rarity: 'R', story: 'Его улыбка могла растопить лёд. Ты поняла, что влюблена, когда улыбнулась в ответ.' },
        { id: 'r9', name: 'Танец', emoji: '💃', rarity: 'R', story: 'Музыка играла тихо. Он протянул руку. Вы танцевали в пустой комнате, и мир исчез.' },
        { id: 'r10', name: 'Фото', emoji: '📸', rarity: 'R', story: 'Он украдкой сфотографировал тебя. Ты делала вид, что не заметила. Теперь это фото — его талисман.' },
        { id: 'r11', name: 'Цветок', emoji: '🌷', rarity: 'R', story: 'Он подарил тебе цветок. Ты спросила, почему. Он ответил: "Потому что ты заслуживаешь красоту".' },
        { id: 'r12', name: 'Звезда', emoji: '⭐', rarity: 'R', story: 'Вы смотрели на звёзды. Он показал тебе свою любимую. "Я назову её твоим именем", сказал он.' }
    ],
    SR: [
        { id: 'sr1', name: 'Романтический ужин', emoji: '🍷', rarity: 'SR', story: 'Ресторан на крыше. Свечи, вид на город, его взгляд. Он говорил о будущем. Ты поняла: это оно.' },
        { id: 'sr2', name: 'Поездка на море', emoji: '🌊', rarity: 'SR', story: 'Вы уехали на море в 5 утра. Закат был золотым, как твои волосы. Он сказал: "Хочу просыпаться рядом с тобой вечно".' },
        { id: 'sr3', name: 'Тайное послание', emoji: '✉️', rarity: 'SR', story: 'Старая книга в библиотеке. Между страницами — его письмо. Он признавался в любви три года назад. И ждал, пока ты найдёшь его.' },
        { id: 'sr4', name: 'Первый поцелуй', emoji: '💋', rarity: 'SR', story: 'Возвращаясь домой, он остановился. Взял твоё лицо в руки. Поцелуй был нежным, как лепесток розы. Мир замер.' },
        { id: 'sr5', name: 'Объятие под дождём', emoji: '🌂', rarity: 'SR', story: 'Гроза застала вас в парке. Он обнял тебя. Дождь стучал по листьям, а ты слышала только его сердце.' },
        { id: 'sr6', name: 'Свидание в книжном', emoji: '📚', rarity: 'SR', story: 'Вы бродили между стеллажами. Он достал книгу. "Это твоя история", сказал он. Ты открыла — и увидела его признание.' },
        { id: 'sr7', name: 'Утро вместе', emoji: '🌅', rarity: 'SR', story: 'Ты проснулась от запаха кофе. Он стоял у плиты и улыбался. "Доброе утро", сказал он. Это было идеальное утро.' },
        { id: 'sr8', name: 'Кольцо', emoji: '💍', rarity: 'SR', story: 'Он встал на одно колено. Не в ресторане, а на крыше твоего дома. "Выходи за меня", прошептал он. Ты сказала "да".' }
    ],
    UR: [
        { id: 'ur1', name: 'Звездный танец', emoji: '🌠', rarity: 'UR', story: 'Ночь на холме. Миллиарды звёзд кружились над вами. Он взял твою руку и закружил в танце. Ты почувствовала, что паришь. "Я люблю тебя", сказал он. В этот момент упала звезда, будто подтверждая его слова.' },
        { id: 'ur2', name: 'Вечная клятва', emoji: '💎', rarity: 'UR', story: 'В старом храме, где никто не знал о вас, вы дали клятву. Он держал твои руки и говорил: "Я буду с тобой в этой жизни и в следующей". Это не было игрой. Это было навсегда.' },
        { id: 'ur3', name: 'Судьбоносная встреча', emoji: '🌌', rarity: 'UR', story: 'Ты сидела в парке. Он подошёл. "Мы уже встречались", сказал он. Ты не помнила. Тогда он рассказал тебе о прошлой жизни. Вы снова нашли друг друга.' },
        { id: 'ur4', name: 'Письмо сквозь время', emoji: '⌛', rarity: 'UR', story: 'Ты нашла старый сундук. Внутри — письма, написанные сто лет назад. Твой почерк. Его подпись. Ты поняла: вы ждали друг друга целую вечность.' },
        { id: 'ur5', name: 'Крылья любви', emoji: '🕊️', rarity: 'UR', story: 'Он спас тебя от падения. Буквально. Ты упала с обрыва, а он поймал тебя. "Я всегда буду ловить тебя", сказал он. Ты поверила.' }
    ],
    SSR: [
        { id: 'ssr1', name: 'Сердце Вселенной', emoji: '❤️‍🔥', rarity: 'SSR', story: 'Ты стояла на краю мира. Он подошёл сзади и обнял. "Ты — мой мир", прошептал он. В этот момент небо взорвалось северным сиянием. Ты поняла: вы — часть одной вселенной. Ничто не может вас разлучить.' },
        { id: 'ssr2', name: 'Бессмертная история', emoji: '👑', rarity: 'SSR', story: 'Легенды говорят о двух влюблённых, которые бросили вызов богам. Они были прокляты, но их любовь оказалась сильнее. Ты вспомнила свою прошлую жизнь. Он был королём. Ты — воином. Вы обречены быть вместе вечно.' },
        { id: 'ssr3', name: 'За гранью реальности', emoji: '🌀', rarity: 'SSR', story: 'Ты попала в другое измерение. Там он был другим — холодным и безжалостным. Но ты пробилась сквозь тьму. Ты напомнила ему, кто он. "Я помню...", сказал он. И портал закрылся, оставив вас вместе навсегда.' },
        { id: 'ssr4', name: 'Эхо любви', emoji: '🔊', rarity: 'SSR', story: 'Ты услышала голос в пустоте. Он звал тебя. Ты пошла на звук. В центре зала стоял он. "Я искал тебя 1000 лет", сказал он. И поцеловал. Время остановилось. Эхо их любви будет звучать вечно.' }
    ]
};

// ============================================================
//  БОССЫ ДЛЯ БОЯ
// ============================================================

const BOSSES = [
    { name: 'Теневой монстр', emoji: '👾', hp: 30, attack: 5, level: 1, reward: { diamonds: 10, exp: 15, love: 3 } },
    { name: 'Огненный дракон', emoji: '🐉', hp: 45, attack: 8, level: 3, reward: { diamonds: 15, exp: 25, love: 5 } },
    { name: 'Ледяная ведьма', emoji: '❄️', hp: 55, attack: 10, level: 5, reward: { diamonds: 20, exp: 35, love: 7 } },
    { name: 'Тёмный властелин', emoji: '👹', hp: 70, attack: 12, level: 8, reward: { diamonds: 30, exp: 50, love: 10 } },
    { name: 'Эпический босс', emoji: '⚡', hp: 100, attack: 15, level: 10, reward: { diamonds: 50, exp: 80, love: 15 } }
];

// ============================================================
//  СОСТОЯНИЕ ИГРЫ
// ============================================================

let gameState = {
    playerName: 'Игрок',
    diamonds: 100,
    level: 1,
    exp: 0,
    maxExp: 50,
    currentChar: 'luciel',
    characters: JSON.parse(JSON.stringify(CHARACTERS)),
    collectedCards: [],
    skillUsed: false,
    currentBossIndex: 0,
    battle: {
        enemyHp: 0,
        maxEnemyHp: 0,
        playerHp: 20,
        maxPlayerHp: 20,
        isDefending: false,
        enemyAttack: 0,
        enemyName: '',
        enemyEmoji: ''
    },
    chatHistory: [],
    storyProgress: {}
};

// ============================================================
//  ИНИЦИАЛИЗАЦИЯ
// ============================================================

function initGame() {
    loadGame();
    
    // Вкладки
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchTab(this.dataset.tab);
        });
    });
    
    // Выбор персонажа
    document.querySelectorAll('.char-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.char-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            gameState.currentChar = this.dataset.char;
            document.getElementById('chatWindow').innerHTML = '';
            const char = gameState.characters[gameState.currentChar];
            addMessage(`${char.avatar} ${char.name}`, char.dialogues[0], true);
            updateStoryIndicator();
            updateUI();
        });
    });
    
    // Отправка сообщения
    document.getElementById('sendBtn').addEventListener('click', sendMessage);
    document.getElementById('messageInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sendMessage();
    });
    
    // Фильтры коллекции
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderCollection(this.dataset.filter);
        });
    });
    
    // Закрытие модалок
    document.getElementById('settings-modal').addEventListener('click', function(e) {
        if (e.target === this) closeSettings();
    });
    document.getElementById('story-modal').addEventListener('click', function(e) {
        if (e.target === this) closeStory();
    });
    
    // Запускаем бой
    initBattle();
    updateUI();
    renderCollection('all');
    updateCharactersGrid();
    
    console.log('✦ Echoes of Love v2.0 загружена!');
    console.log(`💎 ${gameState.diamonds} алмазов, ${gameState.collectedCards.length} карт`);
}

// ============================================================
//  ЧАТ С СЮЖЕТОМ
// ============================================================

function updateStoryIndicator() {
    const char = gameState.characters[gameState.currentChar];
    const love = char.love;
    let chapter = 'Глава 1: Знакомство';
    if (love >= 80) chapter = 'Глава 5: Вечность';
    else if (love >= 60) chapter = 'Глава 4: Искра';
    else if (love >= 40) chapter = 'Глава 3: Притяжение';
    else if (love >= 20) chapter = 'Глава 2: Интерес';
    document.getElementById('storyIndicator').textContent = `📖 ${chapter}`;
}

function addMessage(sender, text, isBot = true) {
    const chatWindow = document.getElementById('chatWindow');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${isBot ? 'bot' : 'player'}`;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    msgDiv.innerHTML = `<span class="sender">${sender}</span>${text}<span class="time">${time}</span>`;
    chatWindow.appendChild(msgDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    
    const char = gameState.characters[gameState.currentChar];
    addMessage('Вы', text, false);
    
    const responses = char.dialogues;
    const response = responses[Math.floor(Math.random() * responses.length)];
    
    setTimeout(() => {
        addMessage(`${char.avatar} ${char.name}`, response, true);
        
        // Начисляем любовь
        const loveGain = Math.floor(Math.random() * 2) + 1;
        char.love = Math.min(char.love + loveGain, char.maxLove);
        updateStoryIndicator();
        updateUI();
        saveGame();
    }, 400 + Math.random() * 600);
}

// ============================================================
//  ГАЧА С НОВЫМИ РАРИТЕТАМИ
// ============================================================

function pullGacha() {
    if (gameState.diamonds < 50) {
        document.getElementById('gachaCardInfo').textContent = '❌ Не хватает алмазов!';
        document.getElementById('gachaCardInfo').className = '';
        return;
    }
    
    gameState.diamonds -= 50;
    updateUI();
    
    const slot = document.getElementById('cardPlaceholder');
    slot.classList.remove('flip');
    void slot.offsetWidth;
    slot.classList.add('flip');
    
    const roll = Math.random() * 100;
    let rarity, pool;
    if (roll < 45) { rarity = 'R'; pool = ALL_CARDS.R; }
    else if (roll < 80) { rarity = 'SR'; pool = ALL_CARDS.SR; }
    else if (roll < 95) { rarity = 'UR'; pool = ALL_CARDS.UR; }
    else { rarity = 'SSR'; pool = ALL_CARDS.SSR; }
    
    const card = pool[Math.floor(Math.random() * pool.length)];
    
    // Проверяем, есть ли уже такая карта
    if (!gameState.collectedCards.includes(card.id)) {
        gameState.collectedCards.push(card.id);
    }
    
    setTimeout(() => {
        const info = document.getElementById('gachaCardInfo');
        const rarityEmojis = { R: '📘', SR: '📗', UR: '📕', SSR: '🌟' };
        info.textContent = `${rarityEmojis[rarity]} ${card.emoji} ${card.name} (${rarity})`;
        info.className = `card-info ${rarity.toLowerCase()}`;
        slot.textContent = card.emoji;
        
        if (rarity === 'SSR' || rarity === 'UR') {
            const char = gameState.characters[gameState.currentChar];
            const bonus = rarity === 'SSR' ? 5 : 3;
            char.love = Math.min(char.love + bonus, char.maxLove);
            info.textContent += ` ❤️ +${bonus} любви!`;
            updateStoryIndicator();
        }
        
        updateUI();
        renderCollection('all');
        saveGame();
    }, 600);
}

// ============================================================
//  КОЛЛЕКЦИЯ С ИСТОРИЯМИ
// ============================================================

function renderCollection(filter = 'all') {
    const grid = document.getElementById('collectionGrid');
    grid.innerHTML = '';
    
    let cards = [];
    for (const rarity of ['R', 'SR', 'UR', 'SSR']) {
        if (filter === 'all' || filter === rarity) {
            for (const card of ALL_CARDS[rarity]) {
                const has = gameState.collectedCards.includes(card.id);
                cards.push({ ...card, has });
            }
        }
    }
    
    if (cards.length === 0) {
        grid.innerHTML = '<p style="opacity:0.3;text-align:center;grid-column:1/-1;padding:40px 0;">Нет карт этого типа</p>';
        return;
    }
    
    for (const card of cards) {
        const div = document.createElement('div');
        div.className = 'collection-card';
        
        if (!card.has) {
            div.innerHTML = `
                <div class="card-locked">🔒</div>
                <span class="card-emoji">?</span>
                <div class="card-name">Неизвестно</div>
                <div class="card-rarity ${card.rarity}">${card.rarity}</div>
            `;
        } else {
            div.innerHTML = `
                <span class="card-emoji">${card.emoji}</span>
                <div class="card-name">${card.name}</div>
                <div class="card-rarity ${card.rarity}">${card.rarity}</div>
            `;
            div.addEventListener('click', () => openStory(card));
        }
        
        grid.appendChild(div);
    }
}

function openStory(card) {
    const modal = document.getElementById('story-modal');
    const content = document.getElementById('storyText');
    const rarityColors = { R: 'серый', SR: 'золотой', UR: 'розовый', SSR: 'сияющий' };
    content.innerHTML = `
        <span class="story-title">${card.emoji} ${card.name}</span>
        <span class="story-rarity">${card.rarity} — ${rarityColors[card.rarity]} уровень</span>
        ${card.story}
    `;
    modal.classList.add('active');
}

function closeStory() {
    document.getElementById('story-modal').classList.remove('active');
}

// ============================================================
//  БОЙ С ПРОКАЧКОЙ
// ============================================================

function initBattle() {
    const boss = BOSSES[gameState.currentBossIndex % BOSSES.length];
    gameState.battle.enemyName = boss.name;
    gameState.battle.enemyEmoji = boss.emoji;
    gameState.battle.maxEnemyHp = boss.hp + (gameState.level - 1) * 5;
    gameState.battle.enemyHp = gameState.battle.maxEnemyHp;
    gameState.battle.enemyAttack = boss.attack + Math.floor(gameState.level / 2);
    gameState.battle.maxPlayerHp = 20 + (gameState.level - 1) * 3;
    gameState.battle.playerHp = gameState.battle.maxPlayerHp;
    gameState.battle.isDefending = false;
    gameState.skillUsed = false;
    
    document.getElementById('enemyName').textContent = boss.name;
    document.getElementById('battleEnemyAvatar').textContent = boss.emoji;
    document.getElementById('enemyLevel').textContent = boss.level + Math.floor((gameState.level - 1) / 2);
    document.getElementById('battleRewards').style.display = 'none';
    document.getElementById('battleLog').textContent = `⚔️ Бой с ${boss.name}!`;
    updateUI();
}

function battleLog(msg) {
    document.getElementById('battleLog').textContent = msg;
}

function battleAttack() {
    if (gameState.battle.playerHp <= 0 || gameState.battle.enemyHp <= 0) {
        initBattle();
        return;
    }
    
    const char = gameState.characters[gameState.currentChar];
    const attackPower = char.stats.attack + Math.floor(gameState.level / 2);
    const damage = Math.floor(Math.random() * attackPower) + 5;
    gameState.battle.enemyHp -= damage;
    gameState.battle.enemyHp = Math.max(0, gameState.battle.enemyHp);
    battleLog(`⚔️ Вы нанесли ${damage} урона!`);
    updateUI();
    
    if (gameState.battle.enemyHp <= 0) {
        battleWin();
        return;
    }
    
    setTimeout(enemyTurn, 500);
}

function battleDefend() {
    if (gameState.battle.playerHp <= 0 || gameState.battle.enemyHp <= 0) {
        initBattle();
        return;
    }
    gameState.battle.isDefending = true;
    battleLog('🛡️ Вы защищаетесь!');
    setTimeout(enemyTurn, 400);
}

function battleSkill() {
    if (gameState.skillUsed) {
        battleLog('⛔ Навык уже использован в этом бою!');
        return;
    }
    if (gameState.battle.playerHp <= 0 || gameState.battle.enemyHp <= 0) {
        initBattle();
        return;
    }
    
    const char = gameState.characters[gameState.currentChar];
    const damage = Math.floor(Math.random() * 15) + 10;
    gameState.battle.enemyHp -= damage;
    gameState.battle.enemyHp = Math.max(0, gameState.battle.enemyHp);
    gameState.skillUsed = true;
    battleLog(`💥 ${char.stats.skill}! ${damage} урона!`);
    updateUI();
    
    if (gameState.battle.enemyHp <= 0) {
        battleWin();
        return;
    }
    
    setTimeout(enemyTurn, 500);
}

function battleHeal() {
    if (gameState.diamonds < 10) {
        battleLog('❌ Не хватает алмазов!');
        return;
    }
    if (gameState.battle.playerHp <= 0 || gameState.battle.enemyHp <= 0) {
        initBattle();
        return;
    }
    gameState.diamonds -= 10;
    gameState.battle.playerHp = Math.min(gameState.battle.playerHp + 15, gameState.battle.maxPlayerHp);
    battleLog('💚 +15 HP восстановлено!');
    updateUI();
    setTimeout(enemyTurn, 500);
}

function enemyTurn() {
    if (gameState.battle.playerHp <= 0 || gameState.battle.enemyHp <= 0) {
        return;
    }
    
    let damage = Math.floor(Math.random() * gameState.battle.enemyAttack) + 3;
    if (gameState.battle.isDefending) {
        damage = Math.floor(damage / 2);
        battleLog(`🛡️ Защита снизила урон до ${damage}!`);
        gameState.battle.isDefending = false;
    } else {
        battleLog(`💢 ${gameState.battle.enemyName} нанёс ${damage} урона!`);
    }
    
    gameState.battle.playerHp -= damage;
    gameState.battle.playerHp = Math.max(0, gameState.battle.playerHp);
    updateUI();
    
    if (gameState.battle.playerHp <= 0) {
        battleLog('💀 ВЫ ПРОИГРАЛИ... Попробуйте снова!');
        setTimeout(initBattle, 1500);
    } else {
        battleLog('⏳ Ваш ход...');
    }
}

function battleWin() {
    const boss = BOSSES[gameState.currentBossIndex % BOSSES.length];
    const reward = boss.reward;
    
    // Награды
    gameState.diamonds += reward.diamonds;
    gameState.exp += reward.exp;
    const char = gameState.characters[gameState.currentChar];
    char.love = Math.min(char.love + reward.love, char.maxLove);
    
    // Проверка уровня
    while (gameState.exp >= gameState.maxExp) {
        gameState.exp -= gameState.maxExp;
        gameState.level += 1;
        gameState.maxExp = Math.floor(gameState.maxExp * 1.3);
        battleLog(`🎉 УРОВЕНЬ ПОВЫШЕН! Ты теперь ${gameState.level} уровень!`);
    }
    
    // Показываем награды
    document.getElementById('rewardDiamonds').textContent = reward.diamonds;
    document.getElementById('rewardExp').textContent = reward.exp;
    document.getElementById('rewardLove').textContent = reward.love;
    document.getElementById('battleRewards').style.display = 'flex';
    
    gameState.currentBossIndex += 1;
    updateUI();
    updateStoryIndicator();
    saveGame();
}

function resetBattle() {
    document.getElementById('battleRewards').style.display = 'none';
    initBattle();
}

// ============================================================
//  ПЕРСОНАЖИ С ДЕТАЛЬНЫМ ПРОСМОТРОМ
// ============================================================

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
            <div class="char-title" style="font-size:0.7rem;opacity:0.4;">${char.title}</div>
            <div class="char-love">❤️ ${char.love}/${char.maxLove}</div>
            <div class="love-fill"><div class="love-fill-inner" style="width:${lovePercent}%"></div></div>
            <div style="font-size:0.75rem;opacity:0.3;margin-top:4px;">Уровень: ${char.level}</div>
            <button onclick="openCharDetail('${charId}')" style="margin-top:8px;padding:4px 16px;border:none;border-radius:8px;background:rgba(123,47,247,0.2);color:white;cursor:pointer;">Подробнее</button>
        `;
        grid.appendChild(card);
    }
}

function openCharDetail(charId) {
    const char = gameState.characters[charId];
    const detail = document.getElementById('characterDetail');
    const content = document.getElementById('charDetailContent');
    const lovePercent = (char.love / char.maxLove) * 100;
    const nextLevelExp = char.maxExp - char.exp;
    
    content.innerHTML = `
        <span class="big-avatar">${char.avatar}</span>
        <h2 style="font-size:1.8rem;">${char.name}</h2>
        <div style="opacity:0.4;font-size:0.9rem;">${char.title}</div>
        <div class="char-stats">
            ❤️ ${char.love}/${char.maxLove} 
            <div class="love-fill" style="width:200px;margin:4px auto;"><div class="love-fill-inner" style="width:${lovePercent}%;"></div></div>
        </div>
        <div class="char-stats">
            ⚔️ Атака: ${char.stats.attack} | 🛡️ Защита: ${char.stats.defense}
        </div>
        <div class="char-stats">
            💥 Навык: ${char.stats.skill}
        </div>
        <div class="char-stats">
            ⭐ Уровень: ${char.level} | Опыт: ${char.exp}/${char.maxExp}
            <div style="width:200px;height:4px;background:rgba(255,255,255,0.05);border-radius:4px;margin:4px auto;">
                <div style="width:${(char.exp/char.maxExp)*100}%;height:100%;background:linear-gradient(90deg,#7b2ff7,#b44bfc);border-radius:4px;"></div>
            </div>
            ${nextLevelExp > 0 ? `До следующего уровня: ${nextLevelExp} опыта` : '⭐ МАКСИМАЛЬНЫЙ УРОВЕНЬ!'}
        </div>
        <div class="char-bio">${char.bio}</div>
        <div style="opacity:0.3;font-size:0.8rem;max-width:300px;margin-top:8px;">
            "${char.personality}"
        </div>
    `;
    detail.style.display = 'flex';
}

function closeCharDetail() {
    document.getElementById('characterDetail').style.display = 'none';
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
    
    // HP в бою
    const enemyPercent = (gameState.battle.enemyHp / gameState.battle.maxEnemyHp) * 100;
    const playerPercent = (gameState.battle.playerHp / gameState.battle.maxPlayerHp) * 100;
    document.getElementById('enemyHpBar').style.width = Math.max(0, enemyPercent) + '%';
    document.getElementById('playerHpBar').style.width = Math.max(0, playerPercent) + '%';
    document.getElementById('enemyHpText').textContent = `${Math.max(0, gameState.battle.enemyHp)}/${gameState.battle.maxEnemyHp}`;
    document.getElementById('playerHpText').textContent = `${Math.max(0, gameState.battle.playerHp)}/${gameState.battle.maxPlayerHp}`;
    
    document.querySelector('.btn-skill').disabled = gameState.skillUsed;
    
    updateCharactersGrid();
    saveGame();
}

// ============================================================
//  НАВИГАЦИЯ
// ============================================================

function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `tab-${tabId}`);
    });
    if (tabId === 'battle') updateUI();
    if (tabId === 'characters') updateCharactersGrid();
    if (tabId === 'collection') renderCollection('all');
}

function startGame() {
    document.getElementById('menu-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    const char = gameState.characters[gameState.currentChar];
    addMessage(`${char.avatar} ${char.name}`, `Привет. Я ${char.name}. ${char.dialogues[0]}`, true);
    updateUI();
    updateStoryIndicator();
}

function showSettings() {
    document.getElementById('settings-modal').classList.add('active');
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
//  СОХРАНЕНИЕ
// ============================================================

function saveGame() {
    try {
        localStorage.setItem('loveEchoesV2', JSON.stringify(gameState));
    } catch (e) {
        console.warn('Не сохранилось:', e);
    }
}

function loadGame() {
    try {
        const saved = localStorage.getItem('loveEchoesV2');
        if (saved) {
            const parsed = JSON.parse(saved);
            gameState = parsed;
            // Восстанавливаем диалоги
            for (const charId of Object.keys(gameState.characters)) {
                if (CHARACTERS[charId]) {
                    gameState.characters[charId].dialogues = CHARACTERS[charId].dialogues;
                    gameState.characters[charId].bio = CHARACTERS[charId].bio;
                }
            }
            return true;
        }
    } catch (e) {
        console.warn('Не загрузилось:', e);
    }
    return false;
}

// ============================================================
//  ЗАПУСК
// ============================================================

document.addEventListener('DOMContentLoaded', initGame);