const CURRENCY = 'UAH';

const CURRENCY_EXCHANGE = {
    USD: 27.96,
    RUB: 0.38,
};

const BASKET = {
    elements: 4,
    price: 4000,
};

const TOP_MENU = {
    catalog: {
        order: 1,
        title: 'Каталог',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            },
        ],
    },
    about_company: {
        order: 2,
        title: 'О компании',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            },
        ],
    },
    payment_delivery: {
        order: 3,
        title: 'Payment and delivery',
        url: 'payment_delivery.html',
    },
    catalog: {
        order: 1,
        title: 'Каталог',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            },
        ],
    },
    catalo: {
        order: 9,
        title: 'Каталог',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            },
        ],
    },
    catal: {
        order: 10,
        title: 'Каталог',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            },
        ],
    },
    about_company: {
        order: 2,
        title: 'О компании',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            },
        ],
    },
    about_compa: {
        order: 6,
        title: 'О компании',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            },
        ],
    },
    about_comp: {
        order: 7,
        title: 'О компании',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            },
        ],
    },
    about_com: {
        order: 8,
        title: 'О компании',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            },
        ],
    },
    payment_delivery: {
        order: 3,
        title: 'Payment and delivery',
        url: 'payment_delivery.html',
    },
    payment_sho: {
        order: 4,
        title: 'Payment and delivery',
        url: 'payment_delivery.html',
    },
    payment_hto: {
        order: 5,
        title: 'Payment and delivery',
        url: 'payment_delivery.html',
    },
};

const MENU = [
    {
        order: 1,
        title: 'VOIP ОБОРУДОВАНИЕ',
        url: 'voip_equipment.html',
    },
    {
        order: 2,
        title: 'SKYPE оборудование',
        url: 'skype_equipment.html',
    },
    {
        order: 3,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
];

const NEWS = [
    {
        date: '2021/01/01',
        title: 'Новинка от «Элтекс» - точка доступа WEP',
        description: 'Предприятие «Элтекс» запустило производство точки доступа WEP-2ac.',
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html',
    },
    {
        date: '2020/12/25',
        title: 'Новинка от компании Grandstream!',
        description: 'Скоро в продаже мощный маршрутизатор GWN7000!',
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html',
    },
    {
        date: '2021/01/14',
        title: 'WiFi точка доступа от компании Grandstream!',
        description: 'Уже скоро в продаже!',
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html',
    },
];

const BANNER = [
    {
        order: 1,
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html',
    },
    {
        order: 1,
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html',
    },
    {
        order: 1,
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html',
    },
    {
        order: 1,
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html',
    },
];

// type ['new', 'recommended', 'sale']
const ITEMS = [
    {
        type: 'new',
        description: 'Пятый',
        img: 'https://same_url.jpg',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2021/01/10',
        url: 'new_items/item1.html',
    },
    {
        type: 'new',
        description: 'Шестой',
        img: 'https://same_url.jpg',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2021/01/01',
        url: 'new_items/item1.html',
    },
    {
        type: 'new',
        description: 'Четвертый',
        img: 'https://same_url.jpg',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2021/01/20',
        url: 'new_items/item1.html',
    },
    {
        type: 'new',
        description: 'Третий',
        img: 'https://same_url.jpg',
        price: '1000',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2021/01/30',
        url: 'new_items/item1.html',
    },
    {
        type: 'new',
        description: 'Второй',
        img: 'https://same_url.jpg',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2021/02/30',
        url: 'new_items/item1.html',
    },
    {
        type: 'new',
        description: 'Первый',
        img: 'https://same_url.jpg',
        price: '1000',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2021/03/10',
        url: 'new_items/item1.html',
    },
    {
        type: 'recommended',
        description: 'Первый',
        img: 'https://same_url.jpg',
        price: '300',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html',
    },
    {
        type: 'recommended',
        description: 'Второй',
        img: 'https://same_url.jpg',
        price: '400',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html',
    },
    {
        type: 'recommended',
        description: 'Третий',
        img: 'https://same_url.jpg',
        price: '500',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html',
    },
    {
        type: 'recommended',
        description: 'Шестой',
        img: 'https://same_url.jpg',
        price: '800',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html',
    },
    {
        type: 'recommended',
        description: 'Восьмой',
        img: 'https://same_url.jpg',
        price: '1100',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html',
    },
    {
        type: 'recommended',
        description: 'Четвертый',
        img: 'https://same_url.jpg',
        price: '600',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html',
    },
    {
        type: 'recommended',
        description: 'Пятый',
        img: 'https://same_url.jpg',
        price: '700',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html',
    },
    {
        type: 'recommended',
        description: 'Девятый',
        img: 'https://same_url.jpg',
        price: '1100',
        oldPrice: '1200',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html',
    },
    {
        type: 'recommended',
        description: 'Седьмой',
        img: 'https://same_url.jpg',
        price: '900',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html',
    },
    {
        type: 'sale',
        description: 'Второй',
        img: 'https://same_url.jpg',
        price: '100',
        oldPrice: '900',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html',
    },
    {
        type: 'sale',
        description: 'Четверый',
        img: 'https://same_url.jpg',
        price: '100',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html',
    },
    {
        type: 'sale',
        description: 'Первый',
        img: 'https://same_url.jpg',
        price: '100',
        oldPrice: '1000',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html',
    },
    {
        type: 'sale',
        description: 'Третий',
        img: 'https://same_url.jpg',
        price: '100',
        oldPrice: '800',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html',
    },
];

// time_action format: "d" - day, "h" - hour, "m" - minute. if doesn't exist = infinity
const PROMOTIONS = [
    {
        title: 'Название акции',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'https://same_url.jpg',
        url: 'https://same_url/item.html',
        time_action: '1d 2h 20m',
    },
    {
        title: 'Название акции 2',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'https://same_url.jpg',
        url: 'https://same_url/item.html',
        time_action: '1d 2h 20m',
    },
    {
        title: 'Название акции 2',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'https://same_url.jpg',
        url: 'https://same_url/item.html',
    },
];

const BUYING_RIGHT_NOW = [
    {
        title: 'Название товара',
        img: 'https://same_url.jpg',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара 2',
        img: 'https://same_url.jpg',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара 2',
        img: 'https://same_url.jpg',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара 2',
        img: 'https://same_url.jpg',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара 2',
        img: 'https://same_url.jpg',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара 2',
        img: 'https://same_url.jpg',
        url: 'https://same_url/item.html',
    },
];
