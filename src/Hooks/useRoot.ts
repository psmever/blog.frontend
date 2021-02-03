import { useState, useEffect } from 'react';
import { getBaseDataAction } from '@Store/base';
import { useDispatch } from 'react-redux';

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
        setTimeout(() => {
            setAppBaseCheckState(true);
        }, 4000);
    }, []);

    return {
        AppBaseCheckState,
    };
}
