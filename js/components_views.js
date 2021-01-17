const buildTopMenuView = (topMenu) => {
    let menu = '';

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
                        <a class="nav__link" href="https://homy.ru/catalog/">
                            Каталог
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

    return menu;
};

const buildBottomMenuView = (bottomMenu) => {
    const buildTitleList = (elements) => {
        let list = '';

        for (let i = 0; i < elements.length; i++) {
            list += `<li><a href="${elements[i].url}">${elements[i].title}</a></li>`;
        }

        return list;
    };

    return `<ul class="catalog-navigation hide-before-1140-flex">
                ${buildTitleList(bottomMenu)}
                <img class="arrow-right" src="resources/icon/white-arrow-right.svg" alt="arrow-right">
            </ul>`;
};

const buildNewsView = (news) => {
    // TODO add date conversion

    return `<div class="item">
                <div class="col">
                    <img src="${news.img}" alt="background">
                    <div class="day">15</div>
                    <p>октября</p>
                </div>
                <div class="col">
                    <a href="${news.url}">${news.title}</a>
                    <p>${news.description}</p>
                </div>
            </div>`;
};

const buildBannerView = (banner) => {
    return `<div class="slide">
                <img src="${banner.img}" alt="banner-${banner.order}">
                <div class="slide__text">
                    <p>LOREM IPSUM</p>
                    <p>LOREM IPSUM! LOREM IPSUM!</p>
                    <p>GVS MAINSTREAM 228 ОТ КОМПАНИИ GRANDSTREAM ЭТО:</p>
                    <ul>
                        <li>9-ти сторонняя аудио/видео конференция без покупки доп. ПО</li>
                        <li>2 Мпикс камера CMOS с разрешением 1080р@15fps</li>
                        <li>Гигабитный порт, встроенный модуль WIFI и Bluetooth 4.0 Miracast</li>
                    </ul>
                    <div class="details">
                        <a href="${banner.url}">ПОДРОБНЕЕ</a>
                    </div>
                </div>
            </div>`;
};

