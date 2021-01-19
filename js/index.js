let topMenuBlock = document.getElementById('block-top-menu');
let bottomMenuBlock = document.getElementById('block-bottom-menu');
let newsBlock = document.getElementById('block-news');
let buyingItemsBlock = document.getElementById('block-buying-items');

const basketElements = document.getElementById('basket-elements');
const basketPrice = document.getElementById('basket-price');

const mainCarousel = document.getElementById('slider-main');
let mainCarouselController = mainCarousel.querySelector('[data-slide="radio-controller');

const brandsCarousel = document.getElementById('carousel-brands');
const numbersCarousel = document.getElementById('carousel-numbers');

const carousels = document.querySelectorAll('.carousel-block');

const initBasket = () => {
    if (!validatePaymentSystem()) {
        if (typeof ITEMS !== 'undefined') {
            ITEMS.splice(0, ITEMS.length);
        }
        return;
    }

    basketElements.innerText = BASKET.elements;
    basketPrice.innerText = BASKET.price;
    basketPrice.title = BASKET.price;
    document.getElementById('basket-currency').innerText = CURRENCY;

    const basketClickHandler = (event) => {
        if (event.target.tagName.toLowerCase() !== 'button' && event.target.dataset.Event !== 'buy-item') return;

        event.preventDefault();
        basketElements.innerText = BASKET.elements = BASKET.elements + 1;
        basketPrice.innerText = basketPrice.title = BASKET.price = BASKET.price + Number(event.target.dataset.itemPrice);
    };

    document.addEventListener('click', basketClickHandler, false);
};

const initBlocks = () => {
    let newTopMenu = transformTopMenu(typeof TOP_MENU !== 'undefined' ? TOP_MENU : {});
    let newNews = transformNews(typeof NEWS !== 'undefined' ? NEWS : []);
    let newBuyingItems = transformBuyingItems(typeof BUYING_RIGHT_NOW !== 'undefined' ? BUYING_RIGHT_NOW : []);

    if (newTopMenu.length) {
        topMenuBlock = replaceElement(createElement(newTopMenu, buildTopMenuView), topMenuBlock);
    } else {
        removeElement(topMenuBlock.querySelector('.placeholder'));
    }

    if (newNews.length) {
        newsBlock = replaceElement(createElement(newNews, buildNewsView), newsBlock);
    } else {
        document.querySelector('.important-info').style.justifyContent = 'center';
        removeElement(newsBlock);
    }

    if (newBuyingItems.length) {
        buyingItemsBlock = replaceElement(createElement(newBuyingItems, buildBuyingItemsView), buyingItemsBlock);
    } else {
        removeElement(buyingItemsBlock);
    }
};

const initCarousels = () => {
    let newBottomMenu = transformButtomMenu(typeof MENU !== 'undefined' ? MENU : []);

    if (newBottomMenu.length) {
        bottomMenuBlock = replaceElement(createElement(newBottomMenu, buildBottomMenuView), bottomMenuBlock);
    } else {
        removeElement(bottomMenuBlock.querySelector('.placeholder'));
    }

    if (newBottomMenu.length > 10) initCarousel(bottomMenuBlock, newBottomMenu.length, 10);

    let carouselItems = transformItems(typeof ITEMS !== 'undefined' ? ITEMS : []);
    
    for (let j = 0; j < 3; j++) {

        let carouselInner = carousels[j].querySelector('.carousel-block__instances');
    
        for (let i = 0; i < carouselItems[j].length; i++) {
            carouselInner.innerHTML += buildItemView(carouselItems[j][i]);
        }

        initItemsCarousel(carousels[j], carouselItems[j].length);
    }
    
    let promotions = transformPromotions(typeof PROMOTIONS !== 'undefined' ? PROMOTIONS : []);
    
    let carouselInner = carousels[3].querySelector('.carousel-block__instances');
    
    for (let i = 0; i < promotions.length; i++) {
        carouselInner.innerHTML += buildPromotionView(promotions[i]);
    }

    initItemsCarousel(carousels[3], promotions.length);

    initCarousel(brandsCarousel, 9, 5);
    initCarousel(numbersCarousel, 6, 4);
    
    let banners = transformBanner(typeof BANNER !== 'undefined' ? BANNER : []);
    let mainSlider = mainCarousel.querySelector('.slider');

    if (banners.length) {
        mainSlider.innerHTML += buildBannerView(banners[banners.length - 1]);

        for (let i = 0; i < banners.length; i++) {
            mainSlider.innerHTML += buildBannerView(banners[i]);
        }

        mainSlider.innerHTML += buildBannerView(banners[0]);

        mainSlider.style.width = mainCarousel.clientWidth * (banners.length + 2) + 'px';
        mainCarouselController = replaceElement(createElement(banners.length, buildBannerControllerView), mainCarouselController);

        initBanner(mainCarousel, banners.length);
        removeElement(mainCarousel.querySelector('.placeholder'));
    }
    
    window.addEventListener('resize', () => {
        if (numberOfCarouselItems !== selectNumberOfCarouselItems(document.documentElement.clientWidth)) {
            numberOfCarouselItems = selectNumberOfCarouselItems(document.documentElement.clientWidth);

            for (let j = 0; j < 3; j++) {
                initItemsCarousel(carousels[j], carouselItems[j].length, numberOfCarouselItems);
            }

            initItemsCarousel(carousels[3], promotions.length, numberOfCarouselItems);

            initCarousel(brandsCarousel, 9, 5);
            initCarousel(numbersCarousel, 6, 4);
        }

        mainSlider.style.width = mainCarousel.clientWidth * (banners.length + 2) + 'px';
    });
};

const init = () => {
    initBasket();
    initBlocks();
    initCarousels();
};

init();
