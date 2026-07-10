const adminData = {
    managers: [
        {
            id: 1,
            name: "Иванова Анна",
            email: "aivanova@skorozvon.ru",
            photo: ""
        },
        {
            id: 2,
            name: "Белоусова Ксения",
            email: "kabelousova@skorozvon.ru",
            photo: ""
        },
        {
            id: 3,
            name: "Шелудченко Ксения",
            email: "ksheludchenko@skorozvon.ru",
            photo: ""
        },
        {
            id: 4,
            name: "Борисова Мария",
            email: "mshherbakova@skorozvon.ru",
            photo: ""
        },
        {
            id: 5,
            name: "Захарова Юлия",
            email: "yzakharova@skorozvon.ru",
            photo: ""
        }
    ],

    sharedContacts: {
        phones: ["8 800 333 97 00", "+7 (495) 449-97-02"],
        whatsapp: "+7 922 104 08 45",
        whatsappNote: "Добавьте нас в контакты и напишите сообщение, чтобы мы смогли вам ответить",
        telegram: "@skorozvon_tg",
        telegramLink: "https://t.me/skorozvon_tg",
        manual: {
            url: "https://skorozvon.ru/manual",
            label: "Полная и объемная инструкция по Скорозвону"
        }
    },
    clientProblems: [
        {
            id: "p1",
            text: "Сократить время обработки клиентской базы и повысить количество разговоров менеджеров в день."
        },
        {
            id: "p2",
            text: "Автоматизировать массовый обзвон и снизить долю ручного набора номеров."
        },
        {
            id: "p3",
            text: "Повысить дозваниваемость и контактность базы за счёт предиктивного дайлера."
        },
        {
            id: "p4",
            text: "Контролировать качество разговоров менеджеров и обучать их с помощью AI-тренера."
        }
    ],

    specialOffers: [
        {
            id: "so-module",
            title: "Бонус «50 000 + Модуль»",
            description: "Подойдет для тех, кто хочет получить эффективный запуск обзвона с максимальной экономией на старте.",
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
            title: "Бонус «50 000 + Кешбек»",
            description: "Подойдет для тех, кто хочет получить эффективный запуск обзвона с максимальной экономией на старте.",
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

    tariffs: {
        operatorLicense: {
            basic: {
                name: "Базовый",
                daily: 125,
                "3": 2300,
                "6": 2000,
                "12": 1800
            },
            pro: {
                name: "Профессиональный",
                daily: 150,
                "3": 2900,
                "6": 2600,
                "12": 2400
            }
        },
        modules: {
            standard: {
                name: "Модуль Standart",
                fixedPrice: 6000,
                fixedThreshold: 1999,
                tiers: [
                    { min: 2000, max: 9999, pricePerMin: 2.2 },
                    { min: 10000, max: 39999, pricePerMin: 1.7 },
                    { min: 40000, max: 59999, pricePerMin: 1.6 }
                ]
            },
            pro: {
                name: "Модуль PRO",
                fixedPrice: 7000,
                fixedThreshold: 1999,
                tiers: [
                    { min: 2000, max: 9999, pricePerMin: 2.5 },
                    { min: 10000, max: 39999, pricePerMin: 2.0 },
                    { min: 40000, max: 59999, pricePerMin: 1.8 }
                ]
            }
        },
        atc: {
            with_reg: { name: "С регистрацией", price: 2000 },
            without_reg: { name: "Без регистрации", price: 10000 }
        },
    incomingNumber: {
        setup: 0,
        firstMonth: 1500,
        monthly: 500
    },
        minutes: {
            tiers: [
                { min: 0, max: 1999, pricePerMin: 2.2 },
                { min: 2000, max: 9999, pricePerMin: 1.7 },
                { min: 10000, max: 39999, pricePerMin: 1.4 },
                { min: 40000, max: Infinity, pricePerMin: 1.2 }
            ]
        }
    },

    features: [
        {
            id: "auto_redial",
            name: "Автоперезвон по пропущенным",
            description: "Автоматический перезвон клиентам, которые не дозвонились",
            price: 500,
            period: "monthly"
        },
        {
            id: "whispering",
            name: "Суфлирование",
            description: "Подсказки оператору во время разговора в реальном времени",
            price: 700,
            period: "monthly"
        },
        {
            id: "sip_uri",
            name: "SIP URI",
            description: "Подключение по SIP URI для интеграции с телефонией",
            price: 300,
            period: "monthly"
        },
        {
            id: "script_builder",
            name: "Расширенный конструктор скриптов",
            description: "Сложные скрипты разговора с ветвлениями",
            price: 800,
            period: "monthly"
        },
        {
            id: "carousel_numbers",
            name: "Карусель номеров",
            description: "Использование нескольких номеров для повышения дозваниваемости",
            price: 3000,
            period: "monthly"
        },
        {
            id: "guest_access",
            name: "Гостевой доступ",
            description: "Возможность предоставить доступ внешним пользователям без покупки лицензии",
            price: 800,
            period: "monthly_per_guest"
        },
        {
            id: "stereo_recording",
            name: "Запись звонков в стерео",
            description: "Запись оператора и клиента на разные каналы для удобной обработки",
            price: 3000,
            period: "monthly"
        },
        {
            id: "iframe",
            name: "IFrame-интеграция",
            description: "Встраивание сторонних сервисов прямо в интерфейс Скорозвона",
            price: 5000,
            period: "monthly"
        },
        {
            id: "multiple_integrations",
            name: "Множественная интеграция",
            description: "Подключение CRM и других сервисов в одном проекте",
            price: 5000,
            period: "monthly"
        },
        {
            id: "free_amobitrix",
            name: "Бесплатные интеграции с amoCRM и Битрикс24",
            description: "Готовые интеграции с популярными CRM без дополнительной платы",
            price: 0,
            period: "monthly"
        },
        {
            id: "dedicated_server",
            name: "Выделенный сервер",
            description: "Индивидуальный сервер для повышенной стабильности и безопасности",
            price: null,
            period: "quote"
        }
    ],

    discoveryProducts: [
        {
            id: "speech_analytics",
            name: "Речевая аналитика",
            description: "Превращайте звонки в рабочие бизнес-инсайты. Получайте персональные ИИ-рекомендации, оценивайте эффективность телефонных разговоров и улучшайте метрики на основе данных.",
            requiresSkorozvon: true,
            pricingOptions: [
                { id: "sa_base", name: "Базовый", price: 18000, description: "До 1 000 минут аналитики" },
                { id: "sa_pro", name: "PRO", price: 35000, description: "До 5 000 минут аналитики" }
            ]
        },
        {
            id: "ai_trainer",
            name: "AI-тренер для продаж",
            description: "Выводите менеджеров на плановые KPI за 2 недели, а не за 3 месяца. Интерактивный онлайн-тренажер имитирует диалог с реальным клиентом.",
            requiresSkorozvon: false,
            pricingOptions: [
                { id: "at_5", name: "5 тренировок", price: 23000, description: "5 тренировок в месяц" },
                { id: "at_10", name: "10 тренировок", price: 35000, description: "10 тренировок в месяц" }
            ]
        },
        {
            id: "scoring",
            name: "Скоринг баз контактов",
            description: "Оптимизируйте затраты на обзвон на 20%. Сервис проанализирует все номера в базе и даст рекомендации.",
            requiresSkorozvon: true,
            pricingOptions: [
                { id: "sc_1000", name: "1 000 контактов", price: 300, description: "1 000 контактов" },
                { id: "sc_5000", name: "5 000 контактов", price: 1200, description: "5 000 контактов" }
            ]
        },
        {
            id: "dialog_robot",
            name: "Диалоговый робот",
            description: "Автоматизируйте исходящие звонки с помощью голосового робота. Доступны сценарный, гибридный и ИИ-робот.",
            requiresSkorozvon: false,
            pricingOptions: [
                { id: "dr_script", name: "Сценарный", price: 15000, description: "Базовый сценарный робот" },
                { id: "dr_hybrid", name: "Гибридный", price: 25000, description: "Гибридный робот" },
                { id: "dr_ai", name: "ИИ-робот", price: 40000, description: "Робот на базе ИИ" }
            ]
        }
    ],

    bonuses: [
        {
            id: "b1",
            icon: "🎁",
            title: "Подключение транка бесплатно",
            description: "При пополнении счёта от 50 000 ₽. Экономия 10 000 ₽!"
        },
        {
            id: "b2",
            icon: "🤖",
            title: "Бесплатный AI-пакет",
            description: "5 тренировок AI-тренера, 1 000 мин аналитики, скоринг 1 000 контактов."
        },
        {
            id: "b3",
            icon: "📞",
            title: "20 номеров без абонентской платы",
            description: "На первый месяц использования."
        }
    ],

    clientLogos: [
        "Яндекс Такси", "ПИК", "auto.ru", "ТОЧКА", "DELTA",
        "Модульбанк", "БайкалИнвестБанк", "Деньги Сразу", "Телесейлз", "NEW RETAIL FORUM",
        "BIO", "ЭЛТА", "Айва", "Auchan RETAIL", "Zetta",
        "One click money", "ЛИДГЕН БЮРО"
    ]
};

const state = {
    proposalType: "skorozvon",
    managerId: "",
    discoveryManagerId: "",
    clientName: "",
    clientOrgForm: "ООО",
    date: new Date().toISOString().split("T")[0],
    validUntil: "",
    tariff: "pro",
    period: "3",
    operatorsCount: 3,
    minutesCount: 1000,
    moduleType: "standard",
    incomingNumbers: 0,
    incomingAtcType: "none",
    atcType: "none",
    atcCount: 1,
    selectedFeatures: [],
    featureQuantities: {},
    selectedDiscovery: {},
    showDiscoveryTariffs: true,
    showCalculation: false,
    showClassicRobot: false,
    showAiRobot: false,
    showAiRobotCalculation: false,
    selectedSpecialOffer: "",
    selectedBonuses: [],
    clientProblemId: "",
    customProblem: "",
};

function formatPrice(value) {
    return Math.round(value).toLocaleString("ru-RU") + " ₽";
}

function formatDayPrice(value) {
    return Math.round(value).toLocaleString("ru-RU") + " ₽ в день";
}

function getManager(id) {
    return adminData.managers.find(m => String(m.id) === String(id));
}

function getProblem(id) {
    return adminData.clientProblems.find(p => p.id === id);
}

function getSpecialOffer(id) {
    return adminData.specialOffers.find(o => o.id === id);
}

function getMinutesPrice(minutes) {
    const tier = adminData.tariffs.minutes.tiers.find(t => minutes >= t.min && minutes <= t.max);
    return tier ? tier.pricePerMin : adminData.tariffs.minutes.tiers[adminData.tariffs.minutes.tiers.length - 1].pricePerMin;
}

function getModulePrice(moduleType, minutes) {
    if (moduleType === "none") return 0;
    const module = adminData.tariffs.modules[moduleType];
    if (minutes <= module.fixedThreshold) {
        return module.fixedPrice;
    }
    const tier = module.tiers.find(t => minutes >= t.min && minutes <= t.max);
    return minutes * (tier ? tier.pricePerMin : module.tiers[module.tiers.length - 1].pricePerMin);
}

function getLicensePricePerPeriod(tariff, period) {
    return adminData.tariffs.operatorLicense[tariff][period] || 0;
}

function formatLicensePrice(value, period) {
    if (period === "daily") {
        return formatDayPrice(value);
    }
    return formatPrice(value) + "/мес";
}

function calculate() {
    const operators = parseInt(state.operatorsCount) || 0;
    const minutes = parseInt(state.minutesCount) || 0;
    const incomingNumbers = parseInt(state.incomingNumbers) || 0;
    const atcCount = parseInt(state.atcCount) || 0;

    const isDaily = state.period === "daily";
    const periodMonths = isDaily ? 1 : parseInt(state.period);

    const licensePricePerPeriod = getLicensePricePerPeriod(state.tariff, state.period);
    const licenseMonthly = operators * licensePricePerPeriod;
    const licensePeriod = licenseMonthly * periodMonths;

    const minutesPricePerMin = getMinutesPrice(minutes);
    const minutesMonthly = minutes * minutesPricePerMin;
    const moduleMonthly = getModulePrice(state.moduleType, minutes);
    const incomingSetup = incomingNumbers > 0 ? adminData.tariffs.incomingNumber.setup : 0;
    const incomingMonthly = incomingNumbers > 0 ? incomingNumbers * adminData.tariffs.incomingNumber.monthly : 0;

    const incomingAtcSetup = state.incomingAtcType === "incoming_atc" ? adminData.tariffs.incomingNumber.setup : 0;
    const incomingAtcFirstMonth = state.incomingAtcType === "incoming_atc" ? adminData.tariffs.incomingNumber.firstMonth : 0;
    const incomingAtcMonthly = state.incomingAtcType === "incoming_atc" ? adminData.tariffs.incomingNumber.monthly : 0;
    const incomingAtcPeriodMonthly = Math.max(0, periodMonths - 1) * incomingAtcMonthly;

    let atcTotal = 0;
    if (state.atcType !== "none") {
        const atcPrice = adminData.tariffs.atc[state.atcType].price;
        atcTotal = atcPrice * atcCount;
    }

    let featuresMonthly = 0;
    state.selectedFeatures.forEach(featureId => {
        const feature = adminData.features.find(f => f.id === featureId);
        if (feature) {
            if (feature.price === null) {
                const customPrice = parseInt(state.featureQuantities[feature.id]) || 0;
                featuresMonthly += customPrice;
            } else if (feature.period === "monthly_per_guest") {
                const qty = parseInt(state.featureQuantities[feature.id]) || 1;
                featuresMonthly += feature.price * qty;
            } else {
                featuresMonthly += feature.price;
            }
        }
    });

    let discoveryMonthly = 0;
    let discoveryOneTime = 0;
    Object.entries(state.selectedDiscovery).forEach(([productId, optionId]) => {
        if (!optionId) return;
        const product = adminData.discoveryProducts.find(p => p.id === productId);
        if (product) {
            const option = product.pricingOptions.find(o => o.id === optionId);
            if (option) {
                if (product.period === "per_contact") {
                    discoveryOneTime += option.price;
                } else {
                    discoveryMonthly += option.price;
                }
            }
        }
    });

    const monthlyTotal = licenseMonthly + minutesMonthly + moduleMonthly + incomingMonthly + incomingAtcMonthly + featuresMonthly + discoveryMonthly;
    const periodTotal = licensePeriod + (minutesMonthly + moduleMonthly + incomingMonthly + featuresMonthly + discoveryMonthly) * periodMonths + incomingSetup + incomingAtcSetup + incomingAtcFirstMonth + incomingAtcPeriodMonthly + atcTotal + discoveryOneTime;

    return {
        licensePricePerPeriod,
        licenseMonthly,
        licensePeriod,
        minutesMonthly,
        moduleMonthly,
        incomingSetup,
        incomingMonthly,
        incomingAtcSetup,
        incomingAtcFirstMonth,
        incomingAtcMonthly,
        incomingAtcPeriodMonthly,
        atcTotal,
        featuresMonthly,
        discoveryMonthly,
        discoveryOneTime,
        monthlyTotal,
        periodTotal,
        minutesPricePerMin,
        periodMonths,
        isDaily
    };
}

function init() {
    populateManagers();
    populateDiscoveryManagers();
    populateClientProblems();
    populateSpecialOffers();
    populateFeatures();
    populateDiscovery();
    populateBonuses();
    populateClientLogos();
    bindEvents();
    updateUI();
}

function populateManagers() {
    const select = document.getElementById("managerSelect");
    adminData.managers.forEach(manager => {
        const option = document.createElement("option");
        option.value = manager.id;
        option.textContent = manager.name;
        select.appendChild(option);
    });
}

function populateDiscoveryManagers() {
    const select = document.getElementById("discoveryManagerSelect");
    if (!select) return;
    adminData.managers.forEach(manager => {
        const option = document.createElement("option");
        option.value = manager.id;
        option.textContent = manager.name;
        select.appendChild(option);
    });
}

function populateClientProblems() {
    const select = document.getElementById("clientProblemSelect");
    adminData.clientProblems.forEach(problem => {
        const option = document.createElement("option");
        option.value = problem.id;
        option.textContent = problem.text.length > 70 ? problem.text.substring(0, 70) + "..." : problem.text;
        select.appendChild(option);
    });
}

function populateSpecialOffers() {
    const select = document.getElementById("specialOfferSelect");
    adminData.specialOffers.forEach(offer => {
        const option = document.createElement("option");
        option.value = offer.id;
        option.textContent = offer.title;
        select.appendChild(option);
    });
}

function populateFeatures() {
    const container = document.getElementById("featuresList");
    adminData.features.forEach(feature => {
        const wrapper = document.createElement("div");
        wrapper.className = "feature-form-item";
        wrapper.dataset.featureId = feature.id;

        let priceLabel = "";
        if (feature.price === null) {
            priceLabel = "по запросу";
        } else if (feature.period === "monthly_per_guest") {
            priceLabel = `${formatPrice(feature.price)}₽/мес за гостя`;
        } else {
            priceLabel = `${formatPrice(feature.price)}/мес`;
        }

        let quantityInput = "";
        if (feature.period === "monthly_per_guest") {
            quantityInput = `
                <div class="feature-quantity" style="display: none; margin-top: 8px; padding-left: 28px;"
                    <label>
                        <span>Количество гостевых доступов</span>
                        <input type="number" min="1" value="1" data-feature-quantity="${feature.id}">
                    </label>
                </div>
            `;
        }

        if (feature.price === null) {
            quantityInput = `
                <div class="feature-quantity" style="display: none; margin-top: 8px; padding-left: 28px;"
                    <label>
                        <span>Стоимость, ₽</span>
                        <input type="number" min="0" step="1000" value="" placeholder="Укажите стоимость" data-feature-custom-price="${feature.id}">
                    </label>
                </div>
            `;
        }

        wrapper.innerHTML = `
            <label class="checkbox-item">
                <input type="checkbox" value="${feature.id}" data-type="feature">
                <div class="item-info">
                    <div class="item-name">${feature.name}</div>
                </div>
                <div class="item-price">${priceLabel}</div>
            </label>
            ${quantityInput}
        `;
        container.appendChild(wrapper);
    });
}

function populateDiscovery() {
    const container = document.getElementById("discoveryList");
    adminData.discoveryProducts.forEach(product => {
        const wrapper = document.createElement("div");
        wrapper.className = "discovery-form-item";
        wrapper.innerHTML = `
            <label class="checkbox-item">
                <input type="checkbox" value="${product.id}" data-type="discovery-product">
                <div class="item-info">
                    <div class="item-name">${product.name}</div>
                    <div class="item-desc">${product.description}</div>
                    ${product.requiresSkorozvon ? '<div class="item-desc" style="color: #E84A3C; margin-top: 4px;">Требуется Скорозвон</div>' : ''}
                </div>
            </label>
            <div class="discovery-options" id="options-${product.id}" style="display: none;">
                <select data-discovery="${product.id}">
                    ${product.pricingOptions.map(o => `<option value="${o.id}">${o.name} — ${formatPrice(o.price)} (${o.description})</option>`).join("")}
                </select>
            </div>
        `;
        container.appendChild(wrapper);
    });
}

function populateBonuses() {
    const container = document.getElementById("bonusesList");
    adminData.bonuses.forEach(bonus => {
        const label = document.createElement("label");
        label.className = "checkbox-item";
        label.innerHTML = `
            <input type="checkbox" value="${bonus.id}" data-type="bonus">
            <div class="item-info">
                <div class="item-name">${bonus.icon} ${bonus.title}</div>
                <div class="item-desc">${bonus.description}</div>
            </div>
        `;
        container.appendChild(label);
    });
}

function populateClientLogos() {
    // Removed - block "Нам доверяют" no longer exists
}

function bindEvents() {
    document.getElementById("managerSelect").addEventListener("change", e => {
        state.managerId = e.target.value;
        updateManagerBlock();
    });

    document.getElementById("clientOrgForm").addEventListener("input", e => {
        state.clientOrgForm = e.target.value;
        const discoveryClientOrgForm = document.getElementById("discoveryClientOrgForm");
        if (discoveryClientOrgForm) discoveryClientOrgForm.value = state.clientOrgForm;
        document.getElementById("previewOrgForm").textContent = state.clientOrgForm;
        fitHeaderTitle();
    });

    document.getElementById("clientName").addEventListener("input", e => {
        state.clientName = e.target.value;
        const discoveryClientName = document.getElementById("discoveryClientName");
        if (discoveryClientName) discoveryClientName.value = state.clientName;
        document.getElementById("previewClientName").textContent = state.clientName || "__________";
        fitHeaderTitle();
    });

    document.getElementById("proposalDate").addEventListener("change", e => {
        state.date = e.target.value;
        state.validUntil = addDays(state.date, 14);
        document.getElementById("validUntilDate").value = state.validUntil;
        const discoveryProposalDate = document.getElementById("discoveryProposalDate");
        if (discoveryProposalDate) discoveryProposalDate.value = state.date;
        const discoveryValidUntilDate = document.getElementById("discoveryValidUntilDate");
        if (discoveryValidUntilDate) discoveryValidUntilDate.value = state.validUntil;
        updateDate();
    });

    document.getElementById("validUntilDate").addEventListener("change", e => {
        state.validUntil = e.target.value;
        const discoveryValidUntilDate = document.getElementById("discoveryValidUntilDate");
        if (discoveryValidUntilDate) discoveryValidUntilDate.value = state.validUntil;
        updateDate();
    });

    document.getElementById("tariffSelect").addEventListener("change", e => {
        state.tariff = e.target.value;
        updateCalculations();
    });

    document.getElementById("periodSelect").addEventListener("change", e => {
        state.period = e.target.value;
        updateCalculations();
    });

    document.getElementById("operatorsCount").addEventListener("input", e => {
        state.operatorsCount = e.target.value;
        updateCalculations();
    });

    document.getElementById("minutesCount").addEventListener("input", e => {
        state.minutesCount = e.target.value;
        updateCalculations();
    });

    document.getElementById("moduleSelect").addEventListener("change", e => {
        state.moduleType = e.target.value;
        updateCalculations();
    });

    document.getElementById("incomingNumbers").addEventListener("input", e => {
        state.incomingNumbers = e.target.value;
        updateCalculations();
    });

    document.getElementById("incomingAtcSelect").addEventListener("change", e => {
        state.incomingAtcType = e.target.value;
        updateCalculations();
    });

    document.getElementById("atcSelect").addEventListener("change", e => {
        state.atcType = e.target.value;
        updateCalculations();
    });

    document.getElementById("atcCount").addEventListener("input", e => {
        state.atcCount = e.target.value;
        updateCalculations();
    });

    document.getElementById("specialOfferSelect").addEventListener("change", e => {
        state.selectedSpecialOffer = e.target.value;
        updateSpecialOffer();
    });

    document.getElementById("clientProblemSelect").addEventListener("change", e => {
        state.clientProblemId = e.target.value;
        const customWrapper = document.getElementById("customProblemWrapper");
        if (e.target.value === "custom") {
            customWrapper.style.display = "block";
        } else {
            customWrapper.style.display = "none";
        }
        updateProblem();
    });

    document.getElementById("customProblemText").addEventListener("input", e => {
        state.customProblem = e.target.value;
        updateProblem();
    });

    document.querySelectorAll(".type-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            state.proposalType = btn.dataset.type;
            updateProposalType();
        });
    });

    document.getElementById("featuresList").addEventListener("change", e => {
        if (e.target.dataset.type === "feature") {
            const value = e.target.value;
            const wrapper = e.target.closest(".feature-form-item");
            const quantityDiv = wrapper ? wrapper.querySelector(".feature-quantity") : null;

            if (e.target.checked) {
                state.selectedFeatures.push(value);
                if (quantityDiv) quantityDiv.style.display = "block";
            } else {
                state.selectedFeatures = state.selectedFeatures.filter(id => id !== value);
                if (quantityDiv) quantityDiv.style.display = "none";
            }
            updateCalculations();
        }
    });

    document.getElementById("featuresList").addEventListener("input", e => {
        if (e.target.dataset.featureQuantity) {
            state.featureQuantities[e.target.dataset.featureQuantity] = e.target.value;
            updateCalculations();
        }
        if (e.target.dataset.featureCustomPrice) {
            state.featureQuantities[e.target.dataset.featureCustomPrice] = e.target.value;
            updateCalculations();
        }
    });

    document.getElementById("discoveryList").addEventListener("change", e => {
        if (e.target.dataset.type === "discovery-product") {
            const productId = e.target.value;
            const optionsDiv = document.getElementById(`options-${productId}`);
            if (e.target.checked) {
                optionsDiv.style.display = "block";
                const select = optionsDiv.querySelector("select");
                state.selectedDiscovery[productId] = select.value;
            } else {
                optionsDiv.style.display = "none";
                delete state.selectedDiscovery[productId];
            }
            updateCalculations();
        }
    });

    document.getElementById("discoveryList").addEventListener("change", e => {
        if (e.target.dataset.discovery) {
            state.selectedDiscovery[e.target.dataset.discovery] = e.target.value;
            updateCalculations();
        }
    });

    document.getElementById("bonusesList").addEventListener("change", e => {
        if (e.target.dataset.type === "bonus") {
            const value = e.target.value;
            if (e.target.checked) {
                state.selectedBonuses.push(value);
            } else {
                state.selectedBonuses = state.selectedBonuses.filter(id => id !== value);
            }
            updateBonuses();
        }
    });

    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.disabled) return;

            document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const tabId = btn.dataset.tab;
            const content = document.querySelector(`.tab-content[data-tab="${tabId}"]`);
            if (content) content.classList.add('active');

            syncDiscoveryClientFields();
            updatePreviewForTab();
        });
    });

    const discoveryManagerSelect = document.getElementById("discoveryManagerSelect");
    if (discoveryManagerSelect) {
        discoveryManagerSelect.addEventListener("change", e => {
            state.discoveryManagerId = e.target.value;
            updateManagerBlock();
        });
    }

    const discoveryClientOrgForm = document.getElementById("discoveryClientOrgForm");
    if (discoveryClientOrgForm) {
        discoveryClientOrgForm.addEventListener("input", e => {
            state.clientOrgForm = e.target.value;
            document.getElementById("clientOrgForm").value = state.clientOrgForm;
            document.getElementById("previewOrgForm").textContent = state.clientOrgForm;
            fitHeaderTitle();
        });
    }

    const discoveryClientName = document.getElementById("discoveryClientName");
    if (discoveryClientName) {
        discoveryClientName.addEventListener("input", e => {
            state.clientName = e.target.value;
            document.getElementById("clientName").value = state.clientName;
            document.getElementById("previewClientName").textContent = state.clientName || "__________";
            fitHeaderTitle();
        });
    }

    const discoveryProposalDate = document.getElementById("discoveryProposalDate");
    if (discoveryProposalDate) {
        discoveryProposalDate.addEventListener("change", e => {
            state.date = e.target.value;
            document.getElementById("proposalDate").value = state.date;
            state.validUntil = addDays(state.date, 14);
            document.getElementById("validUntilDate").value = state.validUntil;
            document.getElementById("discoveryValidUntilDate").value = state.validUntil;
            updateDate();
        });
    }

    const discoveryValidUntilDate = document.getElementById("discoveryValidUntilDate");
    if (discoveryValidUntilDate) {
        discoveryValidUntilDate.addEventListener("change", e => {
            state.validUntil = e.target.value;
            document.getElementById("validUntilDate").value = state.validUntil;
            updateDate();
        });
    }

    const discoveryTariffsToggle = document.getElementById("discoveryTariffsToggle");
    if (discoveryTariffsToggle) {
        discoveryTariffsToggle.addEventListener("change", e => {
            state.showDiscoveryTariffs = e.target.checked;
            updatePreviewForTab();
        });
    }

    const calculationToggle = document.getElementById("calculationToggle");
    if (calculationToggle) {
        calculationToggle.addEventListener("change", e => {
            state.showCalculation = e.target.checked;
            updatePreviewForTab();
        });
    }

    const classicRobotToggle = document.getElementById("classicRobotToggle");
    if (classicRobotToggle) {
        classicRobotToggle.addEventListener("change", e => {
            state.showClassicRobot = e.target.checked;
            updatePreviewForTab();
        });
    }

    const aiRobotToggle = document.getElementById("aiRobotToggle");
    if (aiRobotToggle) {
        aiRobotToggle.addEventListener("change", e => {
            state.showAiRobot = e.target.checked;
            updatePreviewForTab();
        });
    }

    const aiRobotCalculationToggle = document.getElementById("aiRobotCalculationToggle");
    if (aiRobotCalculationToggle) {
        aiRobotCalculationToggle.addEventListener("change", e => {
            state.showAiRobotCalculation = e.target.checked;
            updatePreviewForTab();
        });
    }

    document.getElementById("printProposal").addEventListener("click", printProposal);
    document.getElementById("downloadPdf").addEventListener("click", printProposal);

    const downloadJpeg = document.getElementById("downloadJpeg");
    if (downloadJpeg) {
        downloadJpeg.addEventListener("click", saveAsJpeg);
    }

    state.customProblem = state.customProblem || "";
    state.validUntil = state.validUntil || addDays(state.date, 14);

    document.getElementById("proposalDate").value = state.date;
    document.getElementById("validUntilDate").value = state.validUntil;
    document.getElementById("discoveryProposalDate").value = state.date;
    document.getElementById("discoveryValidUntilDate").value = state.validUntil;
}

