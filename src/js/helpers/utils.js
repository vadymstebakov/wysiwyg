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
