const convertCurrency = (price,  currency) => {
        return (price * CURRENCY_EXCHANGE[currency]).toFixed(1);
};

const transformTopMenu = (topMenu) => {
    let menu = [];

    for (let element in topMenu) {
        if (validateObject(topMenu[element], importantTopMenuProperties)) {
            if (topMenu[element].hasOwnProperty('submenu')) {
                topMenu[element]['submenu'].sort((a, b) => a.order - b.order);
                menu.push(topMenu[element]);
            } else if (topMenu[element].hasOwnProperty('url') && isString(topMenu[element]['url'])) {
                menu.push(topMenu[element]);
            }
        }
    }

    return menu.sort((a, b) => a.order - b.order).slice(0, 9);
};

const transformItems = (items) => {
    let correctItems = selectValidElements(items, importantItemProperties, minorItemProperties);

    correctItems.forEach((item) => {
        if (item.currency !== CURRENCY) {
            item.price = convertCurrency(item.price, item.currency);
            item.oldPrice = convertCurrency(item.oldPrice, item.currency);
            item.currency = CURRENCY;
        }
    });

    return [
        correctItems.filter(item => item.type === 'new').sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 10),
        correctItems.filter(item => item.type === 'recommended').sort((a, b) => a.price - b.price).slice(0, 10),
        correctItems.filter(item => item.type === 'sale').sort((a, b) => b.oldPrice - b.price - (a.oldPrice - a.price)).slice(0, 10),
    ];
};

const transformButtomMenu = (buttomMenu) => {
    let correctElements = selectValidElements(buttomMenu, importantButtomMenuProperties);

    return correctElements.sort((a, b) => a.order - b.order);
};

const transformNews = (news) => {
    let correctElements = selectValidElements(news, importantNewsProperties, minorNewsProperties);

    if (correctElements.length < 3) return [];

    return correctElements.sort(() => Math.random() - 0.5).slice(0, 3);
};

const transformBanner = (banner) => {
    let correctElements = selectValidElements(banner, importantBannerProperties, minorBannerProperties);

    return correctElements.sort((a, b) => a.order - b.order).slice(0, 6);
};

const transformPromotions = (promotions) => {
    let correctElements = selectValidElements(promotions.filter(prom => timeRegExp.test(prom.time_action) || prom.time_action == undefined), 
        importantPromotionProperties, 
        minorPromotionProperties
    );

    return correctElements.sort((a, b) => a.order - b.order).slice(0, 10);
};

const transformBuyingItems = (items) => {
    let correctElements = selectValidElements(items, importantBuyingItemProperties, minorItemProperties);

    if (correctElements.length < 2) return [];

    return correctElements.sort(() => Math.random() - 0.5).slice(0, 4);
};
