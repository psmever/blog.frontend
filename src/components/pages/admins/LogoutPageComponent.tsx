import React, {useEffect} from 'react';
import { BodyLoading } from 'components/elements';
import * as Helper from 'lib/Helper';
import {logout}  from 'modules/API';
import history from 'modules/History';
import { useToasts } from 'react-toast-notifications'

export default function LogoutPage() {
    const { addToast } = useToasts();

    useEffect(() => {
        async function callLogout() {
            const response = await logout();
            if(response.status === true) {
                Helper.removeLoginToken();
                addToast('로그아웃 되었습니다.', { appearance: 'success', autoDismiss: true });
                history.push(process.env.PUBLIC_URL + '/');
            } else {
                history.push(process.env.PUBLIC_URL + '/');
            }
        }

        const checkResult = Helper.getLocalToken();
        if(checkResult.login_state === true) {
            callLogout();
        } else {
            addToast('로그인 상태가 아닙니다.', { appearance: 'info', autoDismiss: true });
            history.push(process.env.PUBLIC_URL + '/');
        }
    }, [addToast]);

    return (
        <>
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <BodyLoading/>
            </div>
       </>
    );
}