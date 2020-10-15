import React, {useEffect} from 'react';
import { BodyLoading } from 'components/elements';
import _Alert_ from 'lib/_Alert_';
import * as Helper from 'lib/Helper';
import {logout}  from 'modules/API';
import history from 'modules/History';

export default function LogoutPage() {



    useEffect(() => {
        async function callLogout() {
            const response = await logout();
            if(response.status === true) {
                Helper.removeLoginToken();
                _Alert_.thenGoHome({text:'로그아웃 되었습니다.'});
            } else {
                history.push(process.env.PUBLIC_URL + '/');
            }
        }

        const checkResult = Helper.getLocalToken();
        console.debug('logout login_state: ', checkResult.login_state);
        if(checkResult.login_state === true) {
            callLogout();
        } else {
            _Alert_.thenGoHome({text:'로그인 되어 있지 않습니다.'});
        }
    }, []);

    return (
        <>
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <BodyLoading/>
            </div>
       </>
    );
}