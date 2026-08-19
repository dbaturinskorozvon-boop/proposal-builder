const adminData = {
    managers: [
        {
            id: 1,
            name: "Иванова Анна",
            email: "aivanova@skorozvon.ru",
            photo: "",
            directions: ["kor2"]
        },
        {
            id: 2,
            name: "Белоусова Ксения",
            email: "kabelousova@skorozvon.ru",
            photo: "",
            directions: ["kor2"]
        },
        {
            id: 3,
            name: "Шелудченко Ксения",
            email: "ksheludchenko@skorozvon.ru",
            photo: "",
            directions: ["kor2"]
        },
        {
            id: 4,
            name: "Борисова Мария",
            email: "mshherbakova@skorozvon.ru",
            photo: "",
            directions: ["kor2"]
        },
        {
            id: 5,
            name: "Захарова Юлия",
            email: "yzakharova@skorozvon.ru",
            photo: "",
            directions: ["kor2"]
        },
        {
            id: 6,
            name: "Лешкин Виталий",
            email: "vlyoshkin@skorozvon.ru",
            photo: "",
            directions: ["discovery"]
        },
        {
            id: 7,
            name: "Куренкова Анастасия",
            email: "akurenkova@skorozvon.ru",
            photo: "",
            directions: ["discovery"]
        },
        {
            id: 8,
            name: "Гущин Владислав",
            email: "vgushhin@skorozvon.ru",
            photo: "",
            directions: ["discovery"]
        },
        {
            id: 9,
            name: "Ширинкин Александр",
            email: "ashirinkin@skorozvon.ru",
            photo: "",
            directions: ["discovery"]
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
            text: "Повысить дозваниваемость и контактность базы за счёт предиктивного диалера."
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
            title: "Бонус «50 000 + кешбэк»",
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
        },
        {
            id: "so-easy-start",
            title: "Легкий старт",
            description: "Тариф «Ежедневно» по специальной цене 3 600 ₽/мес за пользователя вместо 4 500 ₽/мес. Выгода — 900 ₽ на каждого пользователя в первый месяц.",
            bonuses: []
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
        setup: 1000,
        monthly: 500
    },
    incomingAtcFixed: {
        1: 1500,
        3: 2500,
        6: 4000,
        12: 7000
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
            price: 1000,
            period: "monthly"
        },
        {
            id: "whispering",
            name: "Суфлирование",
            description: "Подсказки оператору во время разговора в реальном времени",
            price: 1000,
            period: "monthly_per_admin"
        },
        {
            id: "sip_uri",
            name: "SIP URI",
            description: "Подключение по SIP URI для интеграции с телефонией",
            price: 2000,
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
            price: 540000,
            period: "dedicated",
            defaultMonths: 6
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
        },
        {
            id: "b4",
            icon: "💰",
            title: "Подключение транка + кешбэк",
            description: "При пополнении от 50 000 рублей вы получите 5% бонусами на счет<br>+ подключение 1 транка бесплатно!"
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
    date: new Date().toISOString().split("T")[0],
    validUntil: "",
    tariff: "pro",
    period: "3",
    operatorsCount: 3,
    startAmount: 0,
    startAmountDesc: "Рекомендуемая сумма для внесения на баланс.\nЭтого хватит на первое время работы.",
    minutesCount: 1000,
    telephonyType: "none",
    internodBilling: "per_minute",
    internodRate: 2.15,
    internodMavAttempts: 0,
    internodCarousel: false,
    internodNumbers: false,
    internodNumbersCount: 1,
    incomingNumbers: 0,
    incomingAtcType: "none",
    atcType: "none",
    atcCount: 1,
    selectedFeatures: [],
    featureQuantities: {},
    selectedDiscovery: {},
    showDiscoveryTariffs: false,
    showClassicRobot: false,
    classicRobotContacts: "",
    classicRobotContactsMaxOmni: "",
    classicRobotContactsExtended: "",
    classicRobotAssembly: 60000,
    classicRobotAssemblyMaxOmni: 60000,
    classicRobotAssemblyExtended: 87000,
    showAiRobot: false,
    aiRobotContacts: "",
    aiRobotContactsMaxOmni: "",
    aiRobotContactsExtended: "",
    aiRobotAssembly: 50000,
    aiRobotAssemblyMaxOmni: 50000,
    aiRobotAssemblyExtended: 50000,
    showHybridRobot: false,
    hybridRobotContacts: "",
    hybridRobotContactsMaxOmni: "",
    hybridRobotContactsExtended: "",
    hybridRobotAssembly: 60000,
    hybridRobotAssemblyMaxOmni: 60000,
    hybridRobotAssemblyExtended: 87000,
    showHumanVoice: false,
    humanVoiceContacts: "",
    humanVoiceContactsMaxOmni: "",
    humanVoiceContactsExtended: "",
    humanVoiceAssembly: 50000,
    humanVoiceAssemblyMaxOmni: 50000,
    humanVoiceAssemblyExtended: 50000,
    showTemplateRobots: false,
    templateRobotsSelected: [],
    templateRobotContacts: "",
    templateRobotTelephony: "own",
    showAutoInformer: false,
    autoInformerContacts: "",
    autoInformerAsr: false,
    autoInformerTransfer: false,
    autoInformerRecording: false,
    aiTrainerEnabled: false,
    aiTrainerTariff: "xs",
    aiTrainerPeriod: "1",
    aiTrainerExtraModules: {},
    selectedSpecialOffer: "",
    selectedBonuses: [],
    clientProblemId: "",
    customProblem: "",
    registrationStatus: "",
    partnersNeeded: "",
};

const INTERNOD_MAV_ATTEMPT_PRICE = 0.7;

const EASY_START_OFFER_ID = "so-easy-start";
const EASY_START_DAILY_MONTHLY_PRICE = 3600;

const CLASSIC_ROBOT_MINUTE_RATES = [
    { max: 2000, rate: 6 },
    { max: 5000, rate: 5.5 },
    { max: 7000, rate: 5 },
    { max: 10000, rate: 4.5 },
    { max: 15000, rate: 4 },
    { max: 20000, rate: 3.67 },
    { max: 30000, rate: 3.33 },
    { max: 40000, rate: 3 },
    { max: 60000, rate: 2.67 },
    { max: 100000, rate: 2.33 },
    { max: Infinity, rate: 2.33 }
];

const CLASSIC_ROBOT_CALC = {
    answerRate: 0.5,
    dialogMinutes: 0.5,
    ownTelephonyRate: 1.25,
    contactsPerNumber: 500,
    numberPrice: 10,
    licenseMonthly: 4500
};

const CLASSIC_ROBOT_SERVICE_RATES = {
    ownAtcReg: [
        { max: Infinity, rate: 0.27 }
    ],
    ownAtcNoRegMax: [
        { max: 2000, rate: 3.5 },
        { max: 5000, rate: 2.5 },
        { max: 7000, rate: 2.5 },
        { max: 10000, rate: 2 },
        { max: 15000, rate: 2 },
        { max: 20000, rate: 2 },
        { max: 30000, rate: 2 },
        { max: 40000, rate: 2 },
        { max: 60000, rate: 1.6 },
        { max: 100000, rate: 1.5 },
        { max: Infinity, rate: 1 }
    ],
    ownAtcNoRegExtended: [
        { max: 2000, rate: 3.2 },
        { max: 5000, rate: 2.2 },
        { max: 7000, rate: 2.2 },
        { max: 10000, rate: 1.7 },
        { max: 15000, rate: 1.7 },
        { max: 20000, rate: 1.7 },
        { max: 30000, rate: 1.7 },
        { max: 40000, rate: 1.7 },
        { max: 60000, rate: 1.4 },
        { max: 100000, rate: 1.3 },
        { max: Infinity, rate: 0.8 }
    ]
};

const CLASSIC_ROBOT_SCENARIOS = [
    {
        id: "ownAtcReg",
        title: "СВОЯ АТС +регистрация",
        contactsState: "classicRobotContacts",
        assemblyState: "classicRobotAssembly",
        serviceName: "СВОЯ АТС + модуль дозвона (25 коп + запись 2 коп)",
        serviceRates: CLASSIC_ROBOT_SERVICE_RATES.ownAtcReg,
        trunkOneTime: 2000
    },
    {
        id: "ownAtcNoRegMax",
        title: "СВОЯ АТС БЕЗ регистрации (Максимальный с Омни)",
        contactsState: "classicRobotContactsMaxOmni",
        assemblyState: "classicRobotAssemblyMaxOmni",
        serviceName: "СВОЯ АТС + модуль дозвона максимальный (Омни)",
        serviceRates: CLASSIC_ROBOT_SERVICE_RATES.ownAtcNoRegMax,
        trunkOneTime: 30000
    },
    {
        id: "ownAtcNoRegExtended",
        title: "СВОЯ АТС БЕЗ регистрации (Расширенный без Омни)",
        contactsState: "classicRobotContactsExtended",
        assemblyState: "classicRobotAssemblyExtended",
        serviceName: "СВОЯ АТС + модуль дозвона расширенный (без Омни)",
        serviceRates: CLASSIC_ROBOT_SERVICE_RATES.ownAtcNoRegExtended,
        trunkOneTime: 10000
    }
];

const AI_ROBOT_MINUTE_MARKUP = 2.5;

const AI_ROBOT_SCENARIOS = CLASSIC_ROBOT_SCENARIOS.map(scenario => ({
    ...scenario,
    contactsState: scenario.contactsState.replace("classicRobot", "aiRobot"),
    assemblyState: scenario.assemblyState.replace("classicRobot", "aiRobot")
}));

const HYBRID_ROBOT_MINUTE_MARKUP = 2.5;

const HYBRID_ROBOT_SCENARIOS = CLASSIC_ROBOT_SCENARIOS.map(scenario => ({
    ...scenario,
    contactsState: scenario.contactsState.replace("classicRobot", "hybridRobot"),
    assemblyState: scenario.assemblyState.replace("classicRobot", "hybridRobot")
}));

const HUMAN_VOICE_MINUTE_MARKUP = 2.5;

const HUMAN_VOICE_SCENARIOS = CLASSIC_ROBOT_SCENARIOS.map(scenario => ({
    ...scenario,
    contactsState: scenario.contactsState.replace("classicRobot", "humanVoice"),
    assemblyState: scenario.assemblyState.replace("classicRobot", "humanVoice")
}));

const TEMPLATE_ROBOTS = [
    { id: "informer", name: "Автоинформатор", price: 10000, description: "Робот произносит сообщение и завершает диалог. Для уведомлений и напоминаний" },
    { id: "question", name: "Информирование + вопрос", price: 15000, description: "Робот произносит сообщение и задает вопрос клиенту" },
    { id: "warm", name: "Теплые продажи", price: 30000, description: "После согласия клиента на первый вопрос робот задает второй вопрос" },
    { id: "leadgen", name: "Лидогенерация", price: 30000, description: "После отказа клиента на первый вопрос робот задает второй вопрос" },
    { id: "warmPro", name: "Теплые продажи PRO", price: 35000, description: "Доступны дополнительные действия по всем результатам звонка" }
];

const TEMPLATE_ROBOT_TRAFFIC_RATES = {
    own: 2.5,
    internod: 2.6
};

const AUTOINFORMER_CALC = {
    minuteRate: 2.4,
    asrRate: 1.6,
    transferRate: 0.25,
    recordingRate: 0.02
};

function formatPrice(value) {
    return formatNumber(value) + " ₽";
}

function formatNumber(value) {
    return Math.round(value).toLocaleString("ru-RU");
}

function formatRate(value) {
    return String(value).replace(".", ",");
}

function formatDayPrice(value) {
    return Math.round(value).toLocaleString("ru-RU") + " ₽ в день";
}

const ORG_FORMS = ["ООО", "ИП", "АО", "ПАО", "ЗАО", "ОАО", "НКО", "ГУП", "МУП", "ФГБУ", "АНО"];

const AI_TRAINER_TARIFFS = {
    xs: {
        name: "XS",
        staff: "до 10 сотрудников",
        feature: "Безлимитные сценарии",
        monthly: 23000,
        quarterly: 58500,
        economy: 10350,
        dialogs: 100,
        modules: {
            managerReport: "included",
            customParams: "extra",
            dashboard360: "extra"
        }
    },
    s: {
        name: "S",
        staff: "до 30 сотрудников",
        feature: "Безлимитные сценарии",
        monthly: 45500,
        quarterly: 116000,
        economy: 20475,
        dialogs: 300,
        modules: {
            managerReport: "included",
            customParams: "included",
            dashboard360: "extra"
        }
    },
    m: {
        name: "M",
        staff: "до 70 сотрудников",
        feature: "Безлимитные сценарии",
        monthly: 80500,
        quarterly: 205500,
        economy: 36225,
        dialogs: 700,
        modules: {
            managerReport: "included",
            customParams: "included",
            dashboard360: "included"
        }
    }
};

const AI_TRAINER_MODULES = [
    { id: "managerReport", title: "Отчетность руководителя", desc: "Отслеживание средних баллов сотрудников", extraPrice: 5000 },
    { id: "customParams", title: "Кастомные параметры оценки", desc: "Проверка менеджеров по кастомным оценкам", extraPrice: 5000 },
    { id: "dashboard360", title: "Дашборд 360", desc: "Аналитика отдела и процесс показателей в разрезе сценариев и навыков сотрудников", extraPrice: 5000 }
];

const AI_TRAINER_PERIOD_MONTHS = {
    "1": 1,
    "3": 3,
    "6": 6,
    "12": 12
};

function getAiTrainerPeriodMonths() {
    return AI_TRAINER_PERIOD_MONTHS[state.aiTrainerPeriod] || 1;
}

function getAiTrainerTariffPeriodPrice(tariff, periodMonths) {
    if (periodMonths === 1) return tariff.monthly;
    return tariff.quarterly * (periodMonths / 3);
}

function formatClientCompany(raw) {
    const value = (raw || "").trim().replace(/[«»"']/g, "").replace(/\s+/g, " ").trim();
    if (!value) return null;
    const parts = value.split(" ");
    const first = parts[0].toUpperCase().replace(/[.,]/g, "");
    if (ORG_FORMS.includes(first) && parts.length > 1) {
        return `${parts[0].toUpperCase()} «${parts.slice(1).join(" ")}»`;
    }
    return `«${value}»`;
}

function updateClientPreview() {
    const company = formatClientCompany(state.clientName);
    const line = document.getElementById("previewClientNameLine");
    if (line) line.textContent = company ? `для компании ${company}` : "";
}

function renderCalcDetailPrice(monthlyPrice, periodMonths, isOneTime = false) {
    if (monthlyPrice === 0) {
        return `
            <div class="calc-detail-price">
                <div class="calc-detail-price-free">Бесплатно</div>
            </div>
        `;
    }
    if (isOneTime || periodMonths === 1) {
        return `
            <div class="calc-detail-price">
                <div class="calc-detail-price-period no-divider">
                    <div class="calc-detail-price-value">${formatPrice(monthlyPrice)}</div>
                </div>
            </div>
        `;
    }
    const periodPrice = monthlyPrice * periodMonths;
    return `
        <div class="calc-detail-price">
            <div class="calc-detail-price-monthly">
                <div class="calc-detail-price-value">${formatPrice(monthlyPrice)}</div>
            </div>
            <div class="calc-detail-price-period">
                <div class="calc-detail-price-value">${formatPrice(periodPrice)}</div>
            </div>
        </div>
    `;
}

function renderDualPrice(monthlyPrice, periodPrice, periodMonths) {
    if (periodMonths === 1) {
        return `
            <div class="calc-detail-price">
                <div class="calc-detail-price-period no-divider">
                    <div class="calc-detail-price-value">${formatPrice(periodPrice)}</div>
                </div>
            </div>
        `;
    }
    return `
        <div class="calc-detail-price">
            <div class="calc-detail-price-monthly">
                <div class="calc-detail-price-value">${formatPrice(monthlyPrice)}</div>
            </div>
            <div class="calc-detail-price-period">
                <div class="calc-detail-price-value">${formatPrice(periodPrice)}</div>
            </div>
        </div>
    `;
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

function getTelephonyPrice(telephonyType, minutes) {
    if (telephonyType === "none") return 0;
    if (telephonyType === "internod") {
        const rate = state.internodRate || 2.15;
        if (state.internodBilling === "per_second") return minutes * rate;
        return minutes * rate * 1.4;
    }
    if (telephonyType === "md_basic") return minutes * 0.25 * 1.4;

    const tariffs = {
        md_extended: {
            minPrice: 6000,
            tiers: [
                { min: 0, max: 1999, price: 3.2 },
                { min: 2000, max: 9999, price: 2.2 },
                { min: 10000, max: 39999, price: 1.7 },
                { min: 40000, max: 59999, price: 1.6 },
                { min: 60000, max: 79999, price: 1.4 },
                { min: 80000, max: 119999, price: 1.3 },
                { min: 120000, max: 399999, price: 0.8 },
                { min: 400000, max: Infinity, price: 0.6 }
            ]
        },
        md_max: {
            minPrice: 7000,
            tiers: [
                { min: 0, max: 1999, price: 3.5 },
                { min: 2000, max: 9999, price: 2.5 },
                { min: 10000, max: 39999, price: 2.0 },
                { min: 40000, max: 59999, price: 1.8 },
                { min: 60000, max: 79999, price: 1.6 },
                { min: 80000, max: 119999, price: 1.5 },
                { min: 120000, max: 399999, price: 1.0 },
                { min: 400000, max: Infinity, price: 0.8 }
            ]
        }
    };

    const tariff = tariffs[telephonyType];
    if (!tariff) return 0;

    const tier = tariff.tiers.find(t => minutes >= t.min && minutes <= t.max);
    if (!tier) return 0;

    return Math.max(tariff.minPrice, minutes * tier.price);
}

function getTelephonyRate(telephonyType, minutes) {
    if (telephonyType === "internod") return state.internodRate || 2.15;
    if (telephonyType === "md_basic") return 0.25;

    const tiers = {
        md_extended: [
            { min: 0, max: 1999, rate: 3.2 },
            { min: 2000, max: 9999, rate: 2.2 },
            { min: 10000, max: 39999, rate: 1.7 },
            { min: 40000, max: 59999, rate: 1.6 },
            { min: 60000, max: 79999, rate: 1.4 },
            { min: 80000, max: 119999, rate: 1.3 },
            { min: 120000, max: 399999, rate: 0.8 },
            { min: 400000, max: Infinity, rate: 0.6 }
        ],
        md_max: [
            { min: 0, max: 1999, rate: 3.5 },
            { min: 2000, max: 9999, rate: 2.5 },
            { min: 10000, max: 39999, rate: 2.0 },
            { min: 40000, max: 59999, rate: 1.8 },
            { min: 60000, max: 79999, rate: 1.6 },
            { min: 80000, max: 119999, rate: 1.5 },
            { min: 120000, max: 399999, rate: 1.0 },
            { min: 400000, max: Infinity, rate: 0.8 }
        ]
    };

    const typeTiers = tiers[telephonyType];
    if (!typeTiers) return 0;
    const tier = typeTiers.find(t => minutes >= t.min && minutes <= t.max);
    return tier ? tier.rate : 0;
}

function getTelephonyName(telephonyType) {
    const names = {
        internod: "Партнерская телефония",
        md_basic: "Модуль дозвона: базовый",
        md_extended: "Модуль дозвона: расширенный",
        md_max: "Модуль дозвона: максимальный"
    };
    return names[telephonyType] || "Телефония";
}

function getTelephonyPeriodType(telephonyType) {
    if (telephonyType === "internod") return state.internodBilling === "per_second" ? "посекундная" : "поминутная";
    if (telephonyType === "md_basic") return "поминутная";
    return "посекундно";
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
    const dailyMultiplier = state.period === "daily" ? 30 : 1;
    const baseLicenseMonthly = operators * licensePricePerPeriod * dailyMultiplier;
    const easyStartActive = isDaily && state.tariff === "pro" && state.selectedSpecialOffer === EASY_START_OFFER_ID
        && baseLicenseMonthly > operators * EASY_START_DAILY_MONTHLY_PRICE;
    const licenseMonthly = easyStartActive ? operators * EASY_START_DAILY_MONTHLY_PRICE : baseLicenseMonthly;
    const licensePeriod = licenseMonthly * periodMonths;

    const minutesPricePerMin = getMinutesPrice(minutes);
    const minutesMonthly = minutes * minutesPricePerMin;
    const telephonyMonthly = getTelephonyPrice(state.telephonyType, minutes);
    const internodMavAttemptsCount = state.telephonyType === "internod" ? (parseInt(state.internodMavAttempts) || 0) : 0;
    const internodMavMonthly = internodMavAttemptsCount * INTERNOD_MAV_ATTEMPT_PRICE;
    const internodCarouselMonthly = state.telephonyType === "internod" && state.internodCarousel ? 3000 : 0;
    const internodNumbersMonthly = state.telephonyType === "internod" && state.internodNumbers ? (parseInt(state.internodNumbersCount) || 1) * 300 : 0;
    const moduleMonthly = telephonyMonthly + internodMavMonthly + internodCarouselMonthly + internodNumbersMonthly;
    const incomingSetup = incomingNumbers * adminData.tariffs.incomingNumber.setup;
    const incomingMonthly = incomingNumbers * adminData.tariffs.incomingNumber.monthly;

    const incomingAtcFixedPrice = state.incomingAtcType === "incoming_atc" ? (adminData.tariffs.incomingAtcFixed[periodMonths] || 1500) : 0;
    const incomingAtcMonthly = state.incomingAtcType === "incoming_atc" ? 1500 : 0;

    let atcTotal = 0;
    if (state.atcType !== "none") {
        const atcPrice = adminData.tariffs.atc[state.atcType].price;
        atcTotal = atcPrice * atcCount;
    }

    let featuresMonthly = 0;
    let featuresOneTime = 0;
    state.selectedFeatures.forEach(featureId => {
        const feature = adminData.features.find(f => f.id === featureId);
        if (feature) {
            if (feature.price === null) {
                const customPrice = parseInt(state.featureQuantities[feature.id]) || 0;
                featuresMonthly += customPrice;
            } else if (feature.period === "monthly_per_guest" || feature.period === "monthly_per_admin") {
                const qty = parseInt(state.featureQuantities[feature.id]) || 1;
                featuresMonthly += feature.price * qty;
            } else if (feature.period === "dedicated") {
                const customPrice = parseInt(state.featureQuantities[feature.id]) || feature.price;
                featuresOneTime += customPrice;
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

    const monthlyTotal = licenseMonthly + moduleMonthly + incomingMonthly + incomingAtcMonthly + featuresMonthly + discoveryMonthly;
    const periodTotal = licensePeriod + (moduleMonthly + incomingMonthly + featuresMonthly + discoveryMonthly) * periodMonths + incomingSetup + incomingAtcFixedPrice + atcTotal + discoveryOneTime + featuresOneTime;

    return {
        licensePricePerPeriod,
        licenseMonthly,
        licensePeriod,
        minutesMonthly,
        telephonyMonthly,
        internodMavAttemptsCount,
        internodMavMonthly,
        internodCarouselMonthly,
        internodNumbersMonthly,
        moduleMonthly,
        incomingSetup,
        incomingMonthly,
        incomingAtcFixedPrice,
        incomingAtcMonthly,
        atcTotal,
        featuresMonthly,
        featuresOneTime,
        discoveryMonthly,
        discoveryOneTime,
        monthlyTotal,
        periodTotal,
        minutesPricePerMin,
        periodMonths,
        isDaily
    };
}

async function init() {
    try {
        const response = await fetch("data.json?v=" + Date.now());
        if (response.ok) {
            const data = await response.json();
            if (data.managers) adminData.managers = data.managers;
            if (data.sharedContacts) adminData.sharedContacts = data.sharedContacts;
            if (data.clientProblems) adminData.clientProblems = data.clientProblems;
            if (data.specialOffers) adminData.specialOffers = data.specialOffers;
            if (data.tariffs) adminData.tariffs = data.tariffs;
            if (data.features) adminData.features = data.features;
            if (data.discoveryProducts) adminData.discoveryProducts = data.discoveryProducts;
            if (data.bonuses) adminData.bonuses = data.bonuses;
            if (data.clientLogos) adminData.clientLogos = data.clientLogos;
        }
    } catch (e) {
        console.error("Failed to load data.json", e);
    }

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

function getManagersByDirection(direction) {
    const filtered = adminData.managers.filter(manager => !manager.directions || manager.directions.length === 0 || manager.directions.includes(direction));
    return filtered.length > 0 ? filtered : adminData.managers;
}

function populateManagers() {
    const select = document.getElementById("managerSelect");
    getManagersByDirection("kor2").forEach(manager => {
        const option = document.createElement("option");
        option.value = manager.id;
        option.textContent = manager.name;
        select.appendChild(option);
    });
}

function populateDiscoveryManagers() {
    const select = document.getElementById("discoveryManagerSelect");
    if (!select) return;
    getManagersByDirection("discovery").forEach(manager => {
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
            priceLabel = `${formatPrice(feature.price)}/мес за гостя`;
        } else if (feature.period === "monthly_per_admin") {
            priceLabel = `${formatPrice(feature.price)}/мес за админ`;
        } else if (feature.period === "dedicated") {
            priceLabel = `${formatPrice(feature.price)} за ${feature.defaultMonths} мес`;
        } else {
            priceLabel = `${formatPrice(feature.price)}/мес`;
        }

        let quantityInput = "";
        if (feature.period === "monthly_per_guest") {
            quantityInput = `
                <div class="feature-quantity" style="display: none; margin-top: 8px; padding-left: 28px;">
                    <label>
                        <span>Количество гостевых доступов</span>
                        <input type="number" min="1" value="1" data-feature-quantity="${feature.id}">
                    </label>
                </div>
            `;
        }

        if (feature.period === "monthly_per_admin") {
            quantityInput = `
                <div class="feature-quantity" style="display: none; margin-top: 8px; padding-left: 28px;">
                    <label>
                        <span>Количество администраторов</span>
                        <input type="number" min="1" value="1" data-feature-quantity="${feature.id}">
                    </label>
                </div>
            `;
        }

        if (feature.period === "dedicated") {
            quantityInput = `
                <div class="feature-quantity" style="display: none; margin-top: 8px; padding-left: 28px;">
                    <label class="feature-quantity-label">
                        <span>Стоимость, ₽</span>
                        <input type="number" min="0" step="1000" value="${feature.price}" data-feature-custom-price="${feature.id}">
                    </label>
                    <label class="feature-quantity-label" style="margin-top: 8px;">
                        <span>Количество месяцев</span>
                        <input type="number" min="1" step="1" value="${feature.defaultMonths}" data-feature-months="${feature.id}-months">
                    </label>
                </div>
            `;
        }

        if (feature.price === null) {
            quantityInput = `
                <div class="feature-quantity" style="display: none; margin-top: 8px; padding-left: 28px;">
                    <label class="feature-quantity-label">
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

    document.getElementById("clientName").addEventListener("input", e => {
        state.clientName = e.target.value;
        const discoveryClientName = document.getElementById("discoveryClientName");
        if (discoveryClientName) discoveryClientName.value = state.clientName;
        updateClientPreview();
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
        updateSpecialOffer();
    });

    document.getElementById("startAmountInput").addEventListener("input", e => {
        state.startAmount = parseInt(e.target.value) || 0;
        updateStartAmount();
    });

    document.getElementById("startAmountDescInput").addEventListener("input", e => {
        state.startAmountDesc = e.target.value;
        updateStartAmount();
    });

    document.getElementById("minutesCount").addEventListener("input", e => {
        state.minutesCount = e.target.value;
        updateCalculations();
    });

    document.getElementById("telephonySelect").addEventListener("change", e => {
        state.telephonyType = e.target.value;
        const internodOptions = document.getElementById("internodOptions");
        if (internodOptions) {
            internodOptions.style.display = state.telephonyType === "internod" ? "block" : "none";
        }
        updateCalculations();
    });

    document.getElementById("internodBillingSelect").addEventListener("change", e => {
        state.internodBilling = e.target.value;
        updateCalculations();
    });

    document.getElementById("internodRateSelect").addEventListener("change", e => {
        state.internodRate = parseFloat(e.target.value);
        updateCalculations();
    });

    document.getElementById("internodMavAttempts").addEventListener("input", e => {
        state.internodMavAttempts = e.target.value;
        updateCalculations();
    });

    document.getElementById("internodCarousel").addEventListener("change", e => {
        state.internodCarousel = e.target.checked;
        updateCalculations();
    });

    document.getElementById("internodNumbers").addEventListener("change", e => {
        state.internodNumbers = e.target.checked;
        updateCalculations();
    });

    document.getElementById("internodNumbersCount").addEventListener("input", e => {
        state.internodNumbersCount = e.target.value;
        updateCalculations();
    });

    document.getElementById("incomingNumbers").addEventListener("input", e => {
        state.incomingNumbers = e.target.value;
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
        updateCalculations();
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
        if (e.target.dataset.featureMonths) {
            state.featureQuantities[e.target.dataset.featureMonths] = e.target.value;
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

    const registrationStatusSelect = document.getElementById("registrationStatus");
    if (registrationStatusSelect) {
        registrationStatusSelect.addEventListener("change", e => {
            state.registrationStatus = e.target.value;
            updateOnboarding();
        });
    }

    const partnersNeededSelect = document.getElementById("partnersNeeded");
    if (partnersNeededSelect) {
        partnersNeededSelect.addEventListener("change", e => {
            state.partnersNeeded = e.target.value;
            updatePartners();
        });
    }

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

    const discoveryClientName = document.getElementById("discoveryClientName");
    if (discoveryClientName) {
        discoveryClientName.addEventListener("input", e => {
            state.clientName = e.target.value;
            document.getElementById("clientName").value = state.clientName;
            updateClientPreview();
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

    const classicRobotContacts = document.getElementById("classicRobotContacts");
    if (classicRobotContacts) {
        classicRobotContacts.addEventListener("input", e => {
            state.classicRobotContacts = e.target.value;
            updatePreviewForTab();
        });
    }

    const classicRobotContactsMaxOmni = document.getElementById("classicRobotContactsMaxOmni");
    if (classicRobotContactsMaxOmni) {
        classicRobotContactsMaxOmni.addEventListener("input", e => {
            state.classicRobotContactsMaxOmni = e.target.value;
            updatePreviewForTab();
        });
    }

    const classicRobotContactsExtended = document.getElementById("classicRobotContactsExtended");
    if (classicRobotContactsExtended) {
        classicRobotContactsExtended.addEventListener("input", e => {
            state.classicRobotContactsExtended = e.target.value;
            updatePreviewForTab();
        });
    }

    const classicRobotAssembly = document.getElementById("classicRobotAssembly");
    if (classicRobotAssembly) {
        classicRobotAssembly.addEventListener("input", e => {
            state.classicRobotAssembly = e.target.value;
            updatePreviewForTab();
        });
    }

    const classicRobotAssemblyMaxOmni = document.getElementById("classicRobotAssemblyMaxOmni");
    if (classicRobotAssemblyMaxOmni) {
        classicRobotAssemblyMaxOmni.addEventListener("input", e => {
            state.classicRobotAssemblyMaxOmni = e.target.value;
            updatePreviewForTab();
        });
    }

    const classicRobotAssemblyExtended = document.getElementById("classicRobotAssemblyExtended");
    if (classicRobotAssemblyExtended) {
        classicRobotAssemblyExtended.addEventListener("input", e => {
            state.classicRobotAssemblyExtended = e.target.value;
            updatePreviewForTab();
        });
    }

    const classicRobotToggle = document.getElementById("classicRobotToggle");
    if (classicRobotToggle) {
        classicRobotToggle.addEventListener("change", e => {
            state.showClassicRobot = e.target.checked;
            const calculations = document.getElementById("classicRobotCalculations");
            if (calculations) calculations.style.display = state.showClassicRobot ? "block" : "none";
            updatePreviewForTab();
        });
    }

    const aiRobotToggle = document.getElementById("aiRobotToggle");
    if (aiRobotToggle) {
        aiRobotToggle.addEventListener("change", e => {
            state.showAiRobot = e.target.checked;
            const calculations = document.getElementById("aiRobotCalculations");
            if (calculations) calculations.style.display = state.showAiRobot ? "block" : "none";
            updatePreviewForTab();
        });
    }

    AI_ROBOT_SCENARIOS.forEach(scenario => {
        const contactsInput = document.getElementById(scenario.contactsState);
        if (contactsInput) {
            contactsInput.addEventListener("input", e => {
                state[scenario.contactsState] = e.target.value;
                updatePreviewForTab();
            });
        }
        const assemblyInput = document.getElementById(scenario.assemblyState);
        if (assemblyInput) {
            assemblyInput.addEventListener("input", e => {
                state[scenario.assemblyState] = e.target.value;
                updatePreviewForTab();
            });
        }
    });

    const hybridRobotToggle = document.getElementById("hybridRobotToggle");
    if (hybridRobotToggle) {
        hybridRobotToggle.addEventListener("change", e => {
            state.showHybridRobot = e.target.checked;
            const calculations = document.getElementById("hybridRobotCalculations");
            if (calculations) calculations.style.display = state.showHybridRobot ? "block" : "none";
            updatePreviewForTab();
        });
    }

    HYBRID_ROBOT_SCENARIOS.forEach(scenario => {
        const contactsInput = document.getElementById(scenario.contactsState);
        if (contactsInput) {
            contactsInput.addEventListener("input", e => {
                state[scenario.contactsState] = e.target.value;
                updatePreviewForTab();
            });
        }
        const assemblyInput = document.getElementById(scenario.assemblyState);
        if (assemblyInput) {
            assemblyInput.addEventListener("input", e => {
                state[scenario.assemblyState] = e.target.value;
                updatePreviewForTab();
            });
        }
    });

    const humanVoiceToggle = document.getElementById("humanVoiceToggle");
    if (humanVoiceToggle) {
        humanVoiceToggle.addEventListener("change", e => {
            state.showHumanVoice = e.target.checked;
            const calculations = document.getElementById("humanVoiceCalculations");
            if (calculations) calculations.style.display = state.showHumanVoice ? "block" : "none";
            updatePreviewForTab();
        });
    }

    HUMAN_VOICE_SCENARIOS.forEach(scenario => {
        const contactsInput = document.getElementById(scenario.contactsState);
        if (contactsInput) {
            contactsInput.addEventListener("input", e => {
                state[scenario.contactsState] = e.target.value;
                updatePreviewForTab();
            });
        }
        const assemblyInput = document.getElementById(scenario.assemblyState);
        if (assemblyInput) {
            assemblyInput.addEventListener("input", e => {
                state[scenario.assemblyState] = e.target.value;
                updatePreviewForTab();
            });
        }
    });

    const templateRobotsToggle = document.getElementById("templateRobotsToggle");
    if (templateRobotsToggle) {
        templateRobotsToggle.addEventListener("change", e => {
            state.showTemplateRobots = e.target.checked;
            const options = document.getElementById("templateRobotsOptions");
            if (options) options.style.display = state.showTemplateRobots ? "block" : "none";
            updatePreviewForTab();
        });
    }

    document.querySelectorAll(".template-robot-checkbox").forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            state.templateRobotsSelected = Array.from(document.querySelectorAll(".template-robot-checkbox:checked")).map(el => el.value);
            updatePreviewForTab();
        });
    });

    const templateRobotContacts = document.getElementById("templateRobotContacts");
    if (templateRobotContacts) {
        templateRobotContacts.addEventListener("input", e => {
            state.templateRobotContacts = e.target.value;
            updatePreviewForTab();
        });
    }

    const templateRobotTelephony = document.getElementById("templateRobotTelephony");
    if (templateRobotTelephony) {
        templateRobotTelephony.addEventListener("change", e => {
            state.templateRobotTelephony = e.target.value;
            updatePreviewForTab();
        });
    }

    const autoInformerToggle = document.getElementById("autoInformerToggle");
    if (autoInformerToggle) {
        autoInformerToggle.addEventListener("change", e => {
            state.showAutoInformer = e.target.checked;
            const options = document.getElementById("autoInformerOptions");
            if (options) options.style.display = state.showAutoInformer ? "block" : "none";
            updatePreviewForTab();
        });
    }

    const autoInformerContacts = document.getElementById("autoInformerContacts");
    if (autoInformerContacts) {
        autoInformerContacts.addEventListener("input", e => {
            state.autoInformerContacts = e.target.value;
            updatePreviewForTab();
        });
    }

    const autoInformerAsr = document.getElementById("autoInformerAsr");
    if (autoInformerAsr) {
        autoInformerAsr.addEventListener("change", e => {
            state.autoInformerAsr = e.target.checked;
            updatePreviewForTab();
        });
    }

    const autoInformerTransfer = document.getElementById("autoInformerTransfer");
    if (autoInformerTransfer) {
        autoInformerTransfer.addEventListener("change", e => {
            state.autoInformerTransfer = e.target.checked;
            updatePreviewForTab();
        });
    }

    const autoInformerRecording = document.getElementById("autoInformerRecording");
    if (autoInformerRecording) {
        autoInformerRecording.addEventListener("change", e => {
            state.autoInformerRecording = e.target.checked;
            updatePreviewForTab();
        });
    }

    const aiTrainerToggle = document.getElementById("aiTrainerToggle");
    if (aiTrainerToggle) {
        aiTrainerToggle.addEventListener("change", e => {
            state.aiTrainerEnabled = e.target.checked;
            const options = document.getElementById("aiTrainerOptions");
            if (options) options.style.display = e.target.checked ? "block" : "none";
            updateAiTrainer();
            updatePreviewForTab();
        });
    }

    const aiTrainerTariff = document.getElementById("aiTrainerTariff");
    if (aiTrainerTariff) {
        aiTrainerTariff.addEventListener("change", e => {
            state.aiTrainerTariff = e.target.value;
            updateAiTrainer();
        });
    }

    const aiTrainerPeriod = document.getElementById("aiTrainerPeriod");
    if (aiTrainerPeriod) {
        aiTrainerPeriod.addEventListener("change", e => {
            state.aiTrainerPeriod = e.target.value;
            updateAiTrainer();
        });
    }

    document.getElementById("printProposal").addEventListener("click", printProposal);
    document.getElementById("downloadPdf").addEventListener("click", downloadPdf);

    state.customProblem = state.customProblem || "";
    state.validUntil = state.validUntil || addDays(state.date, 14);

    document.getElementById("proposalDate").value = state.date;
    document.getElementById("validUntilDate").value = state.validUntil;
    document.getElementById("discoveryProposalDate").value = state.date;
    document.getElementById("discoveryValidUntilDate").value = state.validUntil;
}

function updateOnboarding() {
    const section = document.getElementById("onboardingSection");
    const registrationStep = document.getElementById("onboardingRegistrationStep");
    if (!section) return;

    const activeTabButton = document.querySelector('.tab-button.active');
    const activeTab = activeTabButton ? activeTabButton.dataset.tab : 'kor2';
    const isKor2 = activeTab === 'kor2';
    const isSkorozvon = state.proposalType === "skorozvon" || state.proposalType === "both";

    const showSection = isKor2 && isSkorozvon && state.registrationStatus !== "";
    section.style.display = showSection ? "block" : "none";

    if (registrationStep) {
        registrationStep.style.display = state.registrationStatus === "has_registration" ? "none" : "";
    }

    const title = document.getElementById("onboardingTitle");
    if (title) {
        title.textContent = state.registrationStatus === "has_registration"
            ? "Два простых шага, чтобы начать звонить"
            : "Три простых шага, чтобы начать звонить";
    }
}

function updatePartners() {
    const section = document.getElementById("partnersSection");
    if (!section) return;

    const activeTabButton = document.querySelector('.tab-button.active');
    const activeTab = activeTabButton ? activeTabButton.dataset.tab : 'kor2';
    const isKor2 = activeTab === 'kor2';
    const isSkorozvon = state.proposalType === "skorozvon" || state.proposalType === "both";

    section.style.display = (isKor2 && isSkorozvon && state.partnersNeeded === "yes") ? "block" : "none";
}

function updateAiTrainer() {
    const section = document.getElementById("aiTrainerPreviewSection");
    const cardsContainer = document.getElementById("aiTrainerCards");
    const calcList = document.getElementById("aiTrainerCalcList");
    const menuModules = document.getElementById("aiTrainerMenuModules");
    if (!section || !cardsContainer) return;

    const activeTabButton = document.querySelector('.tab-button.active');
    const activeTab = activeTabButton ? activeTabButton.dataset.tab : 'kor2';
    const isDiscovery = activeTab === 'discovery';

    section.style.display = (isDiscovery && state.aiTrainerEnabled) ? "block" : "none";

    if (!state.aiTrainerEnabled) {
        cardsContainer.innerHTML = "";
        if (calcList) calcList.innerHTML = "";
        if (menuModules) menuModules.innerHTML = "";
        return;
    }

    const selectedTariff = AI_TRAINER_TARIFFS[state.aiTrainerTariff] || AI_TRAINER_TARIFFS.xs;
    const periodMonths = getAiTrainerPeriodMonths();
    const periodPriceHeader = document.getElementById("aiTrainerPeriodPriceHeader");
    if (periodPriceHeader) {
        periodPriceHeader.textContent = `за ${periodMonths} ${declineWord(periodMonths, "месяц", "месяца", "месяцев")}`;
        periodPriceHeader.style.display = periodMonths === 1 ? "none" : "";
    }

    if (menuModules) {
        menuModules.innerHTML = AI_TRAINER_MODULES.map(m => {
            const isIncluded = selectedTariff.modules[m.id] === "included";
            const isChecked = isIncluded || !!state.aiTrainerExtraModules[m.id];
            return `
                <label class="ai-trainer-menu-module ${isIncluded ? 'is-included' : ''}">
                    <input type="checkbox" data-ai-trainer-module="${m.id}" ${isChecked ? 'checked' : ''} ${isIncluded ? 'disabled' : ''}>
                    <span class="ai-trainer-menu-module-title">${m.title}</span>
                    <span class="${isIncluded ? 'ai-trainer-menu-included' : 'ai-trainer-menu-extra'}">${isIncluded ? 'Входит' : `+ ${formatNumber(m.extraPrice)} ₽`}</span>
                </label>
            `;
        }).join("");

        menuModules.querySelectorAll("input[data-ai-trainer-module]").forEach(input => {
            input.addEventListener("change", e => {
                const moduleId = e.target.dataset.aiTrainerModule;
                state.aiTrainerExtraModules[moduleId] = e.target.checked;
                updateAiTrainer();
            });
        });
    }

    cardsContainer.innerHTML = Object.entries(AI_TRAINER_TARIFFS).map(([key, t]) => {
        const isActive = key === state.aiTrainerTariff;
        const modulesHtml = AI_TRAINER_MODULES.map(m => {
            const isIncluded = t.modules[m.id] === "included";
            return `
                <div class="ai-trainer-module">
                    <div class="ai-trainer-module-title">${m.title}</div>
                    <div class="ai-trainer-module-desc">${m.desc}</div>
                    <span class="ai-trainer-module-badge ${isIncluded ? 'ai-trainer-module-included' : 'ai-trainer-module-extra'}">
                        ${isIncluded ? 'Входит в тариф' : `+ ${formatNumber(m.extraPrice)} руб/мес`}
                    </span>
                </div>
            `;
        }).join("");

        return `
            <div class="ai-trainer-card ${isActive ? 'ai-trainer-card-active' : ''}" data-ai-trainer-tariff="${key}">
                <div class="ai-trainer-card-badge">${isActive ? 'Ваш тариф' : ''}</div>
                <div class="ai-trainer-card-name">${t.name}</div>
                <div class="ai-trainer-card-staff">${t.staff}</div>
                <div class="ai-trainer-card-feature"><strong>${t.feature}</strong></div>
                <div class="ai-trainer-card-price">
                    <span class="ai-trainer-card-price-value">${formatNumber(t.monthly)}</span>
                    <span class="ai-trainer-card-price-period"> руб/мес</span>
                </div>
                <div class="ai-trainer-card-quarterly">
                    <strong>${formatNumber(t.quarterly)}</strong> руб/квартал
                </div>
                <div class="ai-trainer-card-economy">Экономия: ${formatNumber(t.economy)} руб. (${formatNumber(Math.round(t.economy / 3))} в месяц)</div>
                <div class="ai-trainer-modules">
                    <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 10px;">Подключаемые модули:</div>
                    ${modulesHtml}
                </div>
            </div>
        `;
    }).join("");

    if (calcList) {
        let extraMonthly = 0;
        const calcRows = AI_TRAINER_MODULES.map(m => {
            if (selectedTariff.modules[m.id] === "included") return "";
            if (!state.aiTrainerExtraModules[m.id]) return "";
            extraMonthly += m.extraPrice;
            return `
                <div class="calc-detail-item">
                    <div class="calc-detail-name">${m.title}</div>
                    ${renderCalcDetailPrice(m.extraPrice, periodMonths)}
                </div>
            `;
        }).join("");

        const tariffPeriodPrice = getAiTrainerTariffPeriodPrice(selectedTariff, periodMonths);
        const extraPeriodTotal = extraMonthly * periodMonths;
        const totalMonthly = selectedTariff.monthly + extraMonthly;
        const totalPeriod = tariffPeriodPrice + extraPeriodTotal;

        calcList.innerHTML = `
            <div class="calc-detail-item">
                <div class="calc-detail-name">AI-тренажер «${selectedTariff.name}»</div>
                ${renderDualPrice(selectedTariff.monthly, tariffPeriodPrice, periodMonths)}
            </div>
            ${calcRows}
            <div class="calc-detail-item calc-detail-total">
                <div class="calc-detail-name">Итого</div>
                ${renderDualPrice(totalMonthly, totalPeriod, periodMonths)}
            </div>
        `;
    }
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
    const onboardingSection = document.getElementById("onboardingSection");
    const partnersSection = document.getElementById("partnersSection");
    const twoColumns = document.querySelector(".two-columns");

    if (state.proposalType === "skorozvon") {
        skorozvonSection.style.display = "block";
        calcSection.style.display = "block";
        bonusesSection.style.display = state.selectedBonuses.length > 0 ? "block" : "none";
        onboardingSection.style.display = state.registrationStatus ? "block" : "none";
        partnersSection.style.display = state.partnersNeeded === "yes" ? "block" : "none";
        aboutSection.style.display = "block";
        twoColumns.style.display = "grid";
        discoverySection.style.display = "none";
        discoveryPreviewSection.style.display = "none";
    } else if (state.proposalType === "discovery") {
        skorozvonSection.style.display = "none";
        calcSection.style.display = "none";
        bonusesSection.style.display = "none";
        onboardingSection.style.display = "none";
        partnersSection.style.display = "none";
        aboutSection.style.display = "none";
        twoColumns.style.display = "none";
        discoverySection.style.display = "block";
        discoveryPreviewSection.style.display = "block";
    } else {
        skorozvonSection.style.display = "block";
        calcSection.style.display = "block";
        bonusesSection.style.display = state.selectedBonuses.length > 0 ? "block" : "none";
        onboardingSection.style.display = state.registrationStatus ? "block" : "none";
        partnersSection.style.display = state.partnersNeeded === "yes" ? "block" : "none";
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
        validityText.textContent = `Предложение действительно ${days} ${daysWord} — до ${validUntilStr}`;
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

function getSpecialOfferDescription(offer) {
    if (offer.id === EASY_START_OFFER_ID) {
        const operators = parseInt(state.operatorsCount) || 0;
        let text = "Тариф «Ежедневно» по специальной цене 3 600 ₽/мес за пользователя вместо 4 500 ₽/мес. Выгода — 900 ₽ на каждого пользователя в первый месяц.";
        if (operators > 1) {
            const benefit = operators * 900;
            text += ` Для вашей команды из ${operators} ${declineWord(operators, "пользователя", "пользователей", "пользователей")} выгода в первый месяц составит ${formatNumber(benefit)} ₽.`;
        }
        return text;
    }
    return offer.description;
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
    document.getElementById("previewSpecialOfferDescription").textContent = getSpecialOfferDescription(offer);

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

function getClassicRobotRate(rates, minutes) {
    const tier = rates.find(r => minutes <= r.max);
    return tier ? tier.rate : rates[rates.length - 1].rate;
}

const CLASSIC_ROBOT_PACKAGES = [
    { minutes: 2000, name: "Старт" },
    { minutes: 5000, name: "XS" },
    { minutes: 7000, name: "" },
    { minutes: 10000, name: "S" },
    { minutes: 15000, name: "" },
    { minutes: 20000, name: "M" },
    { minutes: 30000, name: "" },
    { minutes: 40000, name: "L" },
    { minutes: 60000, name: "" },
    { minutes: 100000, name: "Enterprise" },
    { minutes: 200000, name: "" }
];

function getClassicRobotPackage(minutes) {
    if (minutes <= 0) return null;
    return CLASSIC_ROBOT_PACKAGES.find(p => minutes <= p.minutes) || null;
}

function calcClassicRobotMoney(value) {
    return Math.ceil(value);
}

function buildRobotCalculationCards(scenarios, minuteMarkup) {
    return scenarios.map(scenario => {
        const contacts = parseInt(state[scenario.contactsState]) || 0;
        if (contacts <= 0) return "";

        const requiredMinutes = Math.ceil(contacts * CLASSIC_ROBOT_CALC.answerRate * CLASSIC_ROBOT_CALC.dialogMinutes);
        const robotPackage = getClassicRobotPackage(requiredMinutes);
        const billedMinutes = robotPackage ? robotPackage.minutes : requiredMinutes;
        const minuteRate = getClassicRobotRate(CLASSIC_ROBOT_MINUTE_RATES, billedMinutes) + minuteMarkup;
        const serviceRate = getClassicRobotRate(scenario.serviceRates, billedMinutes);
        const packageTotal = calcClassicRobotMoney(billedMinutes * minuteRate);
        const serviceTotal = calcClassicRobotMoney(billedMinutes * serviceRate);
        const numbersCount = Math.ceil(contacts / CLASSIC_ROBOT_CALC.contactsPerNumber);
        const telephonyTotal = calcClassicRobotMoney(requiredMinutes * CLASSIC_ROBOT_CALC.ownTelephonyRate);
        const numbersTotal = numbersCount * CLASSIC_ROBOT_CALC.numberPrice;
        const assemblyOneTime = parseInt(state[scenario.assemblyState]) || 0;
        const trunkLabel = scenario.trunkOneTime === 30000 ? "Транки (3 шт, разово)" : "Транк (разово)";
        const total = packageTotal + serviceTotal + telephonyTotal + numbersTotal + CLASSIC_ROBOT_CALC.licenseMonthly + scenario.trunkOneTime + assemblyOneTime;
        const packageLabel = robotPackage && robotPackage.name ? `«${robotPackage.name}» ` : "";
        const packageNote = robotPackage && billedMinutes !== requiredMinutes
            ? `пакет ${packageLabel}${formatNumber(billedMinutes)} мин к оплате`
            : `минут к оплате: ${formatNumber(billedMinutes)}`;

        return `
            <div class="calculation-card">
                <h3>${scenario.title}</h3>
                <table class="calculation-table">
                    <tbody>
                        <tr>
                            <td>Минуты (${formatNumber(billedMinutes)} мин × ${formatRate(minuteRate)})</td>
                            <td class="calculation-price">${formatNumber(packageTotal)}</td>
                        </tr>
                        <tr>
                            <td>${scenario.serviceName} (${formatNumber(billedMinutes)} мин × ${formatRate(serviceRate)})</td>
                            <td class="calculation-price">${formatNumber(serviceTotal)}</td>
                        </tr>
                        <tr>
                            <td>Телефония клиента (своя, ${formatNumber(requiredMinutes)} мин × 1,25)</td>
                            <td class="calculation-price">${formatNumber(telephonyTotal)}</td>
                        </tr>
                        <tr>
                            <td>Номера (${formatNumber(numbersCount)} шт × 10 руб)</td>
                            <td class="calculation-price">${formatNumber(numbersTotal)}</td>
                        </tr>
                        <tr>
                            <td>Лицензия сервиса (месяц)</td>
                            <td class="calculation-price">${formatNumber(CLASSIC_ROBOT_CALC.licenseMonthly)}</td>
                        </tr>
                        <tr>
                            <td>${trunkLabel}</td>
                            <td class="calculation-price">${formatNumber(scenario.trunkOneTime)}</td>
                        </tr>
                        <tr>
                            <td>Сборка / интеграция (разово)</td>
                            <td class="calculation-price">${formatNumber(assemblyOneTime)}</td>
                        </tr>
                    </tbody>
                </table>
                <p class="calculation-note">дозвон 50%, диалог 30 сек; расчёт: ${formatNumber(requiredMinutes)} мин → ${packageNote}</p>
                <div class="calculation-total">
                    <span>Итого за первый месяц</span>
                    <span class="calculation-total-price">${formatNumber(total)}</span>
                </div>
            </div>
        `;
    }).join("");
}

function updateClassicRobotCalculation() {
    const container = document.getElementById("classicRobotCalculationContent");
    if (!container) return;

    container.innerHTML = buildRobotCalculationCards(CLASSIC_ROBOT_SCENARIOS, 0);
}

function updateAiRobotCalculation() {
    const container = document.getElementById("aiRobotCalculationContent");
    if (!container) return;

    container.innerHTML = buildRobotCalculationCards(AI_ROBOT_SCENARIOS, AI_ROBOT_MINUTE_MARKUP);
}

function updateHybridRobotCalculation() {
    const container = document.getElementById("hybridRobotCalculationContent");
    if (!container) return;

    container.innerHTML = buildRobotCalculationCards(HYBRID_ROBOT_SCENARIOS, HYBRID_ROBOT_MINUTE_MARKUP);
}

function updateHumanVoiceCalculation() {
    const container = document.getElementById("humanVoiceCalculationContent");
    if (!container) return;

    container.innerHTML = buildRobotCalculationCards(HUMAN_VOICE_SCENARIOS, HUMAN_VOICE_MINUTE_MARKUP);
}

function updateTemplateRobotsCalculation() {
    const container = document.getElementById("templateRobotsCalculationContent");
    if (!container) return;

    const selected = TEMPLATE_ROBOTS.filter(template => state.templateRobotsSelected.includes(template.id));
    const contacts = parseInt(state.templateRobotContacts) || 0;
    if (selected.length === 0 && contacts <= 0) {
        container.innerHTML = "";
        return;
    }

    const requiredMinutes = Math.ceil(contacts * CLASSIC_ROBOT_CALC.answerRate * CLASSIC_ROBOT_CALC.dialogMinutes);
    const trafficRate = TEMPLATE_ROBOT_TRAFFIC_RATES[state.templateRobotTelephony] || TEMPLATE_ROBOT_TRAFFIC_RATES.own;
    const telephonyLabel = state.templateRobotTelephony === "internod" ? "Интернод" : "своя АТС";
    const trafficTotal = calcClassicRobotMoney(requiredMinutes * trafficRate);
    const templatesTotal = selected.reduce((sum, template) => sum + template.price, 0);

    const templateRows = selected.map(template => `
                        <tr>
                            <td>${template.name} (разово)</td>
                            <td class="calculation-price">${formatNumber(template.price)}</td>
                        </tr>`).join("");

    const trafficRow = requiredMinutes > 0 ? `
                        <tr>
                            <td>Трафик (${telephonyLabel}, ${formatNumber(requiredMinutes)} мин × ${formatRate(trafficRate)})</td>
                            <td class="calculation-price">${formatNumber(trafficTotal)}</td>
                        </tr>` : "";

    container.innerHTML = `
            <div class="calculation-card">
                <h3>Шаблонные роботы</h3>
                <table class="calculation-table">
                    <tbody>${templateRows}${trafficRow}
                    </tbody>
                </table>
                <p class="calculation-note">дозвон 50%, диалог 30 сек; минут к оплате: ${formatNumber(requiredMinutes)}</p>
                <div class="calculation-total">
                    <span>Итого за первый месяц</span>
                    <span class="calculation-total-price">${formatNumber(templatesTotal + trafficTotal)}</span>
                </div>
            </div>
        `;
}

function updateAutoInformerCalculation() {
    const container = document.getElementById("autoInformerCalculationContent");
    if (!container) return;

    const contacts = parseInt(state.autoInformerContacts) || 0;
    if (contacts <= 0) {
        container.innerHTML = "";
        return;
    }

    const requiredMinutes = Math.ceil(contacts * CLASSIC_ROBOT_CALC.answerRate * CLASSIC_ROBOT_CALC.dialogMinutes);
    const baseTotal = calcClassicRobotMoney(requiredMinutes * AUTOINFORMER_CALC.minuteRate);

    const addons = [
        { enabled: state.autoInformerAsr, name: "Распознавание речи", rate: AUTOINFORMER_CALC.asrRate },
        { enabled: state.autoInformerTransfer, name: "Перевод на менеджера", rate: AUTOINFORMER_CALC.transferRate },
        { enabled: state.autoInformerRecording, name: "Запись звонка", rate: AUTOINFORMER_CALC.recordingRate }
    ].filter(addon => addon.enabled);

    const addonRows = addons.map(addon => `
                        <tr>
                            <td>${addon.name} (${formatNumber(requiredMinutes)} мин × ${formatRate(addon.rate)})</td>
                            <td class="calculation-price">${formatNumber(calcClassicRobotMoney(requiredMinutes * addon.rate))}</td>
                        </tr>`).join("");

    const total = baseTotal + addons.reduce((sum, addon) => sum + calcClassicRobotMoney(requiredMinutes * addon.rate), 0);

    container.innerHTML = `
            <div class="calculation-card">
                <h3>Автоинформатор</h3>
                <table class="calculation-table">
                    <tbody>
                        <tr>
                            <td>Обзвон роботом (${formatNumber(requiredMinutes)} мин × ${formatRate(AUTOINFORMER_CALC.minuteRate)})</td>
                            <td class="calculation-price">${formatNumber(baseTotal)}</td>
                        </tr>${addonRows}
                    </tbody>
                </table>
                <p class="calculation-note">дозвон 50%, диалог 30 сек; минут к оплате: ${formatNumber(requiredMinutes)}</p>
                <div class="calculation-total">
                    <span>Итого за первый месяц</span>
                    <span class="calculation-total-price">${formatNumber(total)}</span>
                </div>
            </div>
        `;
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
    const hybridRobotCalculationSection = document.getElementById("hybridRobotCalculationPreviewSection");
    const hybridRobotSection = document.getElementById("hybridRobotPreviewSection");
    const humanVoiceCalculationSection = document.getElementById("humanVoiceCalculationPreviewSection");
    const humanVoiceSection = document.getElementById("humanVoicePreviewSection");
    const templateRobotsSection = document.getElementById("templateRobotsPreviewSection");
    const autoInformerSection = document.getElementById("autoInformerPreviewSection");
    const aiTrainerSection = document.getElementById("aiTrainerPreviewSection");
    const managerSection = document.getElementById("managerSection");
    const onboardingSection = document.getElementById("onboardingSection");
    const partnersSection = document.getElementById("partnersSection");
    const header = document.querySelector(".proposal-header");
    const hasClassicRobotCalculation = state.showClassicRobot && CLASSIC_ROBOT_SCENARIOS.some(scenario => (parseInt(state[scenario.contactsState]) || 0) > 0);
    const hasAiRobotCalculation = state.showAiRobot && AI_ROBOT_SCENARIOS.some(scenario => (parseInt(state[scenario.contactsState]) || 0) > 0);
    const hasHybridRobotCalculation = state.showHybridRobot && HYBRID_ROBOT_SCENARIOS.some(scenario => (parseInt(state[scenario.contactsState]) || 0) > 0);
    const hasHumanVoiceCalculation = state.showHumanVoice && HUMAN_VOICE_SCENARIOS.some(scenario => (parseInt(state[scenario.contactsState]) || 0) > 0);
    const hasTemplateRobotsCalculation = state.showTemplateRobots && (state.templateRobotsSelected.length > 0 || (parseInt(state.templateRobotContacts) || 0) > 0);
    const hasAutoInformerCalculation = state.showAutoInformer && (parseInt(state.autoInformerContacts) || 0) > 0;

    if (isDiscovery) {
        if (problemSection) problemSection.style.display = "none";
        if (specialOfferSection) specialOfferSection.style.display = "none";
        if (calcSection) calcSection.style.display = "none";
        if (bonusesSection) bonusesSection.style.display = "none";
        if (onboardingSection) onboardingSection.style.display = "none";
        if (partnersSection) partnersSection.style.display = "none";
        if (aboutSection) aboutSection.style.display = "none";
        if (twoColumns) twoColumns.style.display = "none";
        if (discoverySection) discoverySection.style.display = state.showDiscoveryTariffs ? "block" : "none";
        if (calculationSection) calculationSection.style.display = hasClassicRobotCalculation ? "block" : "none";
        if (hasClassicRobotCalculation) updateClassicRobotCalculation();
        if (classicRobotSection) classicRobotSection.style.display = state.showClassicRobot ? "block" : "none";
        if (aiRobotSection) aiRobotSection.style.display = state.showAiRobot ? "block" : "none";
        if (aiRobotCalculationSection) aiRobotCalculationSection.style.display = hasAiRobotCalculation ? "block" : "none";
        if (hasAiRobotCalculation) updateAiRobotCalculation();
        if (hybridRobotSection) hybridRobotSection.style.display = state.showHybridRobot ? "block" : "none";
        if (hybridRobotCalculationSection) hybridRobotCalculationSection.style.display = hasHybridRobotCalculation ? "block" : "none";
        if (hasHybridRobotCalculation) updateHybridRobotCalculation();
        if (humanVoiceSection) humanVoiceSection.style.display = state.showHumanVoice ? "block" : "none";
        if (humanVoiceCalculationSection) humanVoiceCalculationSection.style.display = hasHumanVoiceCalculation ? "block" : "none";
        if (hasHumanVoiceCalculation) updateHumanVoiceCalculation();
        if (templateRobotsSection) templateRobotsSection.style.display = hasTemplateRobotsCalculation ? "block" : "none";
        if (hasTemplateRobotsCalculation) updateTemplateRobotsCalculation();
        if (autoInformerSection) autoInformerSection.style.display = hasAutoInformerCalculation ? "block" : "none";
        if (hasAutoInformerCalculation) updateAutoInformerCalculation();
        if (aiTrainerSection) aiTrainerSection.style.display = state.aiTrainerEnabled ? "block" : "none";
    } else {
        if (problemSection) problemSection.style.display = state.clientProblemId ? "block" : "none";
        if (specialOfferSection) specialOfferSection.style.display = state.selectedSpecialOffer ? "block" : "none";
        if (calcSection) calcSection.style.display = "block";
        if (bonusesSection) bonusesSection.style.display = state.selectedBonuses.length > 0 ? "block" : "none";
        if (onboardingSection) onboardingSection.style.display = state.registrationStatus ? "block" : "none";
        if (partnersSection) partnersSection.style.display = state.partnersNeeded === "yes" ? "block" : "none";
        if (aboutSection) aboutSection.style.display = "block";
        if (twoColumns) twoColumns.style.display = "grid";
        if (discoverySection) discoverySection.style.display = "none";
        if (calculationSection) calculationSection.style.display = "none";
        if (classicRobotSection) classicRobotSection.style.display = "none";
        if (aiRobotSection) aiRobotSection.style.display = "none";
        if (aiRobotCalculationSection) aiRobotCalculationSection.style.display = "none";
        if (hybridRobotCalculationSection) hybridRobotCalculationSection.style.display = "none";
        if (hybridRobotSection) hybridRobotSection.style.display = "none";
        if (humanVoiceCalculationSection) humanVoiceCalculationSection.style.display = "none";
        if (humanVoiceSection) humanVoiceSection.style.display = "none";
        if (templateRobotsSection) templateRobotsSection.style.display = "none";
        if (autoInformerSection) autoInformerSection.style.display = "none";
        if (aiTrainerSection) aiTrainerSection.style.display = "none";
    }

    if (managerSection) managerSection.style.display = "";
    if (header) header.style.display = "";

    updateManagerBlock();
}

function syncDiscoveryClientFields() {
    const discoveryManagerSelect = document.getElementById("discoveryManagerSelect");
    if (discoveryManagerSelect) discoveryManagerSelect.value = state.discoveryManagerId;

    const discoveryClientName = document.getElementById("discoveryClientName");
    if (discoveryClientName) discoveryClientName.value = state.clientName;

    const discoveryProposalDate = document.getElementById("discoveryProposalDate");
    if (discoveryProposalDate) discoveryProposalDate.value = state.date;

    const discoveryValidUntilDate = document.getElementById("discoveryValidUntilDate");
    if (discoveryValidUntilDate) discoveryValidUntilDate.value = state.validUntil;

    const discoveryTariffsToggle = document.getElementById("discoveryTariffsToggle");
    if (discoveryTariffsToggle) discoveryTariffsToggle.checked = state.showDiscoveryTariffs;

    const classicRobotContacts = document.getElementById("classicRobotContacts");
    if (classicRobotContacts) classicRobotContacts.value = state.classicRobotContacts;

    const classicRobotContactsMaxOmni = document.getElementById("classicRobotContactsMaxOmni");
    if (classicRobotContactsMaxOmni) classicRobotContactsMaxOmni.value = state.classicRobotContactsMaxOmni;

    const classicRobotContactsExtended = document.getElementById("classicRobotContactsExtended");
    if (classicRobotContactsExtended) classicRobotContactsExtended.value = state.classicRobotContactsExtended;

    const classicRobotAssembly = document.getElementById("classicRobotAssembly");
    if (classicRobotAssembly) classicRobotAssembly.value = state.classicRobotAssembly;

    const classicRobotAssemblyMaxOmni = document.getElementById("classicRobotAssemblyMaxOmni");
    if (classicRobotAssemblyMaxOmni) classicRobotAssemblyMaxOmni.value = state.classicRobotAssemblyMaxOmni;

    const classicRobotAssemblyExtended = document.getElementById("classicRobotAssemblyExtended");
    if (classicRobotAssemblyExtended) classicRobotAssemblyExtended.value = state.classicRobotAssemblyExtended;

    const classicRobotToggle = document.getElementById("classicRobotToggle");
    if (classicRobotToggle) classicRobotToggle.checked = state.showClassicRobot;

    const classicRobotCalculations = document.getElementById("classicRobotCalculations");
    if (classicRobotCalculations) classicRobotCalculations.style.display = state.showClassicRobot ? "block" : "none";

    const aiRobotToggle = document.getElementById("aiRobotToggle");
    if (aiRobotToggle) aiRobotToggle.checked = state.showAiRobot;

    const aiRobotCalculations = document.getElementById("aiRobotCalculations");
    if (aiRobotCalculations) aiRobotCalculations.style.display = state.showAiRobot ? "block" : "none";

    AI_ROBOT_SCENARIOS.forEach(scenario => {
        const contactsInput = document.getElementById(scenario.contactsState);
        if (contactsInput) contactsInput.value = state[scenario.contactsState];

        const assemblyInput = document.getElementById(scenario.assemblyState);
        if (assemblyInput) assemblyInput.value = state[scenario.assemblyState];
    });

    const hybridRobotToggle = document.getElementById("hybridRobotToggle");
    if (hybridRobotToggle) hybridRobotToggle.checked = state.showHybridRobot;

    const hybridRobotCalculations = document.getElementById("hybridRobotCalculations");
    if (hybridRobotCalculations) hybridRobotCalculations.style.display = state.showHybridRobot ? "block" : "none";

    HYBRID_ROBOT_SCENARIOS.forEach(scenario => {
        const contactsInput = document.getElementById(scenario.contactsState);
        if (contactsInput) contactsInput.value = state[scenario.contactsState];

        const assemblyInput = document.getElementById(scenario.assemblyState);
        if (assemblyInput) assemblyInput.value = state[scenario.assemblyState];
    });

    const humanVoiceToggle = document.getElementById("humanVoiceToggle");
    if (humanVoiceToggle) humanVoiceToggle.checked = state.showHumanVoice;

    const humanVoiceCalculations = document.getElementById("humanVoiceCalculations");
    if (humanVoiceCalculations) humanVoiceCalculations.style.display = state.showHumanVoice ? "block" : "none";

    HUMAN_VOICE_SCENARIOS.forEach(scenario => {
        const contactsInput = document.getElementById(scenario.contactsState);
        if (contactsInput) contactsInput.value = state[scenario.contactsState];

        const assemblyInput = document.getElementById(scenario.assemblyState);
        if (assemblyInput) assemblyInput.value = state[scenario.assemblyState];
    });

    const templateRobotsToggle = document.getElementById("templateRobotsToggle");
    if (templateRobotsToggle) templateRobotsToggle.checked = state.showTemplateRobots;

    const templateRobotsOptions = document.getElementById("templateRobotsOptions");
    if (templateRobotsOptions) templateRobotsOptions.style.display = state.showTemplateRobots ? "block" : "none";

    document.querySelectorAll(".template-robot-checkbox").forEach(checkbox => {
        checkbox.checked = state.templateRobotsSelected.includes(checkbox.value);
    });

    const templateRobotContacts = document.getElementById("templateRobotContacts");
    if (templateRobotContacts) templateRobotContacts.value = state.templateRobotContacts;

    const templateRobotTelephony = document.getElementById("templateRobotTelephony");
    if (templateRobotTelephony) templateRobotTelephony.value = state.templateRobotTelephony;

    const autoInformerToggle = document.getElementById("autoInformerToggle");
    if (autoInformerToggle) autoInformerToggle.checked = state.showAutoInformer;

    const autoInformerOptions = document.getElementById("autoInformerOptions");
    if (autoInformerOptions) autoInformerOptions.style.display = state.showAutoInformer ? "block" : "none";

    const autoInformerContacts = document.getElementById("autoInformerContacts");
    if (autoInformerContacts) autoInformerContacts.value = state.autoInformerContacts;

    const autoInformerAsr = document.getElementById("autoInformerAsr");
    if (autoInformerAsr) autoInformerAsr.checked = state.autoInformerAsr;

    const autoInformerTransfer = document.getElementById("autoInformerTransfer");
    if (autoInformerTransfer) autoInformerTransfer.checked = state.autoInformerTransfer;

    const autoInformerRecording = document.getElementById("autoInformerRecording");
    if (autoInformerRecording) autoInformerRecording.checked = state.autoInformerRecording;

    const aiTrainerToggle = document.getElementById("aiTrainerToggle");
    if (aiTrainerToggle) aiTrainerToggle.checked = state.aiTrainerEnabled;

    const aiTrainerOptions = document.getElementById("aiTrainerOptions");
    if (aiTrainerOptions) aiTrainerOptions.style.display = state.aiTrainerEnabled ? "block" : "none";

    const aiTrainerTariff = document.getElementById("aiTrainerTariff");
    if (aiTrainerTariff) aiTrainerTariff.value = state.aiTrainerTariff;

    const aiTrainerPeriod = document.getElementById("aiTrainerPeriod");
    if (aiTrainerPeriod) aiTrainerPeriod.value = state.aiTrainerPeriod;
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
            ${(manager.phone ? manager.phone.split(",").map(p => p.trim()).filter(p => p) : shared.phones).map(phone => `<span class="manager-contact-text">${getIcon("phone")}${phone}</span>`).join("")}
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

    document.getElementById("previewLicenseCaption").textContent = `Тариф «${tariffName}» для ${operators} ${declineWord(operators, "пользователя", "пользователей", "пользователей")}`;

    const periods = ["daily", "3", "6", "12"];
    const cardTotalIds = ["cardDailyTotal", "card3mTotal", "card6mTotal", "card12mTotal"];
    const cardPerUserIds = ["cardDailyPerUser", "card3mPerUser", "card6mPerUser", "card12mPerUser"];
    const cardPaymentIds = ["cardDailyPayment", "card3mPayment", "card6mPayment", "card12mPayment"];
    const cardBenefitIds = ["cardDailyBenefit", "card3mBenefit", "card6mBenefit", "card12mBenefit"];

    const dailyPricePerPeriod = adminData.tariffs.operatorLicense[state.tariff].daily;
    const dailyPerLicenseMonthly = dailyPricePerPeriod * 30;
    const dailyTotalMonthly = operators * dailyPerLicenseMonthly;
    const easyStartSelected = state.tariff === "pro" && state.selectedSpecialOffer === EASY_START_OFFER_ID;

    periods.forEach((period, index) => {
        const pricePerPeriod = adminData.tariffs.operatorLicense[state.tariff][period];
        const isDailyPeriod = period === "daily";
        const months = isDailyPeriod ? 1 : parseInt(period);
        const perLicenseMonthly = isDailyPeriod ? pricePerPeriod * 30 : pricePerPeriod;
        const totalMonthly = operators * perLicenseMonthly;
        const paymentTotal = totalMonthly * months;
        const benefit = Math.max(0, (dailyTotalMonthly - totalMonthly) * months);

        const easyStartDaily = isDailyPeriod && easyStartSelected && perLicenseMonthly > EASY_START_DAILY_MONTHLY_PRICE;
        const displayPerLicenseMonthly = easyStartDaily ? EASY_START_DAILY_MONTHLY_PRICE : perLicenseMonthly;
        const displayTotalMonthly = operators * displayPerLicenseMonthly;
        const displayPaymentTotal = displayTotalMonthly * months;

        document.getElementById(cardTotalIds[index]).textContent = formatNumber(displayTotalMonthly) + " ₽/мес";
        document.getElementById(cardPerUserIds[index]).textContent = formatNumber(displayPerLicenseMonthly) + " ₽ за 1 пользователя";
        document.getElementById(cardPaymentIds[index]).textContent = formatNumber(displayPaymentTotal) + " ₽";
        document.getElementById(cardBenefitIds[index]).textContent = easyStartDaily
            ? ""
            : (isDailyPeriod ? "Базовая цена" : `Выгода ${formatNumber(benefit)} ₽`);
    });

    document.querySelectorAll(".license-card").forEach(card => {
        card.classList.remove("license-card-active");
        const badge = card.querySelector(".license-card-badge");
        if (badge) badge.textContent = "";
    });

    const activeCard = document.querySelector(`.license-card[data-period="${state.period}"]`);
    if (activeCard) {
        activeCard.classList.add("license-card-active");
        const activeBadge = activeCard.querySelector(".license-card-badge");
        if (activeBadge) activeBadge.textContent = "Ваш тариф";
    }

    const periodLabels = {
        "daily": "30 дней",
        "3": "3 месяца",
        "6": "6 месяцев",
        "12": "12 месяцев"
    };
    document.getElementById("previewPeriodLabel").textContent = periodLabels[state.period] || state.period;

    const periodHeaderLabels = {
        "daily": "за 30 дней",
        "3": "за 3 месяца",
        "6": "за 6 месяцев",
        "12": "за 12 месяцев"
    };
    const periodHeaderLabel = document.getElementById("periodPriceHeader");
    if (periodHeaderLabel) {
        periodHeaderLabel.textContent = periodHeaderLabels[state.period] || `за ${state.period}`;
        periodHeaderLabel.style.display = state.period === "daily" ? "none" : "";
    }

    const calcDetailsList = document.getElementById("calcDetailsList");
    calcDetailsList.innerHTML = "";

    if (state.proposalType !== "discovery") {
        if (state.telephonyType !== "none") {
            const minutes = parseInt(state.minutesCount) || 0;
            const rate = getTelephonyRate(state.telephonyType, minutes);
            const periodType = getTelephonyPeriodType(state.telephonyType);
            const telephonyName = getTelephonyName(state.telephonyType);

            calcDetailsList.innerHTML += `
                <div class="calc-detail-item">
                    <div>
                        <div class="calc-detail-name">${telephonyName}</div>
                        <div class="calc-detail-desc">${minutes.toLocaleString("ru-RU")} минут, ${rate} ₽/мин (${periodType})</div>
                    </div>
                    ${renderCalcDetailPrice(calc.telephonyMonthly, calc.periodMonths)}
                </div>
            `;

            if (calc.internodMavAttemptsCount > 0) {
                calcDetailsList.innerHTML += `
                    <div class="calc-detail-item">
                        <div>
                            <div class="calc-detail-name">МАВ и этикетка</div>
                            <div class="calc-detail-desc">${calc.internodMavAttemptsCount.toLocaleString("ru-RU")} инициаций вызова, 0.70 коп/шт</div>
                        </div>
                        ${renderCalcDetailPrice(calc.internodMavMonthly, calc.periodMonths)}
                    </div>
                `;
            }

            if (state.telephonyType === "internod" && state.internodCarousel) {
                calcDetailsList.innerHTML += `
                    <div class="calc-detail-item">
                        <div>
                            <div class="calc-detail-name">Карусель номеров</div>
                            <div class="calc-detail-desc">Автоматическая смена номеров при исходящем обзвоне</div>
                        </div>
                        ${renderCalcDetailPrice(calc.internodCarouselMonthly, calc.periodMonths)}
                    </div>
                `;
            }

            if (state.telephonyType === "internod" && state.internodNumbers) {
                const numbersCount = parseInt(state.internodNumbersCount) || 1;
                const title = numbersCount === 1 ? "Телефонный номер" : "Телефонные номера";
                const numbersWord = declineWord(numbersCount, "номер", "номера", "номеров");
                calcDetailsList.innerHTML += `
                    <div class="calc-detail-item">
                        <div>
                            <div class="calc-detail-name">${title}</div>
                            <div class="calc-detail-desc">${numbersCount} ${numbersWord}, прием входящих бесплатно</div>
                        </div>
                        ${renderCalcDetailPrice(calc.internodNumbersMonthly, calc.periodMonths)}
                    </div>
                `;
            }
        }

        if (state.incomingAtcType === "incoming_atc") {
            calcDetailsList.innerHTML += `
                <div class="calc-detail-item">
                    <div>
                        <div class="calc-detail-name">Входящая линия АТС</div>
                        <div class="calc-detail-desc">Подключение + ежемесячная плата</div>
                    </div>
                    ${renderDualPrice(calc.incomingAtcMonthly, calc.incomingAtcFixedPrice, calc.periodMonths)}
                </div>
            `;
        }

        if (state.incomingNumbers > 0) {
            const monthly = calc.incomingSetup + calc.incomingMonthly;
            const periodTotal = calc.incomingSetup + calc.incomingMonthly * calc.periodMonths;
            calcDetailsList.innerHTML += `
                <div class="calc-detail-item">
                    <div>
                        <div class="calc-detail-name">Входящие номера</div>
                        <div class="calc-detail-desc">${state.incomingNumbers} ${declineWord(state.incomingNumbers, "номер", "номера", "номеров")}, подключение + ежемесячная плата</div>
                    </div>
                    ${renderDualPrice(monthly, periodTotal, calc.periodMonths)}
                </div>
            `;
        }

        if (state.atcType !== "none") {
            const atc = adminData.tariffs.atc[state.atcType];
            calcDetailsList.innerHTML += `
                <div class="calc-detail-item">
                    <div>
                        <div class="calc-detail-name">Подключение АТС</div>
                        <div class="calc-detail-desc">${atc.name}, ${state.atcCount} ${declineWord(state.atcCount, "подключение", "подключения", "подключений")} (единоразово)</div>
                    </div>
                    ${renderCalcDetailPrice(calc.atcTotal, calc.periodMonths, true)}
                </div>
            `;
        }
    }

    state.selectedFeatures.forEach(featureId => {
        const feature = adminData.features.find(f => f.id === featureId);
        if (feature) {
            let monthlyPrice = 0;
            let isOneTime = false;
            let descText = feature.description;

            if (feature.price === null) {
                monthlyPrice = parseInt(state.featureQuantities[feature.id]) || 0;
            } else if (feature.period === "monthly_per_guest") {
                const qty = parseInt(state.featureQuantities[feature.id]) || 1;
                monthlyPrice = feature.price * qty;
                descText = `${qty} ${declineWord(qty, "гостевой доступ", "гостевых доступа", "гостевых доступов")}`;
            } else if (feature.period === "monthly_per_admin") {
                const qty = parseInt(state.featureQuantities[feature.id]) || 1;
                monthlyPrice = feature.price * qty;
                descText = `${qty} ${declineWord(qty, "администратор", "администратора", "администраторов")}`;
            } else if (feature.period === "dedicated") {
                monthlyPrice = parseInt(state.featureQuantities[feature.id]) || feature.price;
                isOneTime = true;
                const months = parseInt(state.featureQuantities[`${feature.id}-months`]) || feature.defaultMonths;
                descText = `за ${months} ${declineWord(months, "месяц", "месяца", "месяцев")}`;
            } else {
                monthlyPrice = feature.price;
            }

            calcDetailsList.innerHTML += `
                <div class="calc-detail-item">
                    <div>
                        <div class="calc-detail-name">${feature.name}</div>
                        <div class="calc-detail-desc">${descText}</div>
                    </div>
                    ${renderCalcDetailPrice(monthlyPrice, calc.periodMonths, isOneTime)}
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
                    ${renderCalcDetailPrice(option.price, calc.periodMonths, isOneTime)}
                </div>
            `;
        }
    });

    if (calcDetailsList.innerHTML === "") {
        calcDetailsList.innerHTML = `<div class="calc-detail-item"><div class="calc-detail-name">Дополнительные услуги не выбраны</div></div>`;
    }

    document.getElementById("previewCalcTotal").textContent = formatPrice(calc.periodTotal);

    const additionalTotal = calc.periodTotal - calc.licensePeriod;
    document.getElementById("summaryTariffName").textContent = tariffName;
    document.getElementById("summaryLicenseTotal").textContent = formatPrice(calc.licensePeriod);
    document.getElementById("summaryAdditionalTotal").textContent = formatPrice(additionalTotal);
    document.getElementById("summaryAdditionalRow").style.display = additionalTotal > 0 ? "" : "none";

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

function buildProposalLogEvent() {
    const totals = calculate();
    const periodMonths = totals.periodMonths;
    const productTotal = totals.licensePeriod + (totals.moduleMonthly + totals.incomingMonthly) * periodMonths + totals.incomingSetup;
    const extrasTotal = totals.periodTotal - productTotal;

    const manager = getManager(state.managerId) || getManager(state.discoveryManagerId);

    return {
        id: "p-" + Date.now(),
        date: new Date().toISOString(),
        managerId: manager ? String(manager.id) : "",
        managerName: manager ? manager.name : "Не указан",
        company: (state.clientName || "").trim(),
        proposalType: state.proposalType,
        productTotal: Math.round(productTotal),
        extrasTotal: Math.round(extrasTotal),
        total: Math.round(totals.periodTotal)
    };
}

async function logProposalEvent() {
    const token = localStorage.getItem("proposalBuilder_githubToken");
    if (!token) return;

    try {
        let proposals = [];
        const existing = await dsReadFile(DATA_FILES.proposals, token);
        if (existing) {
            try {
                proposals = JSON.parse(existing.text);
                if (!Array.isArray(proposals)) proposals = [];
            } catch (e) {
                proposals = [];
            }
        }

        proposals.push(buildProposalLogEvent());
        await dsWriteJson(DATA_FILES.proposals, proposals, token, "log proposal from builder");
    } catch (e) {
        console.warn("Proposal logging failed:", e);
    }
}

async function downloadPdf() {
    const btn = document.getElementById("downloadPdf");
    const originalText = btn.textContent;
    btn.textContent = "Генерация PDF...";
    btn.disabled = true;

    try {
        const source = document.getElementById("proposalPreview");
        const container = document.getElementById("pdfExportContainer");
        container.innerHTML = "";

        const clone = source.cloneNode(true);
        clone.style.width = "210mm";
        clone.style.minHeight = "auto";
        clone.style.height = "auto";
        clone.style.boxShadow = "none";
        clone.style.position = "relative";
        clone.style.left = "0";
        clone.style.top = "0";
        clone.style.transform = "none";
        container.appendChild(clone);

        await document.fonts.ready;

        const cloneRect = clone.getBoundingClientRect();
        const links = [];
        clone.querySelectorAll("a[href]").forEach(link => {
            const href = link.getAttribute("href");
            if (!href || href === "#") return;
            const rect = link.getBoundingClientRect();
            links.push({
                url: href,
                left: rect.left - cloneRect.left,
                top: rect.top - cloneRect.top,
                width: rect.width,
                height: rect.height
            });
        });

        const canvas = await html2canvas(clone, {
            scale: 4,
            useCORS: true,
            allowTaint: true,
            backgroundColor: "#FFFFFF",
            logging: false,
            windowWidth: clone.scrollWidth,
            windowHeight: clone.scrollHeight
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.95);
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        const pxPerMm = clone.scrollWidth / 210;
        const pdfWidth = 210;
        const pdfHeight = clone.scrollHeight / pxPerMm;

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: [pdfWidth, pdfHeight]
        });

        pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);

        links.forEach(link => {
            pdf.link(link.left / pxPerMm, link.top / pxPerMm, link.width / pxPerMm, link.height / pxPerMm, { url: link.url });
        });

        const clientName = document.getElementById("clientName")?.value?.trim() || "Клиент";
        const safeName = clientName.replace(/[^a-zA-Z0-9а-яА-Я\-_]/g, "_").substring(0, 60);
        pdf.save(`КП для ${safeName} | Скорозвон.pdf`);
        logProposalEvent();
    } catch (err) {
        console.error("PDF generation failed:", err);
        alert("Не удалось сгенерировать PDF. Попробуйте через Печать / PDF.");
    } finally {
        btn.textContent = originalText;
        btn.disabled = false;
    }
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

function updateStartAmount() {
    const card = document.getElementById("startAmountCard");
    const valueEl = document.getElementById("startAmountValue");
    const descEl = document.getElementById("startAmountDesc");
    if (!card || !valueEl) return;
    const amount = parseInt(state.startAmount) || 0;
    if (descEl) descEl.textContent = state.startAmountDesc || "";
    if (amount > 0) {
        card.style.display = "";
        valueEl.textContent = formatPrice(amount);
    } else {
        card.style.display = "none";
    }
}

function updateUI() {
    updateDate();
    updateClientPreview();
    updateStartAmount();
    updateManagerBlock();
    updateProblem();
    updateSpecialOffer();
    updateBonuses();
    updateOnboarding();
    updatePartners();
    updateAiTrainer();
    updateCalculations();
    updatePreviewForTab();
    syncDiscoveryClientFields();
    fitHeaderTitle();
}

window.addEventListener("DOMContentLoaded", init);