function updateProposalType() {
    const skorozvonSection = document.getElementById("skorozvonSection");
    const discoverySection = document.getElementById("discoverySection");
    const discoveryPreviewSection = document.getElementById("discoveryPreviewSection");
    const calcSection = document.querySelector(".proposal-calc");
    const aboutSection = document.querySelector(".proposal-about");
    const advantagesSection = document.querySelector(".proposal-advantages");
    const benefitsSection = document.querySelector(".proposal-benefits");

    const bonusesSection = document.getElementById("bonusesSection");
    const twoColumns = document.querySelector(".two-columns");

    if (state.proposalType === "skorozvon") {
        skorozvonSection.style.display = "block";
        calcSection.style.display = "block";
        bonusesSection.style.display = "block";
        aboutSection.style.display = "block";
        twoColumns.style.display = "grid";
        discoverySection.style.display = "none";
        discoveryPreviewSection.style.display = "none";
    } else if (state.proposalType === "discovery") {
        skorozvonSection.style.display = "none";
        calcSection.style.display = "none";
        bonusesSection.style.display = "none";
        aboutSection.style.display = "none";
        twoColumns.style.display = "none";
        discoverySection.style.display = "block";
        discoveryPreviewSection.style.display = "block";
    } else {
        skorozvonSection.style.display = "block";
        calcSection.style.display = "block";
        bonusesSection.style.display = "block";
        aboutSection.style.display = "block";
        twoColumns.style.display = "grid";
        discoverySection.style.display = "block";
        discoveryPreviewSection.style.display = "block";
    }

    updateCalculations();
}

