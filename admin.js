const GITHUB_CONFIG = {
    owner: "dbaturinskorozvon-boop",
    repo: "proposal-builder",
    branch: "main",
    dataPath: "data.json"
};

const DIRECTIONS = [
    { id: "kor2", name: "КОР-2", label: "Основной продукт" },
    { id: "discovery", name: "Дискавери", label: "Дискавери-продукты" },
    { id: "active", name: "Активные", label: "Активные продажи" },
    { id: "service", name: "Сервисные", label: "Сервисные продажи" }
];

const USERS = [
    {
        email: "dbaturin@skorozvon.ru",
        passwordHash: "310a3e86f6118c3e3405c26412d42bb5115769fd97daf488f3f8963a8fbfaa89",
        role: "superadmin",
        name: "Дмитрий Батурин",
        directions: ["kor2", "discovery", "active", "service"]
    },
    {
        email: "rop.kor2@skorozvon.ru",
        passwordHash: "",
        role: "rop",
        name: "РОП КОР-2",
        directions: ["kor2"]
    },
    {
        email: "rop.discovery@skorozvon.ru",
        passwordHash: "",
        role: "rop",
        name: "РОП Дискавери",
        directions: ["discovery"]
    }
];

const ROP_DEFAULT_PASSWORD = "rop12345";

let currentUser = null;
let githubToken = localStorage.getItem("proposalBuilder_githubToken") || "";
let dataSha = null;
let adminData = null;
let isLoading = false;

async function loadData() {
    const response = await fetch(`https://raw.githubusercontent.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/${GITHUB_CONFIG.branch}/${GITHUB_CONFIG.dataPath}?t=${Date.now()}`);
    if (!response.ok) throw new Error("Failed to load data");
    return await response.json();
}

function getDefaultAdminData() {
    return {
        managers: [
            { id: 1, name: "Иванова Анна", email: "aivanova@skorozvon.ru", phone: "", telegram: "", max: "", photo: "", directions: ["kor2"] },
            { id: 2, name: "Белоусова Ксения", email: "kabelousova@skorozvon.ru", phone: "", telegram: "", max: "", photo: "", directions: ["kor2"] },
            { id: 3, name: "Шелудченко Ксения", email: "ksheludchenko@skorozvon.ru", phone: "", telegram: "", max: "", photo: "", directions: ["kor2"] },
            { id: 4, name: "Борисова Мария", email: "mshherbakova@skorozvon.ru", phone: "", telegram: "", max: "", photo: "", directions: ["kor2"] },
            { id: 5, name: "Захарова Юлия", email: "yzakharova@skorozvon.ru", phone: "", telegram: "", max: "", photo: "", directions: ["kor2"] }
        ],
        specialOffers: [
            {
                id: "so-module",
                title: "Бонус «50 000 + Модуль»",
                description: "Подойдет для тех, кто хочет получить эффективный запуск обзвона с максимальной экономией на старте.",
                directions: ["kor2"],
                bonuses: [
                    {
                        title: "Бонус: Модуль дозвона (1000 минут)",
                        intro: "На ваш счёт зачисляется 1000 минут, а также открываются инструменты:",
                        items: [
                            "Возможность загрузки сторонних номеров в Скорозвон.",
                            "Бесплатное подключение загруженных номеров для приёма входящих.",
                            "Создание неограниченного количества каруселей.",
                            "Возможность распределять номера с разными этикетками на разные проекты.",
                            "Дашборд процента дозваниваемости — в разрезе номер/карусель.",
                            "Посекундное списание за исходящие вызовы.",
                            "Автозамена номеров по времени и уровню дозваниваемости.",
                            "Дашборд для контроля и анализа процента дозваниваемости, автоответчиков."
                        ]
                    }
                ]
            },
            {
                id: "so-cashback",
                title: "Бонус «50 000 + кешбэк»",
                description: "Подойдет для тех, кто хочет получить эффективный запуск обзвона с максимальной экономией на старте.",
                directions: ["kor2"],
                bonuses: [
                    {
                        title: "Бонус: Кэшбэк 10 000 рублей",
                        intro: "",
                        items: [
                            "После внесения средств и старта кампании мы возвращаем вам 10 000 рублей.",
                            "Формат возврата: на ваш баланс в Скорозвоне."
                        ]
                    }
                ]
            }
        ],
        bonuses: [
            {
                id: "b1",
                icon: "🎁",
                title: "Подключение транка бесплатно",
                description: "При пополнении счёта от 50 000 ₽. Экономия 10 000 ₽!",
                directions: ["kor2"]
            },
            {
                id: "b2",
                icon: "🤖",
                title: "Бесплатный AI-пакет",
                description: "5 тренировок AI-тренера, 1 000 мин аналитики, скоринг 1 000 контактов.",
                directions: ["discovery"]
            },
            {
                id: "b3",
                icon: "📞",
                title: "20 номеров без абонентской платы",
                description: "На первый месяц использования.",
                directions: ["kor2"]
            }
        ]
    };
}

