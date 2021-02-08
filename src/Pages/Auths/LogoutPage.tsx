import React, { useEffect } from 'react';
import { BodySpinner } from '@Element/Spinners';
import history from '@Module/History';
import { useToasts } from 'react-toast-notifications';
import { logout } from '@API';
import { removeLoginToken, getLocalToken } from '@Helper';
import { useDispatch } from 'react-redux';
import { logoutSetAction } from '@Store/App';

export default function LogoutPage() {
    const { addToast } = useToasts();
    const dispatch = useDispatch();

    useEffect(() => {
        async function callLogout() {
            const response = await logout();
            dispatch(logoutSetAction());
            if (response.status === true) {
                removeLoginToken();
                addToast('로그아웃 되었습니다.', { appearance: 'success', autoDismiss: true });
                history.push(process.env.PUBLIC_URL + '/');
            } else {
                history.push(process.env.PUBLIC_URL + '/');
            }
        }

        const checkResult = getLocalToken();
        if (checkResult.login_state === true) {
            callLogout();
        } else {
            addToast('로그인 상태가 아닙니다.', { appearance: 'info', autoDismiss: true });
            history.push(process.env.PUBLIC_URL + '/');
        }
    }, []);

    return <BodySpinner />;
}
