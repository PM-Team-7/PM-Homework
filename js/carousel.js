const initCarousel = (carousel, elementsLength, maxElements) => {
    const prevArrow = carousel.querySelector('[data-slide="prev"]');
    const nextArrow = carousel.querySelector('[data-slide="next"]');

    const container = carousel.querySelector('[data-slide="container"]');

    let counter = 0;
    container.style.transform = 'translateX(0%)';
    const moveSlides = () => container.style.transform = 'translateX(' + ( -100 * counter / maxElements ) + '%)';

    prevArrow.classList.add('arrow_disabled');

    const slidePrevHandler = (event) => {
        if (counter == 0) return;
        counter--;
        moveSlides();

        if (!counter) {
            prevArrow.classList.add('arrow_disabled');
        } else {
            prevArrow.classList.remove('arrow_disabled');
        }

        nextArrow.classList.remove('arrow_disabled');
    };

    const slideNextHandler = (event) => {
        if (counter + maxElements >= elementsLength) return;
        counter++;
        moveSlides();

        if (counter + maxElements >= elementsLength) {
            nextArrow.classList.add('arrow_disabled');
        } else {
            nextArrow.classList.remove('arrow_disabled');
        }

        prevArrow.classList.remove('arrow_disabled');
    };

    prevArrow.addEventListener('click', slidePrevHandler);
    nextArrow.addEventListener('click', slideNextHandler);
};

const initBanner = (bannerElement, elementsLength) => {
    const controller = bannerElement.querySelector('[data-slide="radio-controller');
    const prevArrow = bannerElement.querySelector('[data-slide="prev"]');
    const nextArrow = bannerElement.querySelector('[data-slide="next"]');

    if (elementsLength === 1) {
        controller.style.display = 'none';
        prevArrow.style.display = 'none';
        nextArrow.style.display = 'none';
        return;
    }

    const container = bannerElement.querySelector('[data-slide="container"]');

    let counter = 1;
    let size = 100;
    let autoplay = true;

    const moveSlides = () => container.style.transform = 'translateX(' + (( - size * counter ) / ( elementsLength + 2 )) + '%)';

    const changeController = () => {
        [...controller.querySelectorAll('input')].forEach((input) => {
            input.checked = input.value == counter ? true : false;
        });
    }

    moveSlides();

    const slidePrevHandler = (event) => {
        event.stopPropagation();
        if (counter <= 0) return;

        container.style.transition = 'transform 0.4s';
        counter--;
        moveSlides();
        changeController();
    };

    const slideNextHandler = (event) => {
        event.stopPropagation();
        if (counter >= elementsLength + 1) return;
        
        container.style.transition = 'transform 0.4s';
        counter++;
        moveSlides();
        changeController();
    };

    const controllerChangeHandler = (event) => {
        event.stopPropagation();

        container.style.transition = `transform 0.4s`;
        counter = +event.target.value;
        moveSlides();
    };

    const transitionendHandler = () => {
        if (counter <= 0) {
            container.style.transition = 'none';
            counter = elementsLength;
            moveSlides();
        }

        if (counter >= elementsLength + 1) {
            container.style.transition = 'none';
            counter = 1;
            moveSlides();
        }

        changeController();
    };

    setInterval(() => {
        if (autoplay) {
            container.style.transition = 'transform 0.4s';
            counter++;
            moveSlides();
            changeController();
        }
    }, 5000);

    container.addEventListener('transitionend', transitionendHandler);
    
    bannerElement.addEventListener('click', () => autoplay = false, true);
    controller.addEventListener('click', controllerChangeHandler);
    prevArrow.addEventListener('click', slidePrevHandler);
    nextArrow.addEventListener('click', slideNextHandler);
};

const selectNumberOfCarouselItems = (width) => {
    let numbers = {
        '1' : { min: 320, max: 749 },
        '3' : { min: 750, max: 979 },
        '4' : { min: 980 },
    };
    
    for (let num in numbers) {
        if (numbers[num].min <= width && (numbers[num].max >= width || numbers[num].max === undefined)) {
            return +num;
        }
    }
};

let numberOfCarouselItems = selectNumberOfCarouselItems(document.documentElement.clientWidth);

const initItemsCarousel = (carouselElement, elementsLength, maxElements = numberOfCarouselItems) => {
    if (!elementsLength) {
        carouselElement.style.display = 'none';
        return;
    }

    const controller = carouselElement.querySelector('[data-slide="controller');
    const prevArrow = carouselElement.querySelector('[data-slide="prev"]');
    const nextArrow = carouselElement.querySelector('[data-slide="next"]');

    const container = carouselElement.querySelector('[data-slide="container"]');

    container.style.justifyContent = 'flex-start';

    controller.style.display = 'inline-flex';
    prevArrow.style.visibility = 'visible';
    nextArrow.style.visibility = 'visible';
    
    let counter = 0;
    let size = 100 / maxElements;
    container.style.transform = 'translateX(0%)';
    
    if (elementsLength <= maxElements) {
        container.style.justifyContent = 'center';
        
        controller.style.display = 'none';
        prevArrow.style.visibility = 'hidden';
        nextArrow.style.visibility = 'hidden';
        
        return;
    }
    
    prevArrow.style.visibility = 'hidden';
    nextArrow.style.visibility = 'visible';
    controller.querySelector('.prev').classList.add('arrow_disabled');
    controller.querySelector('.next').classList.remove('arrow_disabled');

    const slidePrevHandler = (event) => {
        if (!counter) return;

        counter--;

        if (!counter) {
            controller.querySelector('.prev').classList.add('arrow_disabled');
            prevArrow.style.visibility = 'hidden';
        } else {
            nextArrow.style.visibility = 'visible';
        }
        controller.querySelector('.next').classList.remove('arrow_disabled');

        container.style.transform = 'translateX(' + (-size * counter) + '%)';
    };

    const slideNextHandler = (event) => {
        if (counter + maxElements >= elementsLength) return;
        
        counter++;

        if (counter + maxElements >= elementsLength) {
            controller.querySelector('.next').classList.add('arrow_disabled');
            nextArrow.style.visibility = 'hidden';
        } else {
            prevArrow.style.visibility = 'visible';
        }
        controller.querySelector('.prev').classList.remove('arrow_disabled');

        container.style.transform = 'translateX(' + (-size * counter) + '%)';
    };

    controller.querySelector('.prev').addEventListener('click', slidePrevHandler);
    controller.querySelector('.next').addEventListener('click', slideNextHandler);

    prevArrow.addEventListener('click', slidePrevHandler);
    nextArrow.addEventListener('click', slideNextHandler);
};
