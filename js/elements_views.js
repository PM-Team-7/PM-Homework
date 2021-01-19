const buildTopMenuView = (topMenu) => {
    let menu = `<nav class="nav">
                    <div class="nav__nav-body_wide max-width">`;

    const buildLinkList = (links) => {
        let list = '';

        for (let i = 0; i < links.length; i++) {
            list += `<a href="${links[i].url}">${links[i].title}</a>`;
        }

        return list;
    };

    for (let i = 0; i < topMenu.length; i++) {
        if (topMenu[i].submenu) {
            menu += `<div class="nav__dropdown dropdown">
                        <a class="nav__link">
                            ${topMenu[i].title}
                            <img class="arrow-down" src="resources/icon/arrow-down.svg" alt="arrow-down">
                        </a>

                        <div class="dropdown__content">
                            ${buildLinkList(topMenu[i].submenu)}
                        </div>
                    </div>`;
        } else {
            menu += `<a class="nav__link" href="${topMenu[i].url}">${topMenu[i].title}</a>`;
        }

        if (i != topMenu.length - 1) menu += '<div class="nav__vertical-line"></div>';
    }

    return menu + `</div>
                <div class="nav__nav-body_shrink">
                    <a class="nav__link" href=""><img class="menu-icon" src="resources/icon/menu.svg" alt="menu">Меню</a>
                </div>
            </nav>`;
};

const buildBottomMenuView = (bottomMenu) => {
    const buildTitleList = (elements) => {
        let list = '';

        for (let i = 0; i < elements.length; i++) {
            list += `<li><a href="${elements[i].url}">${elements[i].title}</a></li>`;
        }

        return list;
    };

    return `<div id="block-bottom-menu" class="hide-before-1140">
                <img class="arrow-left" src="resources/icon/white-arrow-right.svg" alt="arrow-left" data-slide="prev">
                <ul class="catalog-navigation hide-before-1140-flex" data-slide="container">
                    ${buildTitleList(bottomMenu)}
                </ul>
                <img class="arrow-right" src="resources/icon/white-arrow-right.svg" alt="arrow-right" data-slide="next">
            </div>`;
};

const buildNewsView = (news) => {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 
                    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    
    const newsDateConversion = (date) => {
        return {
            day: date.match(/(0?[1-9]|[1-2][0-9]|3[0-1])$/g),
            month: months[new Date(date).getMonth()],
        };
    }

    let block = `<div id="block-news" class="news col">
                    <h2>НОВОСТИ КОМПАНИИ</h2>
                    <hr>`;

    for (let i = 0; i < news.length; i++) {
        let date = newsDateConversion(news[i].date);

        block += `<div class="item">
                    <div class="col">
                        <img src="${news[i].img}" alt="background" onerror="this.src = 'http://placehold.it/95x63/99cccc.gif&text=News'">
                        <div class="day">${date.day}</div>
                        <p>${date.month}</p>
                    </div>
                    <div class="col">
                        <a href="${news[i].url}">${news[i].title}</a>
                        <p>${news[i].description}</p>
                    </div>
                </div>
                <hr class="dotted">`;
    }

    return block + `<a href="news.html">Все новости</a>
                </div>`;
};

const buildBannerControllerView = (bannerLength) => {
    const buildRadioList = (length) => {
        let list = '';

        for (let i = 0; i < length; i++) {
            list += `<input value="${i + 1}" class="nav-radio" type="radio" name="nav-btn" id="nav-btn-${i + 1}" ${i == 0 ? 'checked' : ''}>
                    <label for="nav-btn-${i + 1}"></label>`;
        }

        return list;
    };

    return `<div class="main-slider__nav" data-slide="radio-controller">
                ${buildRadioList(bannerLength)}
            </div>`;
};