async function sha256(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

async function initRopPasswords() {
    for (const user of USERS) {
        if (user.role === "rop" && !user.passwordHash) {
            user.passwordHash = await sha256(ROP_DEFAULT_PASSWORD);
        }
    }
}

async function login(email, password) {
    await initRopPasswords();
    const passwordHash = await sha256(password);
    const user = USERS.find(u => u.email.toLowerCase() === email.toLowerCase() && u.passwordHash === passwordHash);
    return user || null;
}

function hasDirectionAccess(directionId) {
    if (!currentUser) return false;
    return currentUser.role === "superadmin" || currentUser.directions.includes(directionId);
}

function getAccessibleDirections() {
    if (!currentUser) return [];
    if (currentUser.role === "superadmin") return DIRECTIONS;
    return DIRECTIONS.filter(d => currentUser.directions.includes(d.id));
}

function init() {
    document.getElementById("loginForm").addEventListener("submit", handleLogin);
    document.getElementById("logoutBtn").addEventListener("click", handleLogout);
    document.getElementById("modalClose").addEventListener("click", closeModal);
    document.getElementById("modalCancel").addEventListener("click", closeModal);
    document.getElementById("modalSave").addEventListener("click", saveModal);

    document.querySelectorAll(".admin-nav-item").forEach(item => {
        item.addEventListener("click", e => {
            e.preventDefault();
            const section = item.dataset.section;
            showSection(section);
        });
    });

    document.getElementById("addManagerBtn").addEventListener("click", () => openManagerModal());
    document.getElementById("addOfferBtn").addEventListener("click", () => openOfferModal());
    document.getElementById("addBonusBtn").addEventListener("click", () => openBonusModal());
    document.getElementById("saveTokenBtn").addEventListener("click", saveToken);
    document.getElementById("testTokenBtn").addEventListener("click", testToken);

    document.getElementById("managersDirectionFilter").addEventListener("change", renderManagers);
    document.getElementById("offersDirectionFilter").addEventListener("change", renderSpecialOffers);
    document.getElementById("bonusesDirectionFilter").addEventListener("change", renderBonuses);

    const savedUser = sessionStorage.getItem("proposalBuilder_currentUser");
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showAdminLayout();
    }
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const errorEl = document.getElementById("loginError");

    const user = await login(email, password);
    if (user) {
        currentUser = user;
        sessionStorage.setItem("proposalBuilder_currentUser", JSON.stringify(user));
        errorEl.style.display = "none";
        showAdminLayout();
    } else {
        errorEl.textContent = "Неверный email или пароль";
        errorEl.style.display = "block";
    }
}

function handleLogout() {
    currentUser = null;
    sessionStorage.removeItem("proposalBuilder_currentUser");
    document.getElementById("adminLayout").style.display = "none";
    document.getElementById("loginScreen").style.display = "flex";
    document.getElementById("loginForm").reset();
    document.getElementById("loginError").style.display = "none";
}