function addDays(dateStr, days) {
    const date = new Date(dateStr);
    date.setDate(date.getDate() + days);
    return date.toISOString().split("T")[0];
}

function daysBetween(startStr, endStr) {
    const start = new Date(startStr);
    const end = new Date(endStr);
    const diffTime = end - start;
    return Math.round(diffTime / (1000 * 60 * 60 * 24));
}

function updateDate() {
    const date = new Date(state.date);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const dateStr = date.toLocaleDateString("ru-RU", options);

    const createdEl = document.getElementById("previewCreatedDate");
    if (createdEl) createdEl.textContent = dateStr;

    const validitySection = document.getElementById("validitySection");
    const validityText = document.getElementById("previewValidityText");

    if (state.validUntil && state.validUntil >= state.date) {
        const validUntilDate = new Date(state.validUntil);
        const validUntilStr = validUntilDate.toLocaleDateString("ru-RU", options);
        const days = daysBetween(state.date, state.validUntil);
        const daysWord = declineWord(days, "день", "дня", "дней");
        validitySection.style.display = "block";
        validityText.textContent = `Предложение действительно ${days} ${daysWord} — до ${validUntilStr}.`;
    } else {
        validitySection.style.display = "none";
    }
}

function updateProblem() {
    const section = document.getElementById("problemSection");
    const textEl = document.getElementById("previewProblemText");
    const customWrapper = document.getElementById("customProblemWrapper");
    const customInput = document.getElementById("customProblemText");

    if (state.clientProblemId === "custom") {
        section.style.display = "block";
        customWrapper.style.display = "block";
        textEl.textContent = state.customProblem || "Заполните задачу клиента";
        textEl.style.color = state.customProblem ? "var(--text)" : "var(--text-secondary)";
        return;
    }

    customWrapper.style.display = "none";

    const problem = getProblem(state.clientProblemId);
    if (problem) {
        section.style.display = "block";
        textEl.textContent = problem.text;
        textEl.style.color = "var(--text)";
    } else {
        section.style.display = "none";
    }
}

