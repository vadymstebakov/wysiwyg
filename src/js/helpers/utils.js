export const firstCartToLowerCase = (str) => {
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
    let debounceTimeoutId;
    return function (...args) {
        clearTimeout(debounceTimeoutId);
        debounceTimeoutId = null;
        debounceTimeoutId = setTimeout(() => cb.apply(this, args), interval);
    };
};
