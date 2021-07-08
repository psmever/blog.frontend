/**
 * 개발 디버그.
 * @param e
 * @constructor
 */
export const DEBUG = (e: any) => {
    console.debug('%c::DEBUG::', 'color: green; font-weight: bold;', e);
};

export const COLORLOG = (message: string, color: 'success' | 'info' | 'error' | 'warning'): void => {
    switch (color) {
        case 'success':
            console.log('%c' + message, 'color: Green');
            break;
        case 'info':
            console.log('%c' + message, 'color: #42FF33');
            break;
        case 'error':
            console.log('%c' + message, 'color: Red');
            break;
        case 'warning':
            console.log('%c' + message, 'color: Orange');
            break;
        default:
            console.log('%c' + message, 'color: Green');
    }

    return;
};

/**
 * 로컬 스토리지 매니저.
 */
export const storageManager = {
    set: (key: string, object: any) => {
        if (!localStorage) return;
        localStorage[key] = typeof object === 'string' ? object : JSON.stringify(object);
    },
    get: (key: string) => {
        if (!localStorage) return null;

        if (!localStorage[key]) {
            return null;
        }

        try {
            return JSON.parse(localStorage[key]);
        } catch (e) {
            return localStorage[key];
        }
    },
    remove: (key: string) => {
        if (!localStorage) return null;

        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
    },
};

/**
 * 로컬 쿠키 매니저.
 */
export const cookieManager = {
    set: (cname: string, cvalue: string, hours = 24) => {
        const d = new Date();
        d.setTime(d.getTime() + hours * 60 * 60 * 1000); // (exdays * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    },
    get: (cname: string) => {
        const name = cname + '=';
        const ca = document.cookie.split(';');

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }

        return '';
    },
    remove: (cname: string) => {
        const expires = 'expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        document.cookie = cname + '=;' + expires + ';path=/';
    },
};

/**
 * 로그인 토큰 저장.
 * @param payload
 */
export function saveLoginToken({
    expires_in,
    access_token,
    refresh_token,
}: {
    expires_in: number;
    access_token: string;
    refresh_token: string;
}): void {
    storageManager.set('login_state', 'true');
    storageManager.set('login_expires_in', expires_in);
    storageManager.set('login_access_token', access_token);
    storageManager.set('login_refresh_token', refresh_token);
}

/**
 * 로그인 토큰 제거.
 */
export function removeLoginToken(): void {
    storageManager.remove('login_state');
    storageManager.remove('login_expires_in');
    storageManager.remove('login_access_token');
    storageManager.remove('login_refresh_token');
}

/**
 * 로컬 스토리지 토큰. 페이지 다시 로드시 사용.
 */
export function getLocalToken(): {
    login_state: boolean | null;
    login_expires_in: number | null;
    login_access_token: string | null;
    login_refresh_token: string | null;
} {
    return {
        login_state: storageManager.get('login_state'),
        login_expires_in: storageManager.get('login_expires_in'),
        login_access_token: storageManager.get('login_access_token'),
        login_refresh_token: storageManager.get('login_refresh_token'),
    };
}

/**
 * return AccessToken.
 */
export function getAccessToken() {
    return storageManager.get('login_access_token');
}

/**
 * return RefreshToken.
 */
export function getRefreshToken() {
    return storageManager.get('login_refresh_token');
}

/**
 * RefreshToken 저장.
 * @param payload
 */
export function saveRefreshToken({
    expires_in,
    access_token,
    refresh_token,
}: {
    expires_in: number;
    access_token: string;
    refresh_token: string;
}): void {
    storageManager.set('login_expires_in', expires_in);
    storageManager.set('login_access_token', access_token);
    storageManager.set('login_refresh_token', refresh_token);
}

/**
 * undefined check
 * @param value
 */
export const isEmpty = function (value: any) {
    if (
        value === '' ||
        value === null ||
        value === undefined ||
        (value !== null && typeof value === 'object' && !Object.keys(value).length)
    ) {
        return true;
    } else {
        return false;
    }
};

export const isValidEmail = (emailString: string) => {
    const emailChack =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailChack.test(String(emailString).toLowerCase());
};
