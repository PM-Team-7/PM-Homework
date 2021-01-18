const createElement = (element, view) => {
    let wrapElement = document.createElement('div')
    wrapElement.innerHTML = view(element);
    return wrapElement.firstChild;
}

const replaceElement = (newElement, oldElement) => {
    let parentElement = oldElement.parentElement;
    parentElement.replaceChild(newElement, oldElement);
    return newElement;
}

const removeElement = (element) => {
    let parentElement = element.parentElement;
    return parentElement.removeChild(element);
};