function updateSpecialOffer() {
    const section = document.getElementById("specialOfferSection");
    const offer = getSpecialOffer(state.selectedSpecialOffer);

    if (!offer) {
        section.style.display = "none";
        return;
    }

    section.style.display = "block";
    document.getElementById("previewSpecialOfferTitle").textContent = offer.title;
    document.getElementById("previewSpecialOfferDescription").textContent = offer.description;

    const bonusesContainer = document.getElementById("previewSpecialOfferBonuses");
    bonusesContainer.innerHTML = offer.bonuses.map(bonus => `
        <div class="special-offer-bonus">
            <h3>${bonus.title}</h3>
            ${bonus.intro ? `<p class="bonus-intro">${bonus.intro}</p>` : ""}
            <ul>
                ${bonus.items.map(item => `<li>${item}</li>`).join("")}
            </ul>
        </div>
    `).join("");
}

function updateDiscoveryPreview() {
    const section = document.getElementById("discoveryTariffsPreviewSection");
    if (!section) return;
    section.style.display = state.showDiscoveryTariffs ? "block" : "none";
}

function updatePreviewForTab() {
    const activeTabButton = document.querySelector('.tab-button.active');
    const activeTab = activeTabButton ? activeTabButton.dataset.tab : 'kor2';

    const isDiscovery = activeTab === 'discovery';

    const problemSection = document.getElementById("problemSection");
    const specialOfferSection = document.getElementById("specialOfferSection");
    const calcSection = document.querySelector(".proposal-calc");
    const bonusesSection = document.getElementById("bonusesSection");
    const aboutSection = document.querySelector(".proposal-about");
    const twoColumns = document.querySelector(".two-columns");

    const discoverySection = document.getElementById("discoveryTariffsPreviewSection");
    const calculationSection = document.getElementById("calculationPreviewSection");
    const classicRobotSection = document.getElementById("classicRobotPreviewSection");
    const aiRobotSection = document.getElementById("aiRobotPreviewSection");
    const aiRobotCalculationSection = document.getElementById("aiRobotCalculationPreviewSection");
    const managerSection = document.getElementById("managerSection");
    const header = document.querySelector(".proposal-header");

    if (isDiscovery) {
        if (problemSection) problemSection.style.display = "none";
        if (specialOfferSection) specialOfferSection.style.display = "none";
        if (calcSection) calcSection.style.display = "none";
        if (bonusesSection) bonusesSection.style.display = "none";
        if (aboutSection) aboutSection.style.display = "none";
        if (twoColumns) twoColumns.style.display = "none";
        if (discoverySection) discoverySection.style.display = state.showDiscoveryTariffs ? "block" : "none";
        if (calculationSection) calculationSection.style.display = state.showCalculation ? "block" : "none";
        if (classicRobotSection) classicRobotSection.style.display = state.showClassicRobot ? "block" : "none";
        if (aiRobotSection) aiRobotSection.style.display = state.showAiRobot ? "block" : "none";
        if (aiRobotCalculationSection) aiRobotCalculationSection.style.display = state.showAiRobotCalculation ? "block" : "none";
    } else {
        if (problemSection) problemSection.style.display = state.clientProblemId ? "block" : "none";
        if (specialOfferSection) specialOfferSection.style.display = state.selectedSpecialOffer ? "block" : "none";
        if (calcSection) calcSection.style.display = "block";
        if (bonusesSection) bonusesSection.style.display = "block";
        if (aboutSection) aboutSection.style.display = "block";
        if (twoColumns) twoColumns.style.display = "grid";
        if (discoverySection) discoverySection.style.display = "none";
        if (calculationSection) calculationSection.style.display = "none";
        if (classicRobotSection) classicRobotSection.style.display = "none";
        if (aiRobotSection) aiRobotSection.style.display = "none";
        if (aiRobotCalculationSection) aiRobotCalculationSection.style.display = "none";
    }

    if (managerSection) managerSection.style.display = "";
    if (header) header.style.display = "";

    updateManagerBlock();
}

