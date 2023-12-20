import { atom } from 'recoil';
import { AppRootStateInterface } from '@/Type/state-interface';

// app root 스테이트
export const AppRootState = atom<AppRootStateInterface>({
    key: `app/AppRootState`,
    default: {
        checkServer: false,
        systemNotice: '',
        rootData: {
            code: {
                step1: [],
                step2: {}
            }
        },
        login: {
            status: false,
            token: {
                accessToken: '',
                refreshToken: ''
            }
        }
    }
});
