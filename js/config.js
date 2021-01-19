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
    ti: {
        order: 2,
        title: 'Второй',
        submenu: [
            {
                order: 1,
                title: 'Первый',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'Второй',
                url: 'gsm_equipment.html',
            },
        ],
    },
    pa: {
        order: 3,
        title: 'Третий',
        url: 'payment_delivery.html',
    },
    razniye: {
        order: 1,
        title: 'Первый',
        submenu: [
            {
                order: 1,
                title: 'Первый',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'Второй',
                url: 'gsm_equipment.html',
            },
        ],
    },
    punkti: {
        order: 9,
        title: 'Шестой',
        submenu: [
            {
                order: 2,
                title: 'Второй',
                url: 'gsm_equipment.html',
            },
            {
                order: 1,
                title: 'Первый',
                url: 'voip_equipment.html',
            },
        ],
    },
    menu: {
        order: 10,
        title: 'Седьмой',
        submenu: [
            {
                order: 1,
                title: 'Первый',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'Второй',
                url: 'gsm_equipment.html',
            },
        ],
    },
    kruto: {
        order: 2,
        title: 'Битый',
    },
    da: {
        title: 'Битый',
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
    boje: {
        order: 11,
        title: 'Восьмой',
        submenu: [
            {
                order: 2,
                title: 'Второй',
                url: 'voip_equipment.html',
            },
            {
                order: 3,
                title: 'Третий',
                url: 'voip_equipment.html',
            },
            {
                order: 1,
                title: 'Первый',
                url: 'voip_equipment.html',
            },
            {
                title: 'Битый',
                url: 'gsm_equipment.html',
            },
        ],
    },
    kak: {
        title: 'Битый',
        submenu: [
            {
                order: 1,
                title: 'Первый',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'Второй',
                url: 'gsm_equipment.html',
            },
        ],
    },
    mnogo: {
        order: 3,
        title: 'Битый',
    },
    nado: {
        order: 4,
        title: 'Четвертый',
        url: 'payment_delivery.html',
    },
    pridumivat: {
        order: 5,
        title: 'Пятый',
        url: 'payment_delivery.html',
    },
};

const MENU = [
    {
        order: 1,
        title: 'Битый',
    },
    {
        order: 2,
        title: 'Первый',
        url: 'skype_equipment.html',
    },
    {
        order: 3,
        title: 'Второй',
        url: 'gsm_equipment.html',
    },
    {
        order: 4,
        title: 'Трейтий',
        url: 'video_equipment.html',
    },
    {
        order: 5,
        title: 'Четвертый',
        url: 'video_equipment.html',
    },
    {
        order: 7,
        title: 'Шестой',
        url: 'video_equipment.html',
    },
    {
        title: 'Битый',
        url: 'video_equipment.html',
    },
    {
        order: 8,
        title: 'Седьмой',
        url: 'video_equipment.html',
    },
    {
        order: 9,
        title: 'Восьмой',
        url: 'video_equipment.html',
    },
    {
        order: 10,
        title: 'Девятый',
        url: 'video_equipment.html',
    },
    {
        order: 11,
        title: 'Десятый',
        url: 'video_equipment.html',
    },
    {
        order: 17,
        title: 'Пятнадцатый',
        url: 'video_equipment.html',
    },
    {
        order: 14,
        title: 'Тринадцатый',
        url: 'video_equipment.html',
    },
    {
        order: 6,
        title: 'Пятый',
        url: 'video_equipment.html',
    },
    {
        order: 15,
        title: 'Четырнадцатый',
        url: 'video_equipment.html',
    },
    {
        order: 16,
        url: 'video_equipment.html',
    },
    {
        order: 12,
        title: 'Одиннадцатый',
        url: 'video_equipment.html',
    },
    {
        order: 13,
        title: 'ДВенадцатй',
        url: 'video_equipment.html',
    },
];

const NEWS = [
    {
        date: '2021/01/01',
        title: 'Битый',
        description: 'Предприятие «Элтекс» запустило производство точки доступа WEP-2ac.',
    },
    {
        date: '2020/12/25',
        title: 'Рандом 4',
        description: 'Скоро в продаже мощный маршрутизатор GWN7000!',
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html',
    },
    {
        date: '2021/10/14',
        title: 'Рандом 3',
        description: 'Уже скоро в продаже!',
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html',
    },
    {
        title: 'Битый',
        description: 'Уже скоро в продаже!',
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html',
    },
    {
        date: '2021/01/14',
        title: 'Рандом 1',
        description: 'Уже скоро в продаже!',
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html',
    },
    {
        date: '2021/04/14',
        title: 'Рандом 2',
        description: 'Уже скоро в продаже!',
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html',
    },
];


// Must be four
const BANNER = [
    {
        order: 2,
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html',
    },
    {
        order: 1,
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html',
    },
    {
        order: 3,
        img: 'https://same_url.jpg',
    },
    {
        order: 5,
        url: 'voip_equipment.html',
    },
    {
        order: 4,
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html',
    },
    {
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html',
    },
];

// type ['new', 'recommended', 'sale']
const ITEMS = [
    {
        type: 'new',
        description: 'Первый',
        img: 'https://same_url.jpg',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2021/01/10',
        url: 'new_items/item1.html',
    },
    {
        type: 'new',
        description: 'Битый',
        img: 'https://same_url.jpg',
        price: '1000',
        oldPrice: '1100',
        date: '2021/01/01',
        url: 'new_items/item1.html',
    },
    {
        type: 'new',
        description: 'Второй',
        img: 'https://same_url.jpg',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2021/01/01',
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
        description: 'Битый',
        img: 'https://same_url.jpg',
        price: '1100',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
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
        description: 'Битый',
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
        description: 'Недоступен',
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
        description: 'Недоступен',
        img: 'https://same_url.jpg',
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
        title: 'Битый',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'https://same_url.jpg',
        url: 'https://same_url/item.html',
        time_action: '1d 2h m',
    },
    {
        title: 'Название акции 2',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'https://same_url.jpg',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Битый',
        img: 'https://same_url.jpg',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название акции 3',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'https://same_url.jpg',
        url: 'https://same_url/item.html',
        time_action: '1d 2h 20m',
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
        title: 'Битый',
        img: 'https://same_url.jpg',
    },
    {
        title: 'Название товара 3',
        img: 'https://same_url.jpg',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара 5',
        img: 'https://same_url.jpg',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара 4',
        url: 'https://same_url/item.html',
    },
];
