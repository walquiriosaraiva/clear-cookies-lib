const deleteCookie = (name, domain, path) => {
    document.cookie = `${name}=; Max-Age=-99999999; domain=${domain}; path=${path}`;
};

const clearCookiesForDomain = (name, domainParts) => {
    const pathParts = window.location.pathname.split('/');
    while (pathParts.length > 0) {
        const path = pathParts.join('/') || '/';
        const domain = domainParts.join('.');
        deleteCookie(name, domain, path);
        pathParts.pop();
    }
};

const clearCookiesForName = (name) => {
    const domainParts = window.location.hostname.split('.');
    while (domainParts.length > 0) {
        clearCookiesForDomain(name, domainParts);
        domainParts.shift();
    }
};

export const clearCookies = () => {
    const cookies = document.cookie.split('; ');
    cookies.forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.slice(0, eqPos) : cookie;
        clearCookiesForName(name);
        document.cookie = `${name}=; Max-Age=-99999999; path=/`;
        document.cookie = `${name}=; Max-Age=-99999999;`;
    });
};