const itemLabels = {
    new: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            width="34" height="43"
            viewBox="0 0 34 43">
                <image id="Shape_5_copy_6" width="34" height="43"
                    xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAArCAYAAAAdSFoKAAABNElEQVRYhe3YyyqFURiH8Z+dq3AJDjdhIhQpE1JyyMg9GLoIp1JiokQOpZRyISKnlFOmoqVvG7xthy+bvQfrGX5r9fas9/uvd7Bauo9nJ7CIisZwie5KgyUSbTiqNFjiQ6YZJN7JIpEsEskikSwSySKRLBLJIpEsEskikSwSySKRLBLJIpEsEkkiq03gsZRExtGPiwYI3GEY09Vfs4cOrPyjxA46sSlk5BGT6MX5HwqkLoxhAFfVj7XCelCYLuC1zhJbaMdaXPjs1jxhBj04q4PALUYxhJtaG767vofoSqn+hcRGkb/1rzb9ZI6k7kyjr+TNSs+WgxgpOvIlZQbaftGd7+ZOytVy0YXtnxYvO1nvi7mTTnpdY/20yNUUHsoUbi0pUiWd9ARz6dUYL9jFPJ5LV8Mbm64xW/ZL/4EAAAAASUVORK5CYII="/>
        </svg>
        <p class="new">NEW</p>`,

    recommended: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="34" height="43"
                    viewBox="0 0 34 43">
                        <image id="Shape_5_copy_5" width="34" height="43"
                            xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAArCAYAAAAdSFoKAAABNElEQVRYhe3YyyqFURTA8R95Co/g8hImQpEyOVLCyWsYegi3UmKiRC5lpDyIyEHKLWUk2vrOZHVwvlzOGez/8Nu71X+vb601WB0vJ5UZLKNTa6hhIIm8tlCiTq2zDSQS3e0g8UEWiWSRSBaJZJFIFolkkUgWiWSRSBaJZJFIFolkkUgWiWSRSBJZbwOPlSQyjRFctkDgDhOo1n/NAXqx9o8Se+jDtlAjj5jFEC7+UCBlYQqjuKp/bFSsR4XpEt5+WWIHPdiIB591zRPmMYjzXxC4xSTGcdPownfte4z+VNU/kNgq6m/zq0vNzJGUnSqGS3ZWWluOoVJk5EvKDLTDIjvfzZ1UV6tFFnabDV52st4Xcye99LrB+VlRV3N4KBO4q6RInfTSUyykrTHS0ngfi3guHQ3vPOc0fBAkAU4AAAAASUVORK5CYII="/>
                </svg>
                <img class="like-icon" src="resources/icon/block-8-like.svg" alt="like">`,

    sale: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            width="34" height="43"
            viewBox="0 0 34 43">
                <image id="Shape_5" width="34" height="43"
                    xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAArCAYAAAAdSFoKAAABNElEQVRYhe3YyyqFURiH8Z+dq3AJDjdhIhQpE1JyyG0YugfHUmKiRA6ljNyEmcgp5ZSpaOnbBm+bvb8ctsF6ht9avT3r/f7rHayW3vmTCSyiojlcorvSZIlEG44qTZb4kPkPEu9kkUgWiWSRSBaJZJFIFolkkUgWiWSRSBaJZJFIFolkkUgWiSSR1X/gsZRExtGPiyYI3GEY09Vfs4cOrPyhxA46sSlk5BGT6MX5LwqkLoxhAFfVj7XCelCYLuD1hyW20I61uPDZrXnCDHpw9gMCtxjFEG5qbah3fQ/RlVL9DYmNIn/rX21qZI6k7kyjr+TNSs+WgxgpOvIlZQbaftGdenMn5Wq56MJ2o8XLTtb7Yu6kk17XWD8tcjWFhzKFW0uKVEknPcZsejXGC3Yxh+fS1fAGhv4xqBP6qgsAAAAASUVORK5CYII="/>
            </svg>
            <p class="percentage">%</p>`
};

const buildItemView = (item) => {
    return `<div class="carousel-block__instance">
                <div class="overlay">
                    ${itemLabels[item.type]}
                </div>
                <img class="item-image" src="${item.img}" alt="item">
                <a href="${item.url}">${item.description}</a>
                <p>Цена: <span class="bold">${item.price}</span> <span class="crossed"> ${item.oldPrice}</span></p>
                <div class="bottom">
                    <button data-item-description="${item.description}" data-item-price="${item.price}">
                        <img class="cart" src="resources/icon/cart.svg" alt="cart">
                        КУПИТЬ
                    </button>
                    <a href="${item.url}" class="links-details">Подробнее</a>
                </div>
            </div>`;
}

const getPromotionTimeView = (time) => {
    if (!time) return `<p class="forever">БЕССРОЧНО</p>`;

    return `<div class="timing__count-down">
                <div class="timing__clock">
                    <span class="number-block">${Math.floor(time[0] / 10)}</span>
                    <span class="number-block">${time[0] % 10}</span>
                    <span class="colon">:</span>
                    <span class="number-block">${Math.floor(time[1] / 10)}</span>
                    <span class="number-block">${time[1] % 10}</span>
                    <span class="colon">:</span>
                    <span class="number-block">${Math.floor(time[2] / 10)}</span>
                    <span class="number-block">${time[2] % 10}</span>
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
                <img class="item-image" src="${promotion.img}" alt="item">
                <p>${promotion.description}</p>

                <div class="timing">
                    <p>Срок действия:</p>
                    ${promotion.time_action}
                </div>
                <a class="centered" href="${promotion.url}">Подробнее</a>
            </div>`;
};

const buildBuyingItemView = (item) => {
    return `<div>
                <img src="${item.img}" alt="${item.title}">
                <a href="${item.url}">${item.title}</a>
            </div>`;
};
