'use client';
import { Fragment, ReactNode, useState, useEffect } from 'react';
import { SplashScreen, LandingScreen } from '@/Screen';
import { ServiceCheckStatus, ServiceCheckNotice, ServiceGetAppData } from '@/Common/server-interface';
import { useRecoilState } from 'recoil';
import { AppRootState } from '@/State';
import lodash from 'lodash';
import { SystemNoticeBox } from '@/Element';
import { useAuth } from '@/Hook';
import { getAccessToken, getRefreshToken } from '@/Helper';

export default function InspectProvider({ children }: { children: ReactNode }) {
    const [appLoading, setAppLoading] = useState<boolean>(true);
    const [serverCheckStatus, setServerCheckStatus] = useState<boolean | null>(null);
    const [checkServerStatus, setCheckServerStatus] = useState<boolean>(false);
    const [checkServerNotice, setCheckServerNotice] = useState<boolean>(false);
    const [checkServerAppData, setCheckServerAppData] = useState<boolean>(false);
    const [checkLogin, setCheckLogin] = useState<boolean>(false);

    const [appRootState, setAppRootState] = useRecoilState(AppRootState);
    const { HandleTokenCheck } = useAuth();

    // 서버 상태 체크
    useEffect(() => {
        const thisServerCheck = async () => {
            const { status } = await ServiceCheckStatus();
            if (status) {
                setCheckServerStatus(true);
            } else {
                setServerCheckStatus(false);
            }
        };

        thisServerCheck().then();
    }, []);

    // 시스템 공지사항 체크
    useEffect(() => {
        const thisServerNoticeCheck = async () => {
            const { payload } = await ServiceCheckNotice();
            if (payload && payload.contents) {
                setAppRootState((prevState) => ({
                    ...prevState,
                    systemNotice: payload.contents
                }));
            }
            setCheckServerNotice(true);
        };
        if (checkServerStatus) {
            thisServerNoticeCheck().then();
        }
    }, [checkServerStatus, setAppRootState]);

    // 공통 데이터 조회
    useEffect(() => {
        const thisServerGetAppData = async () => {
            const { status, payload } = await ServiceGetAppData();
            if (status) {
                setAppRootState((prevState) => ({
                    ...prevState,
                    rootData: payload
                }));
            }

            setCheckServerAppData(true);
        };
        if (checkServerNotice) {
            thisServerGetAppData().then();
        }
    }, [checkServerNotice, setAppRootState]);

    // 로그인토큰 체크
    useEffect(() => {
        const thisLoginCheck = async () => {
            if (await HandleTokenCheck()) {
                setAppRootState((prevState) => ({
                    ...prevState,
                    login: {
                        status: true,
                        token: {
                            accessToken: getAccessToken(),
                            refreshToken: getRefreshToken()
                        }
                    }
                }));
            } else {
                setAppRootState((prevState) => ({
                    ...prevState,
                    login: {
                        status: false,
                        token: {
                            accessToken: ``,
                            refreshToken: ``
                        }
                    }
                }));
            }
        };

        if (checkServerAppData) {
            thisLoginCheck().then(() => setCheckLogin(true));
        }

        // FIXME : 종속성 disable.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkServerAppData]);

    useEffect(() => {
        const thisSetSuccess = () => {
            setAppRootState((prevState) => ({
                ...prevState,
                checkServer: true
            }));

            setAppLoading(false);
        };

        if (checkLogin) {
            thisSetSuccess();
        }
    }, [checkLogin, setAppRootState]);

    return (
        <Fragment>
            {lodash.size(appRootState.systemNotice) > 0 && <SystemNoticeBox />}
            {(() => {
                if (serverCheckStatus === false) {
                    return <LandingScreen />;
                }

                if (appLoading) {
                    return <SplashScreen />;
                }

                return children;
            })()}
        </Fragment>
    );
}
