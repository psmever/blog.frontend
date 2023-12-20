import AxiosUtil from '@/Common/axios-util';
import { ServicesResult, AppRootDataInterface } from '@/Types';

const ServerInterface = {
    ServiceCheckStatus: (): Promise<ServicesResult<null>> => {
        // 서버 체크
        return AxiosUtil({
            method: 'get',
            url: `/api/system/status`,
            payload: null
        });
    },
    ServiceCheckNotice: (): Promise<ServicesResult<{ contents: string }>> => {
        // 서버 공지 사항 체크
        return AxiosUtil({
            method: 'get',
            url: `/api/system/notice`,
            payload: null
        });
    },
    ServiceGetAppData: (): Promise<ServicesResult<AppRootDataInterface>> => {
        // App Root Data
        return AxiosUtil({
            method: 'get',
            url: `/api/system/app-data`,
            payload: null
        });
    }
};

export default ServerInterface;