function syncDiscoveryClientFields() {
    const discoveryManagerSelect = document.getElementById("discoveryManagerSelect");
    if (discoveryManagerSelect) discoveryManagerSelect.value = state.discoveryManagerId;

    const discoveryClientOrgForm = document.getElementById("discoveryClientOrgForm");
    if (discoveryClientOrgForm) discoveryClientOrgForm.value = state.clientOrgForm;

    const discoveryClientName = document.getElementById("discoveryClientName");
    if (discoveryClientName) discoveryClientName.value = state.clientName;

    const discoveryProposalDate = document.getElementById("discoveryProposalDate");
    if (discoveryProposalDate) discoveryProposalDate.value = state.date;

    const discoveryValidUntilDate = document.getElementById("discoveryValidUntilDate");
    if (discoveryValidUntilDate) discoveryValidUntilDate.value = state.validUntil;

    const discoveryTariffsToggle = document.getElementById("discoveryTariffsToggle");
    if (discoveryTariffsToggle) discoveryTariffsToggle.checked = state.showDiscoveryTariffs;

    const calculationToggle = document.getElementById("calculationToggle");
    if (calculationToggle) calculationToggle.checked = state.showCalculation;

    const classicRobotToggle = document.getElementById("classicRobotToggle");
    if (classicRobotToggle) classicRobotToggle.checked = state.showClassicRobot;

    const aiRobotToggle = document.getElementById("aiRobotToggle");
    if (aiRobotToggle) aiRobotToggle.checked = state.showAiRobot;

    const aiRobotCalculationToggle = document.getElementById("aiRobotCalculationToggle");
    if (aiRobotCalculationToggle) aiRobotCalculationToggle.checked = state.showAiRobotCalculation;
}

