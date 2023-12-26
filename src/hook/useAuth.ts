import { saveToken, removeToken, getAccessToken } from '@/Helper';
import { ServiceLogout, ServiceLogin, ServiceTokenInfo } from '@/ServerInterface';
import lodash from 'lodash';

export default function useAuth() {
    // 로그인 시도
    const HandleAttemptLogin = async ({ email, password }: { email: string; password: string }): Promise<{ result: boolean; message: string }> => {
        const { status, message, payload } = await ServiceLogin({ email: email, password: password });

        if (status) {
            HandleTokenSave({ access_token: payload.access_token, refresh_token: payload.refresh_token });
        }

        return {
            result: status,
            message: message
        };
    };

    // 로그아웃 처리
    const HandleLogout = async (): Promise<{ result: boolean; message: string }> => {
        const { status, message } = await ServiceLogout();

        if (status) {
            removeToken();
        }

        return {
            result: status,
            message: message
        };
    };

    // 토큰 체크
    const HandleTokenCheck = async (): Promise<boolean> => {
        const accessToken = getAccessToken();
        if (!lodash.isEmpty(accessToken)) {
            const { status } = await ServiceTokenInfo();

            if (!status) {
                HandleTokenRemove();
            }

            return status;
        }

        return false;
    };

    // 토큰 저장
    const HandleTokenSave = ({ access_token, refresh_token }: { access_token: string; refresh_token: string }) => {
        saveToken({ accessToken: access_token, refreshToken: refresh_token });
    };

    // 토큰 제거
    const HandleTokenRemove = () => {
        removeToken();
    };

    // 로그인 유무 체크
    const HandleCheckToken = () => {
        return !lodash.isEmpty(getAccessToken());
    };

    return {
        HandleTokenSave,
        HandleTokenRemove,
        HandleAttemptLogin,
        HandleTokenCheck,
        HandleCheckToken,
        HandleLogout
    };
}