async function showAdminLayout() {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("adminLayout").style.display = "flex";
    document.getElementById("adminUserName").textContent = currentUser.name;
    document.getElementById("adminUserRole").textContent = currentUser.role === "superadmin" ? "Суперадмин" : "Руководитель отдела продаж";

    if (currentUser.role === "superadmin") {
        document.getElementById("directionsNav").style.display = "block";
    }

    showGlobalLoading(true);
    try {
        adminData = await loadData();
    } catch (e) {
        showGlobalLoading(false);
        alert("Не удалось загрузить data.json. Убедитесь, что файл опубликован на GitHub Pages, и обновите страницу.");
        return;
    }
    showGlobalLoading(false);

    populateDirectionFilters();
    showSection("dashboard");
    renderDashboard();
}

function showGlobalLoading(show) {
    let overlay = document.getElementById("globalLoadingOverlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "globalLoadingOverlay";
        overlay.style.cssText = "position: fixed; inset: 0; background: rgba(255,255,255,0.8); display: flex; align-items: center; justify-content: center; z-index: 2000; font-size: 16px; font-weight: 600; color: var(--text-secondary);";
        overlay.textContent = "Загрузка данных...";
        document.body.appendChild(overlay);
    }
    overlay.style.display = show ? "flex" : "none";
}

function populateDirectionFilters() {
    const directions = getAccessibleDirections();
    ["managersDirectionFilter", "offersDirectionFilter", "bonusesDirectionFilter"].forEach(id => {
        const select = document.getElementById(id);
        const currentValue = select.value;
        select.innerHTML = '<option value="all">Все</option>';
        directions.forEach(d => {
            const option = document.createElement("option");
            option.value = d.id;
            option.textContent = d.name;
            select.appendChild(option);
        });
        select.value = currentValue || "all";
    });
}

function showSection(section) {
    document.querySelectorAll(".admin-section").forEach(s => s.classList.remove("active"));
    document.querySelectorAll(".admin-nav-item").forEach(i => i.classList.remove("active"));

    const target = document.getElementById(section + "Section");
    if (target) target.classList.add("active");

    const navItem = document.querySelector(`.admin-nav-item[data-section="${section}"]`);
    if (navItem) navItem.classList.add("active");

    if (section === "managers") renderManagers();
    if (section === "special-offers") renderSpecialOffers();
    if (section === "bonuses") renderBonuses();
    if (section === "directions") renderDirections();
    if (section === "settings") renderSettings();
}

function renderDashboard() {
    const directions = getAccessibleDirections();
    document.getElementById("dashboardManagersCount").textContent = filterByDirection(adminData.managers, directions).length;
    document.getElementById("dashboardOffersCount").textContent = filterByDirection(adminData.specialOffers, directions).length;
    document.getElementById("dashboardBonusesCount").textContent = filterByDirection(adminData.bonuses, directions).length;

    const list = document.getElementById("directionsList");
    list.innerHTML = "";
    directions.forEach(d => {
        const badge = document.createElement("div");
        badge.className = "direction-badge";
        badge.textContent = d.name;
        list.appendChild(badge);
    });

    const note = document.querySelector(".admin-note");
    if (note) {
        note.innerHTML = `
            <h3>Как это работает</h3>
            <p>Изменения сохраняются в файл data.json в репозитории GitHub. После сохранения конструктор подхватит их автоматически в течение 1–2 минут.</p>
            <p style="margin-top: 8px;">Для публикации изменений нужен GitHub-токен с правом записи в репозиторий.</p>
        `;
    }
}

function filterByDirection(items, directions) {
    if (!directions || directions.length === 0) return items;
    const directionIds = directions.map(d => d.id || d);
    return items.filter(item => {
        if (!item.directions || item.directions.length === 0) return true;
        return item.directions.some(d => directionIds.includes(d));
    });
}

