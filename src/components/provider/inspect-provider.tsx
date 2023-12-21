'use client';
import { Fragment, ReactNode, useState, useEffect } from 'react';
import { SplashScreen, LandingScreen } from '@/Screen';
import ServerInterface from '@/Common/server-interface';
import { useRecoilState } from 'recoil';
import { AppRootState } from '@/State';
import lodash from 'lodash';
import { SystemNoticeBox } from '@/Element';

const { ServiceCheckStatus, ServiceCheckNotice, ServiceGetAppData } = ServerInterface;

export default function InspectProvider({ children }: { children: ReactNode }) {
    const [appLoading, setAppLoading] = useState<boolean>(true);
    const [serverCheckStatus, setServerCheckStatus] = useState<boolean | null>(null);
    const [checkServerStatus, setCheckServerStatus] = useState<boolean>(false);
    const [checkServerNotice, setCheckServerNotice] = useState<boolean>(false);
    const [checkServerAppData, setCheckServerAppData] = useState<boolean>(false);

    const [appRootState, setAppRootState] = useRecoilState(AppRootState);

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

    useEffect(() => {
        if (checkServerAppData) {
            setServerCheckStatus(true);
        }
    }, [checkServerAppData]);

    useEffect(() => {
        const thisSetSuccess = () => {
            setAppRootState((prevState) => ({
                ...prevState,
                checkServer: true
            }));

            setAppLoading(false);
        };

        if (serverCheckStatus) {
            // TODO: 체크 완료후 로그인 체크 어떻게 할것 인지?

            thisSetSuccess();
        }
    }, [serverCheckStatus, setAppRootState]);

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
