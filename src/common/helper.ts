export const DEBUG = (e: any) => {
    console.debug('%c::DEBUG::', 'color: green; font-weight: bold;', e);
};

export const COLORLOG = (color: 'success' | 'info' | 'error' | 'warning', message: string): void => {
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
 * local storage 유무 체크
 */
export const isLocalStorageEnabled = (): boolean => {
    try {
        const key = `__storage__test`;
        window.localStorage.setItem(key, '');
        window.localStorage.removeItem(key);
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * local storage 유틸
 */
export const storageManager = {
    set: (key: string, object: any) => {
        if (typeof window === 'undefined') return;
        if (!localStorage) return;
        localStorage[key] = typeof object === 'string' ? object : JSON.stringify(object);
    },
    get: (key: string) => {
        if (typeof window === 'undefined') return;
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
        if (typeof window === 'undefined') return;
        if (!localStorage) return null;

        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
    }
};

/**
 * 쿠키 유틸
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
    }
};

/**
 * 쿠키, 로컬스토리지 동시 사용
 */
export const storageMaster = {
    set: (key: string, object: any) => {
        if (isLocalStorageEnabled()) {
            storageManager.set(key, object);
        } else {
            cookieManager.set(key, object);
        }
    },
    get: (key: string) => {
        if (isLocalStorageEnabled()) {
            return storageManager.get(key);
        } else {
            return cookieManager.get(key);
        }
    },
    remove: (key: string) => {
        if (isLocalStorageEnabled()) {
            storageManager.remove(key);
        } else {
            cookieManager.remove(key);
        }
    }
};

/**
 * 토큰 저장
 * @param accessToken
 * @param refreshToken
 */
export const saveToken = ({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }): void => {
    storageManager.set('accessToken', accessToken);
    storageManager.set('refreshToken', refreshToken);
};

/**
 * 토큰 제거
 */
export const removeToken = (): void => {
    storageManager.remove('accessToken');
    storageManager.remove('refreshToken');
};

/**
 * access 토큰 반환
 */
export const getAccessToken = () => {
    return storageManager.get('accessToken');
};

/**
 * refresh 토큰 반환
 */
export const getRefreshToken = () => {
    return storageManager.get('refreshToken');
};

/**
 * 이메일 벨리데이션
 * @param emailString
 */
export const isValidEmail = (emailString: string): boolean => {
    const emailChack = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailChack.test(String(emailString).toLowerCase());
};