function renderManagers() {
    const filter = document.getElementById("managersDirectionFilter").value;
    let managers = adminData.managers || [];
    if (filter !== "all") {
        managers = managers.filter(m => m.directions && m.directions.includes(filter));
    }

    const tbody = document.querySelector("#managersTable tbody");
    tbody.innerHTML = "";

    if (managers.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="empty-state">Нет менеджеров</td></tr>';
        return;
    }

    managers.forEach(manager => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${escapeHtml(manager.name)}</td>
            <td>${escapeHtml(manager.email || "")}</td>
            <td>${escapeHtml(manager.phone || "")}</td>
            <td>${escapeHtml(manager.telegram || "")}</td>
            <td>${escapeHtml(manager.max || "")}</td>
            <td>${(manager.directions || []).map(d => directionName(d)).join(", ")}</td>
            <td>
                <div class="action-btns">
                    <button class="action-btn" data-action="edit-manager" data-id="${manager.id}">Изменить</button>
                    <button class="action-btn delete" data-action="delete-manager" data-id="${manager.id}">Удалить</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });

    tbody.querySelectorAll("[data-action]").forEach(btn => {
        btn.addEventListener("click", handleManagerAction);
    });
}

function handleManagerAction(e) {
    const action = e.target.dataset.action;
    const id = parseInt(e.target.dataset.id);
    if (action === "edit-manager") {
        openManagerModal(id);
    } else if (action === "delete-manager") {
        if (confirm("Удалить менеджера?")) {
            adminData.managers = adminData.managers.filter(m => m.id !== id);
            saveData();
        }
    }
}