function getIcon(name) {
    const icons = {
        email: `<svg viewBox="0 0 24 24" width="14" height="14" class="contact-icon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
        phone: `<svg viewBox="0 0 24 24" width="14" height="14" class="contact-icon"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
        manual: `<svg viewBox="0 0 24 24" width="14" height="14" class="contact-icon"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>`
    };
    return icons[name] || "";
}

function updateManagerBlock() {
    const activeTabButton = document.querySelector('.tab-button.active');
    const activeTab = activeTabButton ? activeTabButton.dataset.tab : 'kor2';
    const managerId = activeTab === 'discovery' ? state.discoveryManagerId : state.managerId;
    const manager = getManager(managerId);
    const managerSection = document.getElementById("managerSection");
    const photo = document.getElementById("managerPhoto");
    const name = document.getElementById("managerName");
    const contacts = document.getElementById("managerContacts");

    if (!manager) {
        managerSection.style.display = "none";
        return;
    }

    managerSection.style.display = "block";
    name.textContent = manager.name;

    if (manager.photo) {
        photo.src = manager.photo;
        photo.style.display = "block";
    } else {
        photo.style.display = "none";
    }

    const shared = adminData.sharedContacts;
    const contactItems = [];

    contactItems.push(`
        <div class="manager-contact-row">
            <a href="mailto:${manager.email}" class="manager-contact-link">
                ${getIcon("email")}${manager.email}
            </a>
            ${shared.phones.map(phone => `<span class="manager-contact-text">${getIcon("phone")}${phone}</span>`).join("")}
        </div>
    `);

    contactItems.push(`
        <div class="manager-contact-row messenger-row">
            <span class="messenger-icons">
                <img src="icon-max.png" alt="MAX" class="messenger-icon messenger-icon-first">
                <img src="icon-whatsapp.png" alt="WhatsApp" class="messenger-icon messenger-icon-second">
            </span>
            <span class="manager-contact-text">${shared.whatsapp}</span>
            <a href="${shared.telegramLink}" target="_blank" class="manager-contact-link telegram-link">
                <img src="icon-telegram.png" alt="Telegram" class="messenger-icon">
                ${shared.telegram}
            </a>
        </div>
        <div class="contact-note-box">${shared.whatsappNote}</div>
    `);

    contactItems.push(`
        <a href="${shared.manual.url}" target="_blank" class="manager-contact-link manager-contact-manual">
            ${getIcon("manual")}${shared.manual.label}
        </a>
    `);

    contacts.innerHTML = contactItems.join("");
}

