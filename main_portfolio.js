const projectData = {
    voiceSales: {
        badge: "Complex Integration",
        title: "Голосовой AI-менеджер по продажам",
        lead: "Голосовой AI-администратор для стоматологии на базе ElevenLabs и n8n: принимает звонки, проверяет слоты и после подтверждения записи фиксирует клиента в AmoCRM.",
        metrics: [
            { value: "24/7", label: "Приём входящих лидов" },
            { value: "Real-time", label: "Проверка слотов" },
            { value: "E2E", label: "Запись до CRM" }
        ],
        highlights: [
            "Системный prompt ведёт диалог как администратор клиники: уточняет жалобу и мягко ведёт к записи.",
            "Перед подтверждением агент обязательно вызывает `check_availability`, предлагает альтернативное окно при занятом слоте и не создаёт ложных записей.",
            "После подтверждения `save_dental_lead` создаёт контакт, сделку и задачу в AmoCRM, а администратор получает уведомление в Telegram."
        ],
        architecture: [
            "ElevenLabs Conversational AI работает как voice-frontend с инструментами `get_current_date`, `check_availability` и `save_dental_lead`.",
            "n8n принимает вебхуки, нормализует естественные даты и считает reminder timestamp для CRM-задачи.",
            "AmoCRM API v4 и Google Calendar вместе фиксируют лид и не дают бронировать занятые окна."
        ],
        stack: ["ElevenLabs", "n8n", "AmoCRM API v4", "Google Calendar", "Telegram"],
        note: "По самому проекту видно, что это уже не просто voice-bot, а полноценный AI receptionist с проверкой слотов, CRM-воронкой и оповещением команды в реальном времени.",
        repo: {
            url: "https://github.com/ruslan-automation/ai-voice-sales-agent",
            label: "GitHub репозиторий"
        },
        video: {
            file: "0317.mp4",
            type: "video/mp4",
            title: "Видео звонка, проверки слотов и фиксации в CRM",
            note: "В модалке подключено реальное демо 0317.mp4: разговор с пациентом, выбор времени и передача данных в CRM-сценарий."
        }
    },
    bitrixDispatcher: {
        badge: "Production Ready",
        title: "CRM-автоматизация для Bitrix24",
        lead: "Система для сервисного бизнеса: ведет клиента от сайта или Telegram до онлайн-записи, оплаты и сделки в Bitrix24. Дополнительные сценарии показывают AI-администратора, маршрутизацию заявок и ручную проверку спорных обращений.",
        metrics: [
            { value: "YCLIENTS", label: "Онлайн-запись" },
            { value: "ЮKassa", label: "Статус оплаты" },
            { value: "CRM", label: "Сделка + расписание" }
        ],
        highlights: [
            "Клиент проходит путь от сайта до записи: выбирает услугу, специалиста и свободное время через YCLIENTS.",
            "Оплата проходит через тестовый контур ЮKassa, а Bitrix24 получает сделку со статусом оплаты, суммой, услугой, датой и временем.",
            "Telegram AI-администратор консультирует клиента, помогает выбрать процедуру и время, отправляет ссылку на предоплату и доводит заявку до сделки в Bitrix24."
        ],
        architecture: [
            "Публичная страница записи, YCLIENTS, ЮKassa и Bitrix24 связаны в один клиентский маршрут без ручного переноса данных.",
            "В Bitrix24 менеджер видит этап клиента: новая запись, ожидание оплаты, оплаченная запись и параметры визита.",
            "FastAPI, Postgres, OpenRouter и Telegram дополняют CRM-сценарий приемом диалогов, журналом действий, повторной обработкой сбоев и ручной проверкой."
        ],
        stack: ["FastAPI", "Bitrix24 Webhook", "YCLIENTS", "ЮKassa", "Postgres", "OpenRouter", "Telegram"],
        note: "Это сильный B2B-кейс на стыке CRM, записи, оплаты и AI-обработки обращений: видно, что я умею связывать клиентский путь, платежи, расписание, Telegram-диалог и внутренние CRM-процессы в управляемую систему.",
        repo: {
            url: "https://github.com/ruslan-automation/bitrix-demo-detailing",
            label: "GitHub репозиторий"
        },
        video: {
            file: "bitrix_booking_yclients_demo.mp4",
            type: "video/mp4",
            title: "Основной сценарий: онлайн-запись, оплата и сделка в Bitrix24",
            note: "Клиент выбирает услугу и время через YCLIENTS, оплачивает через ЮKassa, а Bitrix24 получает сделку со статусом оплаты и деталями визита."
        },
        secondaryVideos: [
            {
                file: "bitrix_telegram_ai_admin_demo.mp4",
                type: "video/mp4",
                title: "Сценарий 2: Telegram AI-администратор",
                note: "Клиент пишет в Telegram, AI-администратор уточняет процедуру, предлагает ближайшие окна, собирает контакт, отправляет ссылку на предоплату и доводит запись до сделки в Bitrix24."
            },
            {
                file: "bitrix_demo_subtitled.mp4",
                type: "video/mp4",
                title: "Сценарий 3: AI-диспетчер заявок",
                note: "Прием обращений из Telegram и веб-форм, AI-классификация через OpenRouter, создание CRM-сущностей и операторский контур для спорных кейсов."
            }
        ]
    },
    vacancyBot: {
        badge: "Production Ready",
        title: "Бот для поиска вакансий",
        lead: "Python-система для HH.ru: ищет вакансии, AI-скорит релевантность, генерирует cover letter и работает в auto/manual режиме на VPS.",
        metrics: [
            { value: "24/7", label: "Работа на VPS" },
            { value: "30/5", label: "Лимиты день / час" },
            { value: "17.02", label: "Залит на VPS" }
        ],
        highlights: [
            "Ищет вакансии на HH.ru каждые 30-60 минут и отбирает только подходящие.",
            "Считает AI score и генерирует персонализированные сопроводительные письма через OpenRouter.",
            "Поддерживает auto/manual режимы с approve/skip очередью в Telegram."
        ],
        architecture: [
            "Python 3.10+ orchestration, pytest и централизованный config.",
            "Playwright + BeautifulSoup/lxml для авторизации, поиска и работы с dynamic HTML.",
            "OpenRouter + SQLite + Telegram Bot дают scoring, очередь откликов и контроль статусов на VPS."
        ],
        stack: ["Python 3.10+", "Playwright", "OpenRouter", "SQLite", "Telegram Bot", "systemd"],
        note: "По самому проекту видно, что это уже не просто парсер, а полноценный automation-worker с Telegram control plane, manual review queue и отдельным web/API слоем для управления откликами.",
        repo: {
            url: "https://github.com/ruslan-automation/hh-auto-apply",
            label: "GitHub репозиторий"
        },
        video: {
            file: "Бот вакансий.mp4",
            type: "video/mp4",
            title: "Видео работы бота по вакансиям",
            note: "В модалке уже подключено реальное видео Бот вакансий.mp4 с демонстрацией работы бота для поиска вакансий."
        }
    },
    ragKnowledge: {
        badge: "Vector Database",
        title: "Корпоративная AI база знаний",
        lead: "Legal RAG Assistant на Pinecone и n8n: Telegram-бот ищет релевантные статьи, цитирует источники и отвечает только по загруженной базе.",
        metrics: [
            { value: "7", label: "Статей в базе знаний" },
            { value: "~20", label: "Векторов в Pinecone" },
            { value: "<2 сек", label: "Средний ответ в Telegram" }
        ],
        highlights: [
            "Pinecone хранит юридическую базу в формате чанков для точного retrieval.",
            "OpenAI embeddings + OpenRouter формируют grounded-ответ по найденному контексту.",
            "Если релевантной информации нет, бот честно отказывается отвечать."
        ],
        architecture: [
            "Ingestion workflow: `legal_knowledge_base.json` -> chunking -> OpenAI embeddings -> Pinecone.",
            "Chat workflow: Telegram -> embedding вопроса -> Pinecone -> контекст -> OpenRouter -> ответ.",
            "n8n оркестрирует и загрузку базы, и продовый поиск по ней."
        ],
        stack: ["Pinecone", "OpenAI Embeddings", "OpenRouter", "n8n", "Telegram Bot API"],
        note: "Сильная сторона этого кейса в том, что он показывает RAG не как абстрактный чат, а как grounded knowledge system с ingestion, vector search, source citation и защитой от hallucinations.",
        repo: {
            url: "https://github.com/ruslan-automation/enterprise-rag-system",
            label: "GitHub репозиторий"
        },
        video: {
            title: "Видео демо Legal RAG Assistant",
            note: "Реальный сценарий: вопрос в Telegram, retrieval по Pinecone и ответ с цитированием статьи и disclaimer.",
            file: "0317 (2).mp4",
            type: "video/mp4"
        }
    },
    leadRadarSystem: {
        badge: "Production Ready",
        title: "Система авто-поиска лидов",
        lead: "Система из 5 n8n workflow: мониторит hh.ru, FL.ru, Habr Career и Telegram, AI-скорит лиды, пишет их в CRM и ведёт follow-up.",
        metrics: [
            { value: "5", label: "Связанных workflow" },
            { value: "4+", label: "Источника лидов" },
            { value: "48h", label: "Follow-up логика" }
        ],
        highlights: [
            "Отдельные мониторы по расписанию ищут релевантные вакансии и заказы из 4+ источников.",
            "OpenRouter + Gemini Flash оценивают лиды и сразу готовят draft-отклик.",
            "Подходящие лиды пишутся в Google Sheets CRM и мгновенно уходят в Telegram вместе со score и reason."
        ],
        architecture: [
            "Source-workflows запускаются по cron для hh.ru, Habr Career, FL.ru и Telegram.",
            "Static data дедуплицирует лиды и не даёт повторно обработать одну и ту же позицию.",
            "После scoring система пишет лид в CRM, шлёт уведомление и отдельно ведёт follow-up старше 48 часов."
        ],
        stack: ["n8n", "hh.ru API", "OpenRouter", "Gemini Flash", "Google Sheets", "Telegram"],
        note: "По проекту видно, что это уже не просто парсер вакансий, а полноценная lead-ops система: multi-source ingestion, AI triage, CRM-учёт, Telegram-оповещение и follow-up контур поверх таблицы.",
        repo: {
            url: "https://github.com/ruslan-automation/lead-radar-system",
            label: "GitHub репозиторий"
        },
        video: {
            title: "Видео демо системы авто-поиска лидов",
            note: "Реальный сценарий: новые вакансии, AI scoring, сохранение в CRM и Telegram-оповещение.",
            file: "Shorts HH2.mp4",
            type: "video/mp4"
        }
    },
    kitchenSalesBot: {
        badge: "Сбор заявок",
        title: "Бот для заявок на кухни",
        lead: "Telegram-бот для мебельной студии: проводит по короткому опросу, собирает заявку и передаёт её менеджеру через Google Sheets.",
        metrics: [
            { value: "4", label: "шага в опросе" },
            { value: "без БД", label: "логика состояний" },
            { value: "видео", label: "дожим после заявки" }
        ],
        highlights: [
            "Квиз собирает ключевые параметры кухни через inline-кнопки и не перегружает пользователя анкетой.",
            "Состояние диалога зашито в callback payload, поэтому воронка работает без отдельной базы состояний.",
            "После квиза бот сохраняет лид, отправляет alert и запускает мягкий follow-up с video note."
        ],
        architecture: [
            "Telegram Trigger -> Router -> Parse Callback Data разбирают шаги квиза и действия пользователя.",
            "EditMessage обновляет интерфейс внутри одного чата, чтобы бот ощущался как мини-приложение.",
            "Google Sheets хранит заявки, а Wait + HTTP video note подогревают клиента после отправки."
        ],
        stack: ["n8n", "Telegram Bot API", "Google Sheets", "HTTP Request", "Stateless Logic"],
        note: "Этот кейс хорошо показывает, как простой бот может не просто собирать контакты, а доводить человека до реальной заявки и сразу передавать её в работу.",
        repo: {
            url: "https://github.com/ruslan-automation/telegram-kitchen-sales-bot",
            label: "GitHub репозиторий"
        },
        video: {
            file: "Китчен.mp4",
            type: "video/mp4",
            title: "Квиз, таблица лидов и догрев в одном сценарии",
            note: "В демо видно, как бот проводит пользователя по квизу, кладёт лид в Google Sheets и переводит переписку в более живой формат через video note."
        }
    },
    designBot: {
        badge: "Голосовой помощник",
        title: "AI-консультант для мебельной студии",
        lead: "Telegram-бот, который понимает текст и голос, помогает выбрать мебель и сам записывает клиента на консультацию в Google Calendar.",
        metrics: [
            { value: "голос", label: "понимает аудио" },
            { value: "память", label: "помнит диалог" },
            { value: "календарь", label: "сам записывает" }
        ],
        highlights: [
            "Бот принимает голосовые сообщения, переводит их в текст через Groq Whisper и продолжает диалог.",
            "AI-агент ведёт консультацию: уточняет стиль, цвета, конфигурацию и собирает контактные данные.",
            "После выбора времени агент проверяет доступность слота и только затем создаёт запись в Google Calendar."
        ],
        architecture: [
            "Telegram Trigger делит поток на text и voice, а аудио уходит в Groq Whisper.",
            "LangChain Agent с OpenRouter-моделью использует memory и помнит детали диалога.",
            "Google Calendar tools подключены прямо к агенту, поэтому он сам управляет записью."
        ],
        stack: ["n8n", "Groq Whisper", "OpenRouter", "Google Calendar", "Telegram Bot"],
        note: "Это уже не просто чат-бот, а настоящий AI-консультант: он разговаривает с клиентом, понимает запрос и доводит диалог до реальной встречи.",
        video: {
            file: "Дизайн.mp4",
            type: "video/mp4",
            title: "Голосовой AI-консультант с записью в календарь",
            note: "В ролике видно, как ассистент общается в Telegram, понимает voice и переводит диалог в реальную консультацию с записью."
        }
    },
    neonBot: {
        badge: "Визуальный расчёт",
        title: "Бот для расчёта неоновых вывесок",
        lead: "Бот для заказа неоновых вывесок: помогает выбрать текст, размер и цвет, показывает пример будущей вывески и сразу считает примерную стоимость.",
        metrics: [
            { value: "2 языка", label: "русская и английская версия" },
            { value: "<2 мин", label: "генерация макета" },
            { value: "цена + вид", label: "расчёт и визуал" }
        ],
        highlights: [
            "Собирает параметры вывески и уточняет их, если клиент не дал всё сразу.",
            "Отдельный калькулятор считает цену, а image-generation pipeline собирает визуал.",
            "Есть русская и английская версия для разных рынков."
        ],
        architecture: [
            "AI Agent в Telegram использует memory и два инструмента: `calculate_price` и `generate_image`.",
            "Calculator workflow считает цену по размерам, длине текста и цветам.",
            "Visualizer workflow запускает KIE generation и отправляет mockup обратно в Telegram."
        ],
        stack: ["n8n", "KIE.ai", "Gemini", "Telegram Bot API", "AI Agent"],
        note: "Этот кейс хорошо работает визуально: клиент не только узнаёт цену, но и сразу видит, как может выглядеть готовая вывеска.",
        video: {
            file: "Neon.mp4",
            type: "video/mp4",
            title: "От параметров заказа до визуализации вывески",
            note: "Видео показывает сбор параметров в Telegram и переход к визуальному mockup-сценарию для неоновой вывески."
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".reveal-up").forEach((element) => {
        gsap.fromTo(
            element,
            { y: 26, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.56,
                ease: "power2.out",
                scrollTrigger: { trigger: element, start: "top 85%", toggleActions: "play none none none" }
            }
        );
    });

    const cardsElements = document.querySelectorAll(".fade-on-scroll");
    cardsElements.forEach((el, index) => {
        gsap.fromTo(
            el,
            { y: 22, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.58,
                ease: "power2.out",
                delay: Math.min(index * 0.045, 0.14),
                scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" }
            }
        );
    });

    const magneticElements = document.querySelectorAll(".magnetic");
    magneticElements.forEach((elem) => {
        elem.addEventListener("mousemove", (e) => {
            const position = elem.getBoundingClientRect();
            const x = e.clientX - position.left - position.width / 2;
            const y = e.clientY - position.top - position.height / 2;
            gsap.to(elem, { x: x * 0.2, y: y * 0.2, duration: 0.5, ease: "power3.out" });
        });

        elem.addEventListener("mouseleave", () => {
            gsap.to(elem, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
        });
    });

    const terminalLines = [
        "> Initializing LLM context...",
        "> Loading Pinecone vectors... [OK]",
        "> Applying guardrails... [OK]",
        "> generating response_",
        "SYSTEM OK."
    ];
    const terminalEl = document.getElementById("llm-terminal");

    if (terminalEl) {
        let lineIndex = 0;
        setInterval(() => {
            if (lineIndex >= terminalLines.length) {
                terminalEl.innerHTML = "";
                lineIndex = 0;
            }

            const line = document.createElement("div");
            line.textContent = terminalLines[lineIndex];
            terminalEl.appendChild(line);
            lineIndex += 1;
        }, 1500);
    }

    const nodes = document.querySelectorAll(".pv-node");
    if (nodes.length > 0) {
        let activeNode = 0;
        setInterval(() => {
            nodes.forEach((node) => node.classList.remove("active"));
            nodes[activeNode].classList.add("active");
            activeNode = (activeNode + 1) % nodes.length;
        }, 1000);
    }
});

function renderMetricCards(metrics) {
    return (metrics || [])
        .map((metric) => `
            <div class="modal-metric">
                <span class="modal-metric-value">${metric.value}</span>
                <span class="modal-metric-label">${metric.label}</span>
            </div>
        `)
        .join("");
}

function renderListSection(title, items) {
    const conciseItems = (items || []).slice(0, 3);

    return `
        <div class="project-modal-section">
            <h3>${title}</h3>
            <ul>
                ${conciseItems.map((item) => `<li>${item}</li>`).join("")}
            </ul>
        </div>
    `;
}

function renderRepoLink(repo) {
    if (!repo?.url) {
        return "";
    }

    return `
        <div class="project-modal-links">
            <a class="project-modal-link" href="${repo.url}" target="_blank" rel="noopener noreferrer">
                ${repo.label || "GitHub репозиторий"} <span aria-hidden="true">↗</span>
            </a>
        </div>
    `;
}

function renderVideoArea(video) {
    if (video?.embedUrl) {
        return `
            <div class="modal-video-card">
                <div class="modal-video-frame">
                    <iframe
                        src="${video.embedUrl}"
                        title="${video.title || "Видео проекта"}"
                        loading="lazy"
                        allowfullscreen>
                    </iframe>
                </div>
                ${renderVideoCaption(video)}
            </div>
        `;
    }

    if (video?.file) {
        const poster = video.poster ? ` poster="${video.poster}"` : "";
        return `
            <div class="modal-video-card">
                <div class="modal-video-frame">
                    <video controls preload="metadata"${poster}>
                        <source src="${video.file}" type="${video.type || "video/mp4"}">
                    </video>
                </div>
                ${renderVideoCaption(video)}
            </div>
        `;
    }

    return `
        <div class="modal-video-placeholder">
            <span class="modal-video-label">Видео кейса</span>
            <div>
                <h3 class="modal-video-title">${video?.title || "Зона под видео"}</h3>
                <p class="modal-video-note">${video?.note || "Сюда можно добавить MP4, WebM или iframe с YouTube/Vimeo."}</p>
            </div>
        </div>
    `;
}

function renderVideoCaption(video) {
    if (!video?.title && !video?.note) {
        return "";
    }

    return `
        <div class="modal-video-caption">
            ${video.title ? `<h3>${video.title}</h3>` : ""}
            ${video.note ? `<p>${video.note}</p>` : ""}
        </div>
    `;
}

function renderVideoGallery(data) {
    const secondaryVideos = data.secondaryVideos || [];
    const secondaryMarkup = secondaryVideos.length
        ? `
            <div class="modal-secondary-videos">
                <span class="modal-secondary-title">${secondaryVideos.length > 1 ? "Дополнительные сценарии" : "Дополнительный сценарий"}</span>
                ${secondaryVideos.map((video) => renderVideoArea(video)).join("")}
            </div>
        `
        : "";

    return `
        ${renderVideoArea(data.video)}
        ${secondaryMarkup}
    `;
}

function openModal(projectId) {
    const modal = document.getElementById("projectModal");
    const modalBody = document.getElementById("modalBody");
    const data = projectData[projectId];

    if (!data) {
        return;
    }

    modalBody.innerHTML = `
        <div class="project-modal-shell">
            <div class="project-modal-media">
                <span class="modal-kicker">${data.badge}</span>
                ${renderVideoGallery(data)}
            </div>
            <div class="project-modal-copy">
                <h2 id="modalTitle">${data.title}</h2>
                <p class="project-modal-lead">${data.lead}</p>
                <div class="project-modal-metrics">
                    ${renderMetricCards(data.metrics)}
                </div>
                ${renderRepoLink(data.repo)}
                <div class="project-modal-grid">
                    ${renderListSection("Что внутри", data.highlights)}
                    ${renderListSection("Архитектура", data.architecture)}
                </div>
                <div class="project-modal-stack">
                    ${(data.stack || []).map((item) => `<span class="project-modal-chip">${item}</span>`).join("")}
                </div>
            </div>
        </div>
    `;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-close")?.focus();
}

function closeModal() {
    const modal = document.getElementById("projectModal");
    const modalBody = document.getElementById("modalBody");
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    modalBody.innerHTML = "";
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});