function renderSpecialOffers() {
    const filter = document.getElementById("offersDirectionFilter").value;
    let offers = adminData.specialOffers || [];
    if (filter !== "all") {
        offers = offers.filter(o => o.directions && o.directions.includes(filter));
    }

    const container = document.getElementById("offersList");
    container.innerHTML = "";

    if (offers.length === 0) {
        container.innerHTML = '<div class="empty-state">Нет спецпредложений</div>';
        return;
    }

    offers.forEach(offer => {
        const card = document.createElement("div");
        card.className = "editor-card";
        card.innerHTML = `
            <div class="editor-card-header">
                <div>
                    <div class="editor-card-title">${escapeHtml(offer.title)}</div>
                    <div class="editor-card-subtitle">${(offer.directions || []).map(d => directionName(d)).join(", ")}</div>
                </div>
            </div>
            <div class="editor-card-body">
                <p>${escapeHtml(offer.description)}</p>
                ${(offer.bonuses || []).map(b => `
                    <div style="margin-top: 12px; padding: 12px; background: var(--accent-bg); border-radius: 8px;">
                        <strong>${escapeHtml(b.title)}</strong>
                        ${b.intro ? `<p style="margin-top: 4px;">${escapeHtml(b.intro)}</p>` : ""}
                        <ul>${(b.items || []).map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
                    </div>
                `).join("")}
            </div>
            <div class="editor-card-actions">
                <button class="action-btn" data-action="edit-offer" data-id="${offer.id}">Изменить</button>
                <button class="action-btn delete" data-action="delete-offer" data-id="${offer.id}">Удалить</button>
            </div>
        `;
        container.appendChild(card);
    });

    container.querySelectorAll("[data-action]").forEach(btn => {
        btn.addEventListener("click", handleOfferAction);
    });
}

function handleOfferAction(e) {
    const action = e.target.dataset.action;
    const id = e.target.dataset.id;
    if (action === "edit-offer") {
        openOfferModal(id);
    } else if (action === "delete-offer") {
        if (confirm("Удалить спецпредложение?")) {
            adminData.specialOffers = adminData.specialOffers.filter(o => o.id !== id);
            saveData();
        }
    }
}

function renderBonuses() {
    const filter = document.getElementById("bonusesDirectionFilter").value;
    let bonuses = adminData.bonuses || [];
    if (filter !== "all") {
        bonuses = bonuses.filter(b => b.directions && b.directions.includes(filter));
    }

    const container = document.getElementById("bonusesList");
    container.innerHTML = "";

    if (bonuses.length === 0) {
        container.innerHTML = '<div class="empty-state">Нет бонусов</div>';
        return;
    }

    bonuses.forEach(bonus => {
        const card = document.createElement("div");
        card.className = "editor-card";
        card.innerHTML = `
            <div class="editor-card-header">
                <div>
                    <div class="editor-card-title">${bonus.icon} ${escapeHtml(bonus.title)}</div>
                    <div class="editor-card-subtitle">${(bonus.directions || []).map(d => directionName(d)).join(", ")}</div>
                </div>
            </div>
            <div class="editor-card-body">${escapeHtml(bonus.description)}</div>
            <div class="editor-card-actions">
                <button class="action-btn" data-action="edit-bonus" data-id="${bonus.id}">Изменить</button>
                <button class="action-btn delete" data-action="delete-bonus" data-id="${bonus.id}">Удалить</button>
            </div>
        `;
        container.appendChild(card);
    });

    container.querySelectorAll("[data-action]").forEach(btn => {
        btn.addEventListener("click", handleBonusAction);
    });
}

function handleBonusAction(e) {
    const action = e.target.dataset.action;
    const id = e.target.dataset.id;
    if (action === "edit-bonus") {
        openBonusModal(id);
    } else if (action === "delete-bonus") {
        if (confirm("Удалить бонус?")) {
            adminData.bonuses = adminData.bonuses.filter(b => b.id !== id);
            saveData();
        }
    }
}

function renderDirections() {
    const container = document.getElementById("directionsEditorList");
    container.innerHTML = "";
    DIRECTIONS.forEach(d => {
        const card = document.createElement("div");
        card.className = "editor-card";
        card.innerHTML = `
            <div class="editor-card-header">
                <div>
                    <div class="editor-card-title">${d.name}</div>
                    <div class="editor-card-subtitle">${d.label}</div>
                </div>
            </div>
            <div class="editor-card-body">ID: ${d.id}</div>
        `;
        container.appendChild(card);
    });
}

function renderSettings() {
    const input = document.getElementById("githubTokenInput");
    input.value = githubToken ? "••••••••••••••••••••••••••" : "";
}

function saveToken() {
    const input = document.getElementById("githubTokenInput");
    const token = input.value.trim();
    if (!token || token === "••••••••••••••••••••••••••") {
        alert("Введите токен");
        return;
    }
    githubToken = token;
    localStorage.setItem("proposalBuilder_githubToken", token);
    input.value = "••••••••••••••••••••••••••";
    document.getElementById("tokenStatus").textContent = "Токен сохранён";
    document.getElementById("tokenStatus").style.color = "var(--success)";
}

async function testToken() {
    const statusEl = document.getElementById("tokenStatus");
    if (!githubToken) {
        statusEl.textContent = "Сначала сохраните токен";
        statusEl.style.color = "var(--danger)";
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}`, {
            headers: {
                "Authorization": `token ${githubToken}`,
                "Accept": "application/vnd.github.v3+json"
            }
        });
        if (response.ok) {
            statusEl.textContent = "Токен работает";
            statusEl.style.color = "var(--success)";
        } else {
            const error = await response.json();
            statusEl.textContent = "Ошибка: " + (error.message || "Токен не работает");
            statusEl.style.color = "var(--danger)";
        }
    } catch (e) {
        statusEl.textContent = "Ошибка: " + e.message;
        statusEl.style.color = "var(--danger)";
    }
}

function openModal(title, bodyHtml, onSave) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalBody").innerHTML = bodyHtml;
    document.getElementById("modalOverlay").style.display = "flex";
    document.getElementById("modalSave").onclick = () => {
        onSave();
    };
}

function closeModal() {
    document.getElementById("modalOverlay").style.display = "none";
}

function saveModal() {}

function directionCheckboxesHtml(selectedDirections, name) {
    const directions = getAccessibleDirections();
    return `<div class="form-group">
        <label>Направления</label>
        <div class="checkbox-list">
            ${directions.map(d => `
                <label class="checkbox-item">
                    <input type="checkbox" name="${name}" value="${d.id}" ${selectedDirections && selectedDirections.includes(d.id) ? "checked" : ""}>
                    <div class="item-name">${d.name}</div>
                </label>
            `).join("")}
        </div>
    </div>`;
}

function getCheckedDirections(name) {
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(cb => cb.value);
}

function openManagerModal(id) {
    const manager = id ? adminData.managers.find(m => m.id === id) : null;
    const body = `
        <div class="form-row">
            <div class="form-group">
                <label>ФИО</label>
                <input type="text" id="managerName" value="${manager ? escapeHtml(manager.name) : ""}">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" id="managerEmail" value="${manager ? escapeHtml(manager.email || "") : ""}">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Телефон</label>
                <input type="text" id="managerPhone" value="${manager ? escapeHtml(manager.phone || "") : ""}">
            </div>
            <div class="form-group">
                <label>Telegram</label>
                <input type="text" id="managerTelegram" value="${manager ? escapeHtml(manager.telegram || "") : ""}">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>MAX</label>
                <input type="text" id="managerMax" value="${manager ? escapeHtml(manager.max || "") : ""}">
            </div>
            <div class="form-group">
                <label>Ссылка на фото</label>
                <input type="text" id="managerPhoto" value="${manager ? escapeHtml(manager.photo || "") : ""}">
                <small>Оставьте пустым, если фото нет</small>
            </div>
        </div>
        ${directionCheckboxesHtml(manager ? manager.directions : ["kor2"], "managerDirections")}
    `;

    openModal(manager ? "Изменить менеджера" : "Добавить менеджера", body, () => {
        const newManager = {
            id: manager ? manager.id : Date.now(),
            name: document.getElementById("managerName").value.trim(),
            email: document.getElementById("managerEmail").value.trim(),
            phone: document.getElementById("managerPhone").value.trim(),
            telegram: document.getElementById("managerTelegram").value.trim(),
            max: document.getElementById("managerMax").value.trim(),
            photo: document.getElementById("managerPhoto").value.trim(),
            directions: getCheckedDirections("managerDirections")
        };

        if (!newManager.name) {
            alert("Укажите ФИО");
            return;
        }

        if (manager) {
            const idx = adminData.managers.findIndex(m => m.id === manager.id);
            if (idx >= 0) adminData.managers[idx] = newManager;
        } else {
            adminData.managers.push(newManager);
        }

        saveData();
        closeModal();
    });
}

function openOfferModal(id) {
    const offer = id ? adminData.specialOffers.find(o => o.id === id) : null;
    const bonus = offer && offer.bonuses ? offer.bonuses[0] : null;

    const body = `
        <div class="form-group">
            <label>Название спецпредложения</label>
            <input type="text" id="offerTitle" value="${offer ? escapeHtml(offer.title) : ""}">
        </div>
        <div class="form-group">
            <label>Описание</label>
            <textarea id="offerDescription">${offer ? escapeHtml(offer.description) : ""}</textarea>
        </div>
        ${directionCheckboxesHtml(offer ? offer.directions : ["kor2"], "offerDirections")}
        <hr style="margin: 24px 0; border: none; border-top: 1px solid var(--border);">
        <div class="form-group">
            <label>Название бонуса внутри предложения</label>
            <input type="text" id="offerBonusTitle" value="${bonus ? escapeHtml(bonus.title) : ""}">
        </div>
        <div class="form-group">
            <label>Вступление к бонусу</label>
            <textarea id="offerBonusIntro">${bonus ? escapeHtml(bonus.intro || "") : ""}</textarea>
        </div>
        <div class="form-group">
            <label>Пункты бонуса (по одному на строку)</label>
            <textarea id="offerBonusItems" rows="5">${bonus ? (bonus.items || []).map(i => escapeHtml(i)).join("\n") : ""}</textarea>
        </div>
    `;

    openModal(offer ? "Изменить спецпредложение" : "Добавить спецпредложение", body, () => {
        const newOffer = {
            id: offer ? offer.id : "so-" + Date.now(),
            title: document.getElementById("offerTitle").value.trim(),
            description: document.getElementById("offerDescription").value.trim(),
            directions: getCheckedDirections("offerDirections"),
            bonuses: [{
                title: document.getElementById("offerBonusTitle").value.trim(),
                intro: document.getElementById("offerBonusIntro").value.trim(),
                items: document.getElementById("offerBonusItems").value.split("\n").map(i => i.trim()).filter(i => i)
            }]
        };

        if (!newOffer.title) {
            alert("Укажите название");
            return;
        }

        if (offer) {
            const idx = adminData.specialOffers.findIndex(o => o.id === offer.id);
            if (idx >= 0) adminData.specialOffers[idx] = newOffer;
        } else {
            adminData.specialOffers.push(newOffer);
        }

        saveData();
        closeModal();
    });
}

function openBonusModal(id) {
    const bonus = id ? adminData.bonuses.find(b => b.id === id) : null;
    const body = `
        <div class="form-group">
            <label>Иконка</label>
            <input type="text" id="bonusIcon" value="${bonus ? escapeHtml(bonus.icon) : "🎁"}">
        </div>
        <div class="form-group">
            <label>Название</label>
            <input type="text" id="bonusTitle" value="${bonus ? escapeHtml(bonus.title) : ""}">
        </div>
        <div class="form-group">
            <label>Описание</label>
            <textarea id="bonusDescription">${bonus ? escapeHtml(bonus.description) : ""}</textarea>
        </div>
        ${directionCheckboxesHtml(bonus ? bonus.directions : ["kor2"], "bonusDirections")}
    `;

    openModal(bonus ? "Изменить бонус" : "Добавить бонус", body, () => {
        const newBonus = {
            id: bonus ? bonus.id : "b-" + Date.now(),
            icon: document.getElementById("bonusIcon").value.trim() || "🎁",
            title: document.getElementById("bonusTitle").value.trim(),
            description: document.getElementById("bonusDescription").value.trim(),
            directions: getCheckedDirections("bonusDirections")
        };

        if (!newBonus.title) {
            alert("Укажите название");
            return;
        }

        if (bonus) {
            const idx = adminData.bonuses.findIndex(b => b.id === bonus.id);
            if (idx >= 0) adminData.bonuses[idx] = newBonus;
        } else {
            adminData.bonuses.push(newBonus);
        }

        saveData();
        closeModal();
    });
}

function directionName(id) {
    const d = DIRECTIONS.find(dir => dir.id === id);
    return d ? d.name : id;
}

async function saveData() {
    if (!githubToken) {
        alert("Для сохранения изменений нужно ввести GitHub-токен в настройках.");
        showSection("settings");
        return;
    }

    showGlobalLoading(true);

    try {
        await saveToGitHub(adminData);
        renderDashboard();
        if (document.getElementById("managersSection").classList.contains("active")) renderManagers();
        if (document.getElementById("specialOffersSection").classList.contains("active")) renderSpecialOffers();
        if (document.getElementById("bonusesSection").classList.contains("active")) renderBonuses();
        alert("Изменения сохранены. Они появятся в конструкторе через 1–2 минуты.");
    } catch (e) {
        console.error("Failed to save", e);
        alert("Ошибка сохранения: " + e.message);
    } finally {
        showGlobalLoading(false);
    }
}

async function getFileSha() {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${GITHUB_CONFIG.dataPath}?ref=${GITHUB_CONFIG.branch}`, {
        headers: {
            "Authorization": `token ${githubToken}`,
            "Accept": "application/vnd.github.v3+json"
        }
    });
    if (!response.ok) throw new Error("Не удалось получить информацию о файле");
    const data = await response.json();
    return data.sha;
}

async function saveToGitHub(data) {
    const sha = await getFileSha();
    const content = btoa(unescape(encodeURIComponent(JSON.stringify(data, null, 2))));

    const response = await fetch(`https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${GITHUB_CONFIG.dataPath}`, {
        method: "PUT",
        headers: {
            "Authorization": `token ${githubToken}`,
            "Accept": "application/vnd.github.v3+json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: "update data from admin panel",
            content: content,
            sha: sha,
            branch: GITHUB_CONFIG.branch
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Ошибка сохранения в GitHub");
    }
}

function escapeHtml(text) {
    if (!text) return "";
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

init();