function updateCalculations() {
    const calc = calculate();
    const operators = parseInt(state.operatorsCount) || 0;
    const tariffName = adminData.tariffs.operatorLicense[state.tariff].name;

    document.getElementById("previewTariffName").textContent = `Тариф «${tariffName}»`;

    const periods = ["daily", "3", "6", "12"];
    const perLicenseIds = ["priceDailyPerLicense", "price3mPerLicense", "price6mPerLicense", "price12mPerLicense"];
    const totalIds = ["priceDailyTotal", "price3mTotal", "price6mTotal", "price12mTotal"];

    periods.forEach((period, index) => {
        const pricePerPeriod = adminData.tariffs.operatorLicense[state.tariff][period];
        const isDailyPeriod = period === "daily";
        const months = isDailyPeriod ? 1 : parseInt(period);
        const total = operators * pricePerPeriod * months;

        document.getElementById(perLicenseIds[index]).textContent = formatLicensePrice(pricePerPeriod, period);
        document.getElementById(totalIds[index]).textContent = formatPrice(total);
    });

    document.getElementById("licenseRowLabel").textContent = `Итого за ${operators} ${declineWord(operators, "лицензию", "лицензии", "лицензий")}`;

    const periodLabels = {
        "daily": "30 дней",
        "3": "3 месяца",
        "6": "6 месяцев",
        "12": "12 месяцев"
    };
    document.getElementById("previewPeriodLabel").textContent = periodLabels[state.period] || state.period;

    const calcDetailsList = document.getElementById("calcDetailsList");
    calcDetailsList.innerHTML = "";

    if (state.proposalType !== "discovery") {
        if (state.minutesCount > 0) {
            calcDetailsList.innerHTML += `
                <div class="calc-detail-item">
                    <div>
                        <div class="calc-detail-name">Пакет минут</div>
                        <div class="calc-detail-desc">${parseInt(state.minutesCount).toLocaleString("ru-RU")} минут, ${calc.minutesPricePerMin} ₽/мин</div>
                    </div>
                    <div class="calc-detail-price">${formatPrice(calc.minutesMonthly)}/мес</div>
                </div>
            `;
        }

        if (state.moduleType !== "none") {
            calcDetailsList.innerHTML += `
                <div class="calc-detail-item">
                    <div>
                        <div class="calc-detail-name">${adminData.tariffs.modules[state.moduleType].name}</div>
                        <div class="calc-detail-desc">Модуль управления дозваниваемостью</div>
                    </div>
                    <div class="calc-detail-price">${formatPrice(calc.moduleMonthly)}/мес</div>
                </div>
            `;
        }

        if (state.incomingAtcType === "incoming_atc") {
            const firstMonthTotal = calc.incomingAtcSetup + calc.incomingAtcFirstMonth;
            const secondMonthTotal = calc.incomingAtcSetup + calc.incomingAtcMonthly;
            const periodMonths = calc.periodMonths;

            let priceText;
            if (periodMonths <= 1) {
                priceText = `${formatPrice(firstMonthTotal)}`;
            } else {
                priceText = `${formatPrice(firstMonthTotal)} в первый месяц, ${formatPrice(secondMonthTotal)} в последующие`;
            }

            calcDetailsList.innerHTML += `
                <div class="calc-detail-item">
                    <div>
                        <div class="calc-detail-name">Входящая линия АТС</div>
                        <div class="calc-detail-desc">Подключение + ежемесячная плата</div>
                    </div>
                    <div class="calc-detail-price">${priceText}</div>
                </div>
            `;
        }

        if (state.incomingNumbers > 0) {
            calcDetailsList.innerHTML += `
                <div class="calc-detail-item">
                    <div>
                        <div class="calc-detail-name">Входящие номера</div>
                        <div class="calc-detail-desc">${state.incomingNumbers} ${declineWord(state.incomingNumbers, "номер", "номера", "номеров")}, подключение + ежемесячная плата</div>
                    </div>
                    <div class="calc-detail-price">${formatPrice(calc.incomingSetup + calc.incomingMonthly)}/мес</div>
                </div>
            `;
        }

        if (state.atcType !== "none") {
            const atc = adminData.tariffs.atc[state.atcType];
            calcDetailsList.innerHTML += `
                <div class="calc-detail-item">
                    <div>
                        <div class="calc-detail-name">Подключение АТС</div>
                        <div class="calc-detail-desc">${atc.name}, ${state.atcCount} ${declineWord(state.atcCount, "подключение", "подключения", "подключений")}</div>
                    </div>
                    <div class="calc-detail-price">${formatPrice(calc.atcTotal)}</div>
                </div>
            `;
        }
    }

    state.selectedFeatures.forEach(featureId => {
        const feature = adminData.features.find(f => f.id === featureId);
        if (feature) {
            let priceText = "";
            let descText = feature.description;

            if (feature.price === null) {
                const customPrice = parseInt(state.featureQuantities[feature.id]) || 0;
                priceText = `${formatPrice(customPrice)}/мес`;
            } else if (feature.period === "monthly_per_guest") {
                const qty = parseInt(state.featureQuantities[feature.id]) || 1;
                priceText = `${formatPrice(feature.price * qty)}/мес`;
                descText = `${qty} ${declineWord(qty, "гостевой доступ", "гостевых доступа", "гостевых доступов")}`;
            } else {
                priceText = `${formatPrice(feature.price)}/мес`;
            }

            calcDetailsList.innerHTML += `
                <div class="calc-detail-item">
                    <div>
                        <div class="calc-detail-name">${feature.name}</div>
                        <div class="calc-detail-desc">${descText}</div>
                    </div>
                    <div class="calc-detail-price">${priceText}</div>
                </div>
            `;
        }
    });

    Object.entries(state.selectedDiscovery).forEach(([productId, optionId]) => {
        if (!optionId) return;
        const product = adminData.discoveryProducts.find(p => p.id === productId);
        const option = product.pricingOptions.find(o => o.id === optionId);
        if (product && option) {
            const isOneTime = product.period === "per_contact";
            calcDetailsList.innerHTML += `
                <div class="calc-detail-item">
                    <div>
                        <div class="calc-detail-name">${product.name}</div>
                        <div class="calc-detail-desc">${option.name}</div>
                    </div>
                    <div class="calc-detail-price">${formatPrice(option.price)}${isOneTime ? "" : "/мес"}</div>
                </div>
            `;
        }
    });

    if (calcDetailsList.innerHTML === "") {
        calcDetailsList.innerHTML = `<div class="calc-detail-item"><div class="calc-detail-name">Дополнительные услуги не выбраны</div></div>`;
    }

    document.getElementById("previewCalcTotal").textContent = formatPrice(calc.periodTotal);

    updateDiscoveryPreview();
}

