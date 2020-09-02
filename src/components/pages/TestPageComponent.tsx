import React, { useEffect } from 'react';
import * as API from 'modules/API';
import * as Helper from 'lib/Helper';
import DefaultAxios2 from 'lib/DefaultAxios2';
import axios from 'axios';

export default function TestPage() {

    // TODO 로그인 토큰 리프레시 테스트 하고 프로젝트 진행~
    const loginRequest = async () => {
        console.debug('::login start::');
        const loginResult = await API.login();
        Helper.saveLoginToken(loginResult.data);
        console.debug('::login end::');
    }

    const loginRequest2 = async () => {
        console.debug('::testCheck start::');
        const loginResult = await API.testCheck();
        console.debug(loginResult);
        // Helper.saveLoginToken(loginResult.data);
        console.debug('::testCheck end::');
        // loginCheckRequest();
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
            // loginCheckRequest();
            loginRequest2();
        }

    }, []);

    return (
        <>
            TestPage
        </>
    );
}