// eslint-disable-next-line import/no-anonymous-default-export
const Helper = {
    DEBUG(e: any) {
        console.debug('%c::DEBUG::', 'color: green; font-weight: bold;', e);
    },
    COLORLOG(color: 'success' | 'info' | 'error' | 'warning', message: string): void {
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
    },
    isLocalStorageEnabled(): boolean {
        try {
            const key = `__storage__test`;
            window.localStorage.setItem(key, '');
            window.localStorage.removeItem(key);
            return true;
        } catch (e) {
            return false;
        }
    },
    storageManager: {
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
    },
    cookieManager: {
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
    },
    storageMaster: {
        set: (key: string, object: any) => {
            if (Helper.isLocalStorageEnabled()) {
                Helper.storageManager.set(key, object);
            } else {
                Helper.cookieManager.set(key, object);
            }
        },
        get: (key: string) => {
            if (Helper.isLocalStorageEnabled()) {
                return Helper.storageManager.get(key);
            } else {
                return Helper.cookieManager.get(key);
            }
        },
        remove: (key: string) => {
            if (Helper.isLocalStorageEnabled()) {
                Helper.storageManager.remove(key);
            } else {
                Helper.cookieManager.remove(key);
            }
        }
    },
    saveToken({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }): void {
        Helper.storageManager.set('accessToken', accessToken);
        Helper.storageManager.set('refreshToken', refreshToken);
    },
    removeToken(): void {
        Helper.storageManager.remove('accessToken');
        Helper.storageManager.remove('refreshToken');
    },
    getAccessToken() {
        return Helper.storageManager.get('accessToken');
    },
    getRefreshToken() {
        return Helper.storageManager.get('refreshToken');
    }
};

export default Helper;
