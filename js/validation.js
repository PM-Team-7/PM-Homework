const isNumber = (value) => {
    return (typeof value === 'number' || typeof value === 'string') && 
            !Number.isNaN(Number(value));
};

const isString = (value) => {
    return typeof value === 'string';
};

const dateRegExp = /^[0-9]{1,4}\/(0?[1-9]|1[1-2])\/(0?[1-9]|[1-2][0-9]|3[0-1])$/;
const timeRegExp = /^[0-9]{1,3}d ([0-1]?[0-9]|2[0-3])h [0-5]?[0-9]m$/;

const importantTopMenuProperties = [
    { name: 'order', validation: isNumber },
    { name: 'title', validation: isString },
];

const importantButtomMenuProperties = [
    { name: 'order', validation: isNumber },
    { name: 'title', validation: isString },
    { name: 'url', validation: isString },
];

const importantNewsProperties = [
    { name: 'title', validation: isString },
    { name: 'description', validation: isString },
    { name: 'date', validation: value => dateRegExp.test(value) },
    { name: 'url', validation: isString },
];

const minorNewsProperties = [
    { name: 'img', validation: isString, default: './resources/image/default_news.png' },
];

const importantBannerProperties = [
    { name: 'order', validation: isNumber },
    { name: 'url', validation: isString },
];

const minorBannerProperties = [
    { name: 'img', validation: isString, default: './resources/image/default_banner.png' },
];

const importantItemProperties = [
    { name: 'type', validation: isString },
    { name: 'description', validation: isString },
    { name: 'price', validation: isNumber },
    { name: 'oldPrice', validation: isNumber },
    { name: 'currency', validation: isString },
    { name: 'date', validation: value => dateRegExp.test(value) },
    { name: 'url', validation: isString },
];

const minorItemProperties = [
    { name: 'img', validation: isString, default: './resources/image/default_item.png' },
];

const importantPromotionProperties = [
    { name: 'title', validation: isString },
    { name: 'description', validation: isString },
    { name: 'url', validation: isString },
    { name: 'time_action', validation: value => dateRegExp.test(value) },
];

const minorPromotionProperties = [
    { name: 'img', validation: isString, default: './resources/image/default_promotion.png'},
];

const importantBuyingItemProperties = [
    { name: 'title', validation: isString },
    { name: 'url', validation: isString },
];

const validateObject = (data, importantProperties, minorProperties = []) => {
    for (let important of importantProperties) {
        if (!(data.hasOwnProperty(important.name) && important.validation(data[important.name]))) {
            return false;
        }
    }

    for (let minor of minorProperties) {
        if (!(data.hasOwnProperty(minor.name) && minor.validation(data[minor.name]))) {
            if (minor.default) {
                data[minor.name] = minor.default;
            } else {
                return false;
            }
        }
    }

    return true;
};

const selectValidElements = (elements, importantProperties, minorProperties = []) => {
    let correctElements = [];

    for (let i = 0; i < elements.length; i++) {
        if (validateObject(elements[i], importantProperties, minorProperties)) {
            correctElements.push(elements[i]);
        }
    }

    return correctElements;
};