function updateBonuses() {
    const section = document.getElementById("bonusesSection");
    const container = document.getElementById("previewBonuses");
    container.innerHTML = "";

    if (state.selectedBonuses.length === 0) {
        section.style.display = "none";
        return;
    }

    section.style.display = "block";
    state.selectedBonuses.forEach(bonusId => {
        const bonus = adminData.bonuses.find(b => b.id === bonusId);
        if (bonus) {
            container.innerHTML += `
                <div class="bonus-card">
                    <div class="bonus-icon">${bonus.icon}</div>
                    <div>
                        <div class="bonus-title">${bonus.title}</div>
                        <div class="bonus-desc">${bonus.description}</div>
                    </div>
                </div>
            `;
        }
    });
}

function updateDiscoveryPreview() {
    const container = document.getElementById("previewDiscovery");
    container.innerHTML = "";

    Object.entries(state.selectedDiscovery).forEach(([productId, optionId]) => {
        if (!optionId) return;
        const product = adminData.discoveryProducts.find(p => p.id === productId);
        const option = product.pricingOptions.find(o => o.id === optionId);
        if (product) {
            container.innerHTML += `
                <div class="discovery-item">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="discovery-price">${option.name} — ${formatPrice(option.price)}</div>
                </div>
            `;
        }
    });
}

function declineWord(number, one, two, five) {
    const n = Math.abs(number) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) return five;
    if (n1 > 1 && n1 < 5) return two;
    if (n1 === 1) return one;
    return five;
}

function printProposal() {
    window.print();
}

function downloadPdf() {
    window.print();
}

function saveAsJpeg() {
    const proposal = document.getElementById("proposalPreview");
    if (!proposal) return;
    if (typeof html2canvas === "undefined") {
        alert("Библиотека html2canvas не загружена. Попробуйте обновить страницу.");
        return;
    }

    const scale = 2;
    const pageWidth = proposal.offsetWidth;
    const pageHeight = Math.round(pageWidth * 1.4142);

    html2canvas(proposal, {
        scale: scale,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false
    }).then(canvas => {
        const totalHeight = canvas.height;
        const pageCount = Math.ceil(totalHeight / (pageHeight * scale));

        for (let i = 0; i < pageCount; i++) {
            const startY = i * pageHeight * scale;
            const chunkHeight = Math.min(pageHeight * scale, totalHeight - startY);
            const pageCanvas = document.createElement("canvas");
            pageCanvas.width = canvas.width;
            pageCanvas.height = chunkHeight;
            const ctx = pageCanvas.getContext("2d");
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
            ctx.drawImage(canvas, 0, startY, canvas.width, chunkHeight, 0, 0, canvas.width, chunkHeight);

            const link = document.createElement("a");
            link.download = `КП_страница_${i + 1}.jpg`;
            link.href = pageCanvas.toDataURL("image/jpeg", 0.95);
            link.click();
        }
    }).catch(err => {
        console.error("JPEG export error:", err);
        alert("Не удалось сохранить JPEG. Попробуйте еще раз.");
    });
}

function fitHeaderTitle() {
    const title = document.getElementById("previewHeaderTitle");
    const firstLine = document.getElementById("previewClientNameLine");
    if (!title || !firstLine) return;

    const baseFontSize = 24;
    const minFontSize = 12;
    title.style.fontSize = baseFontSize + "px";

    const containerWidth = title.clientWidth * 0.8;
    let currentSize = baseFontSize;

    const measureWidth = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const font = window.getComputedStyle(firstLine).font;
        context.font = font;
        return context.measureText(firstLine.textContent).width;
    };

    while (currentSize > minFontSize && measureWidth() > containerWidth) {
        currentSize -= 0.5;
        title.style.fontSize = currentSize + "px";
    }
}

function updateUI() {
    updateDate();
    updateManagerBlock();
    updateProblem();
    updateSpecialOffer();
    updateBonuses();
    updateCalculations();
    updatePreviewForTab();
    syncDiscoveryClientFields();
    fitHeaderTitle();
}

window.addEventListener("DOMContentLoaded", init);
