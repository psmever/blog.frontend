import React, { useEffect } from 'react';
import * as API from 'modules/API';
import * as Helper from 'lib/Helper';

export default function TestPage() {

    // TODO 로그인 토큰 리프레시 테스트 하고 프로젝트 진행~
    const loginRequest = async () => {
        const loginResult = await API.login();
        Helper.saveLoginToken(loginResult.data);
        console.debug('::login end::');
    }

    const loginCheckRequest = async () => {
        const loginCheckResult = await API.loginCheck();
        if(loginCheckResult.state === false) {
            Helper.removeLoginToken();
        } else {
            console.debug(loginCheckResult.data.result);
        }
    }

    useEffect(() => {
        console.debug(':: TestPage Start :: ');

        // Helper.removeLoginToken();
        console.debug({getAccessToken:Helper.getAccessToken()});

        if(Helper.isEmpty(Helper.getAccessToken()) === true) {
            loginRequest();
        } else {
            loginCheckRequest();
        }
    }, []);

    return (
        <>
            TestPage
        </>
    );
}