import { useState, useEffect } from 'react';
import { getBaseDataAction } from '@Store/base';
import { useDispatch } from 'react-redux';

// import { checkServer, getSiteBaseData } from '@API';

export default function useLogin() {
    const dispatch = useDispatch();
    const [AppBaseCheckState, setAppBaseCheckState] = useState<boolean>(false);

    useEffect(() => {
        const appStart = () => {
            console.log(':: AppStart ::');
            dispatch(getBaseDataAction());
        };

        appStart();
    }, []);

    useEffect(() => {
        // const doCheckServer = async () => {
        //     await checkServer();

        //     const baseData = await getSiteBaseData();
        //     console.log(baseData);
        // };

        // doCheckServer();
        setTimeout(() => {
            setAppBaseCheckState(true);
        }, 4000);
    }, []);

    return {
        AppBaseCheckState,
    };
}
