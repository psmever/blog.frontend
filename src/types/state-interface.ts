import { AppRootDataInterface } from '@/Type/common-interface';

// app root data 스테이트
export interface AppRootStateInterface {
    checkServer: boolean;
    systemNotice: string;
    rootData: AppRootDataInterface;
    login: {
        status: boolean;
        token: {
            accessToken: string;
            refreshToken: string;
        };
    };
    modal: {
        open: boolean;
        message: string;
    };
}

// layout state
export interface LayoutStateInterface {
    messageModal: {
        type: `message` | `afterMove` | ``;
        open: boolean;
        message: string;
    };
}
