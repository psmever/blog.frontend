'use client';
import { Fragment, ReactNode, useState, useEffect } from 'react';
import { SplashScreen, LandingScreen } from '@/Screen';
import ServerInterface from '@/Common/server-interface';
import { useRecoilState } from 'recoil';
import { AppRootState } from '@/State';
import lodash from 'lodash';

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
            {lodash.size(appRootState.systemNotice) > 0 && (
                <div className="flex bg-indigo-900 text-center p-2 sticky top-0 z-50">
                    <div className="grow items-center">
                        <div className="flex flex-col items-center text-indigo-100 space-y-2">
                            <span className="flex rounded-full bg-indigo-500 text-xs font-bold px-3">Notice</span>
                            <span className="flex text-left">
                                <div className="text-little break-words text-wrap whitespace-pre-line" dangerouslySetInnerHTML={{ __html: appRootState.systemNotice }}></div>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div
                            className="bg-indigo-800 items-center text-indigo-100 leading-none flex cursor-pointer"
                            onClick={() =>
                                setAppRootState((prevState) => ({
                                    ...prevState,
                                    systemNotice: ``
                                }))
                            }
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            )}
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
