export const firstCharToLowerCase = (str) => {
    if (typeof str !== 'string') {
        return '';
    }

    return str.replace(str[0], str[0].toLowerCase());
};

export const removeFromLastCapitalize = (str) => {
    if (typeof str !== 'string') {
        return '';
    }

    return str.replace(/(?!^)[A-Z][a-z]*$/, '');
};

export const debounce = (cb, interval = 400) => {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = null;
        timeoutId = setTimeout(() => cb.apply(this, args), interval);
    };
};

export const restoreSelection = (savedSel) => {
    if (!savedSel) return;
    const sel = document.getSelection();
    sel.removeAllRanges();
    sel.addRange(savedSel);
};

export const saveSelection = () => {
    const sel = document.getSelection();
    if (sel.rangeCount > 0) return sel.getRangeAt(0);
    return null;
};