const buildBannerView = (banner) => {
    return `<div class="slide">
                <img src="${banner.img}" alt="banner-${banner.order}" onerror="this.src = 'http://placehold.it/900x350/99cccc.gif&text=Banner'">
                <div class="slide__text">
                    <p>LOREM IPSUM</p>
                    <p>LOREM IPSUM! LOREM IPSUM!</p>
                    <p>LOREM IPSUM! LOREM IPSUM! LOREM IPSUM!</p>
                    <ul>
                        <li>LOREM IPSUM! LOREM IPSUM! LOREM IPSUM!</li>
                        <li>LOREM IPSUM! LOREM IPSUM! LOREM IPSUM!</li>
                        <li>LOREM IPSUM! LOREM IPSUM! LOREM IPSUM! LOREM IPSUM! LOREM IPSUM!</li>
                    </ul>
                    <div class="details">
                        <a href="${banner.url}">ПОДРОБНЕЕ</a>
                    </div>
                </div>
            </div>`;
};

const itemLabels = {
    new: `<div class="overlay overlay-news">
            <p class="new">NEW</p>
        </div>`,

    recommended: `<div class="overlay overlay-rec">
                    <img class="like-icon" src="resources/icon/block-8-like.svg" alt="like">
                </div>`,

    sale: `<div class="overlay overlay-sale">
                <p class="percentage">%</p>
            </div>`,
};

const buildItemView = (item) => {
    let isPriceExists = true;

    if (item.price == 0 || item.oldPrice == 0) {
        item.price = '----';

        isPriceExists = false;
    }

    return `<div class="carousel-block__instance">
                ${itemLabels[item.type]}
                <img class="item-image" src="${item.img}" alt="item" onerror="this.src = 'http://placehold.it/230x150/99cccc.gif&text=Item'">
                <a href="${item.url}">${item.description}</a>
                <p>Цена: <span class="bold">${item.price}</span> ${!isPriceExists ? '' : `<span class="crossed"> ${item.oldPrice}</span>`}</p>
                <div class="bottom">
                    <button data-event="buy-item" data-item-price="${item.price}" data-item-description="${item.description}" ${!isPriceExists ? 'class="button_disabled"' : ''}>
                        ${!isPriceExists ? 'Не доступен' : `<img class="cart" src="resources/icon/cart.svg" alt="cart">
                        КУПИТЬ`}
                    </button>
                    <a href="${item.url}" class="links-details">Подробнее</a>
                </div>
            </div>`;
}

const getPromotionTimeView = (time) => {
    if (!time) return `<p class="forever">БЕССРОЧНО</p>`;

    let [ day, hour, minute ] = time.match(/\d+/g);

    return `<div class="timing__count-down">
                <div class="timing__clock">
                    <span class="number-block">${Math.floor(day / 10)}</span>
                    <span class="number-block">${day % 10}</span>
                    <span class="colon">:</span>
                    <span class="number-block">${Math.floor(hour / 10)}</span>
                    <span class="number-block">${hour % 10}</span>
                    <span class="colon">:</span>
                    <span class="number-block">${Math.floor(minute / 10)}</span>
                    <span class="number-block">${minute % 10}</span>
                </div>
                <div class="timing__description">
                    <p>дней</p>
                    <p>часов</p>
                    <p>минут</p>
                </div>
            </div>`;
};

const buildPromotionView = (promotion) => {
    return `<div class="carousel-block__instance sales-instance">
                <a href="${promotion.url}">${promotion.title}</a>
                <img class="item-image" src="${promotion.img}" alt="item" onerror="this.src = 'http://placehold.it/230x150/99cccc.gif&text=Promotion'">
                <p>${promotion.description}</p>

                <div class="timing">
                    <p>Срок действия:</p>
                    ${getPromotionTimeView(promotion.time_action)}
                </div>
                <a class="centered" href="${promotion.url}">Подробнее</a>
            </div>`;
};

const buildBuyingItemsView = (items) => {
    const buildItemListView = (items) => {
        let list = '';

        for (let i = 0; i < items.length; i++) {
            list += `<div>
                        <img src="${items[i].img}" alt="${items[i].title}" onerror="this.src = 'http://placehold.it/230x150/99cccc.gif&text=Item'">
                        <a href="${items[i].url}">${items[i].title}</a>
                    </div>`;
        }

        return list;
    };

    return `<section id="block-buying-items" class="block buy--now hide-before-750">
                <div class="carousel-block__heading">
                    <h2>ЧТО ПОКУПАЮТ ПРЯМО СЕЙЧАС</h2>
                    <div class="horizontal-line"></div>
                </div>
                <div class="items">
                    ${buildItemListView(items)}
                </div>
            </section>`;
};
