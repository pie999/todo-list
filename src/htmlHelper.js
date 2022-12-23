export function createhtml(keyname, parent, type, text, className, funcOnClick) {
    const element = document.createElement(keyname);
    parent.appendChild(element);
    
    if (type)       element.type = type;
    if (text)       element.textContent = text;
    if (className)  element.classList.add(className);
    if (funcOnClick)element.addEventListener("click", funcOnClick)

    return element;
    
}

export function removeAllChildren(parent) {
    while(parent.firstChild) parent.removeChild(parent.firstChild);
}
