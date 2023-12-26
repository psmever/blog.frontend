import AxiosUtil from '@/Common/axios-util';
import { ServicesResult, AppRootDataInterface, LoginPayloadInterface } from '@/Types';

/**
 * 서버 체크
 * @constructor
 */
export const ServiceCheckStatus = (): Promise<ServicesResult<null>> => {
    return AxiosUtil({
        method: 'get',
        url: `/api/system/status`,
        payload: null
    });
};

/**
 * 서버 공지 사항 체크
 * @constructor
 */
export const ServiceCheckNotice = (): Promise<ServicesResult<{ contents: string }>> => {
    return AxiosUtil({
        method: 'get',
        url: `/api/system/notice`,
        payload: null
    });
};

/**
 * App Root Data
 * @constructor
 */
export const ServiceGetAppData = (): Promise<ServicesResult<AppRootDataInterface>> => {
    return AxiosUtil({
        method: 'get',
        url: `/api/system/app-data`,
        payload: null
    });
};

/**
 * 로그인
 * @param email
 * @param password
 * @constructor
 */
export const ServiceLogin = ({ email, password }: { email: string; password: string }): Promise<ServicesResult<LoginPayloadInterface>> => {
    return AxiosUtil({
        method: 'post',
        url: `/api/v1/auth/login`,
        payload: {
            email,
            password
        }
    });
};

/**
 * 로그아웃
 * @constructor
 */
export const ServiceLogout = (): Promise<ServicesResult<null>> => {
    return AxiosUtil({
        method: 'delete',
        url: `/api/v1/auth/logout`,
        payload: null
    });
};

/**
 * 토큰체크
 * @constructor
 */
export const ServiceTokenInfo = (): Promise<ServicesResult<{ uuid: string; level: string }>> => {
    return AxiosUtil({
        method: 'get',
        url: `/api/v1/auth/token-info`,
        payload: null
    });
};
