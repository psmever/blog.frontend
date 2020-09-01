/**
 * 개발 디버그
 * @param e
 * @constructor
 */
export const DEBUG = (e: object) => {
    console.debug('%c::DEBUG::', 'color: green; font-weight: bold;',e);
};

/**
 * 로컬 스토리지 매니저.
 */
export const storageManager = {
    set: (key: string, object: any) => {
        if(!localStorage) return;
        localStorage[key] = (typeof object) === 'string' ? object : JSON.stringify(object);
    },
    get: (key: string) => {
        if(!localStorage) return null;

        if(!localStorage[key]) {
            return null;
        }

        try {
            return JSON.parse(localStorage[key]);
        } catch(e) {
            return localStorage[key];
        }
    },
    remove: (key: string) => {
        if(!localStorage) return null;

        if(localStorage[key]) {
            localStorage.removeItem(key);
        }
    }
};

/**
 * 쿠키 메니저.
 */
export const cookieManager = {
    set: (cname: string, cvalue: string, hours: number = 24) => {
        let d = new Date();
        d.setTime(d.getTime() + hours * 60 * 60 * 1000); // (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    get: (cname: string) => {
        let name = cname + "=";
        let ca = document.cookie.split(";");

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }

        return "";
    },
    remove: (cname: string) => {
        let expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC;"
        document.cookie = cname + "=;" + expires + ";path=/";
    }
};

/**
 * 토큰 정보 저장.
 *
 * @param payload
 */
export function saveLoginToken(payload: any): void {
    storageManager.set("login_state", "true");
    storageManager.set("login_expires_in", payload.expires_in);
    storageManager.set("login_access_token", payload.access_token);
    storageManager.set("login_refresh_token", payload.refresh_token);
}

/**
 * 로그인 토큰 삭제.
 */
export function deleteLoginToken(): void {
    storageManager.remove("login_state");
    storageManager.remove("login_expires_in");
    storageManager.remove("login_access_token");
    storageManager.remove("login_refresh_token");
}

/**
 * 리후레쉬 토큰 저장.
 * @param payload
 */
export function saveRefreshToken(payload: any) {
    storageManager.set("login_expires_in", payload.expires_in);
    storageManager.set("login_access_token", payload.access_token);
    storageManager.set("login_refresh_token", payload.refresh_token);
}

/**
 * 로그인 AccessToken 반환
 */
export function getAccessToken() {
    return storageManager.get("login_access_token");
}

/**
 * 로그인 리프레쉬 토큰 반환
 */
export function getRefreshToken() {
    return storageManager.get("login_refresh_token");
}

/**
 * undefined 체크.
 *
 * @param value
 */
export const isEmpty = function(value: any) {
    if( value === "" || value === null || value === undefined || ( value !== null && typeof value === "object" && !Object.keys(value).length ) ){
      return true
    } else {
      return false
    }
};