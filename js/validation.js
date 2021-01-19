const validatePaymentSystem = () => {
    if (typeof CURRENCY !== 'undefined' &&
        typeof CURRENCY_EXCHANGE !== 'undefined' &&
        typeof BASKET !== 'undefined') {

        return true;
    }

    return false;
}

const validateObject = (data, importantProperties, minorProperties = []) => {
    for (let important of importantProperties) {
        if (!(data.hasOwnProperty(important.name) && important.validation(data[important.name]))) {
            return false;
        }
    }

    for (let minor of minorProperties) {
        if (!(data.hasOwnProperty(minor.name) && minor.validation(data[minor.name]))) {
            if (minor.hasOwnProperty('default')) {
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
    { name: 'img', validation: isString, default: 'http://placehold.it/95x63/99cccc.gif&text=News' },
];

const importantBannerProperties = [
    { name: 'order', validation: isNumber },
    { name: 'url', validation: isString },
];

const minorBannerProperties = [
    { name: 'img', validation: isString, default: 'http://placehold.it/900x350/99cccc.gif&text=Banner' },
];

const importantItemProperties = [
    { name: 'type', validation: isString },
    { name: 'description', validation: isString },
    { name: 'currency', validation: (value) => {
        return isString(value) &&
        (CURRENCY == value.toUpperCase() || Object.keys(CURRENCY_EXCHANGE).includes(value.toUpperCase()));
     }},
    { name: 'date', validation: value => dateRegExp.test(value) },
    { name: 'url', validation: isString },
];

const minorItemProperties = [
    { name: 'price', validation: (value) => {
        return isNumber(value) && Number(value) > 0
    }, default: 0 },
    { name: 'oldPrice', validation: (value) => {
        return isNumber(value) && Number(value) > 0
    }, default: 0 },
    { name: 'img', validation: isString, default: 'http://placehold.it/230x150/99cccc.gif&text=Item' },
];

const importantPromotionProperties = [
    { name: 'title', validation: isString },
    { name: 'description', validation: isString },
    { name: 'url', validation: isString },
];

const minorPromotionProperties = [
    { name: 'time_action', validation: value => timeRegExp.test(value), default: undefined },
    { name: 'img', validation: isString, default: 'http://placehold.it/230x150/99cccc.gif&text=Promotion' },
];

const importantBuyingItemProperties = [
    { name: 'title', validation: isString },
    { name: 'url', validation: isString },
];
