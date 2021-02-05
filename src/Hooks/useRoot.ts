import { useState, useEffect } from 'react';
import { baseServerCheck } from '@Store/common';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@Modules';
import { checkServer, checkServerNotice } from '@API';

export default function useLogin() {
    const dispatch = useDispatch();
    const { LOADING, CHECK } = useSelector((store: RootState) => ({
        LOADING: store.common.loading,
        CHECK: store.common.check,
    }));

    const [AppBaseCheckState, setAppBaseCheckState] = useState<boolean>(false);

    // useEffect(() => {
    //     console.log(LOADING);
    // }, [LOADING]);

    useEffect(() => {
        const appStart = async () => {
            console.log(':: AppStart ::');

            // baseServerCheck();
            dispatch(baseServerCheck());

            // const test = await checkServerNotice();

            // console.log(test.status);
        };

        appStart();
    }, []);

    useEffect(() => {
        // TODO: 2021-02-04 00:07 서버 기본 체크, 정보 등록.
        // const doCheckServer = async () => {
        //     await checkServer();

        //     const baseData = await getSiteBaseData();
        //     console.log(baseData);
        // };

        // doCheckServer();

        if (CHECK === true) {
            setAppBaseCheckState(true);
        }
    }, [CHECK]);

    return {
        AppBaseCheckState,
    };
}
